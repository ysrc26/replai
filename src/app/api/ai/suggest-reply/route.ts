// src/app/api/ai/suggest-reply/route.ts
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { Database } from '@/types/database'

export async function POST(request: NextRequest) {
  try {
    const supabase = createRouteHandlerClient<Database>({ cookies })
    
    const { data: { session }, error: sessionError } = await supabase.auth.getSession()
    
    if (sessionError || !session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { message, conversationId } = await request.json()

    if (!message || !conversationId) {
      return NextResponse.json({ error: 'Message and conversationId are required' }, { status: 400 })
    }

    // Get business profile
    const { data: profile, error: profileError } = await supabase
      .from('business_profiles')
      .select('*')
      .eq('user_id', session.user.id)
      .single()

    if (profileError || !profile) {
      return NextResponse.json({ error: 'Business profile not found' }, { status: 404 })
    }

    // Get conversation context
    const { data: conversation, error: convError } = await supabase
      .from('conversations')
      .select(`
        *,
        messages (
          content,
          sender_type,
          timestamp
        )
      `)
      .eq('id', conversationId)
      .eq('user_id', session.user.id)
      .single()

    if (convError || !conversation) {
      return NextResponse.json({ error: 'Conversation not found' }, { status: 404 })
    }

    // Get target audiences (for future use in AI suggestions)
    await supabase
      .from('target_audiences')
      .select('*')
      .eq('user_id', session.user.id)
      .eq('is_active', true)

    // TODO: Call OpenAI/Claude API with context
    // For now, return mock suggestions
    const suggestions = [
      {
        content: `שלום! תודה רבה על הפנייה. אני ${profile.business_name} ואשמח לעזור לך.`,
        confidence: 0.9,
        reasoning: 'תגובה מנומסת וחמה שמציגה את העסק',
        target_audience: null,
        includes_promotion: false
      },
      {
        content: `היי! ${profile.business_name} כאן. נשמע מעניין! בואו נתאם שיחה לפרטים נוספים.`,
        confidence: 0.8,
        reasoning: 'תגובה יותר קזואלית המעודדת המשך שיחה',
        target_audience: null,
        includes_promotion: false
      }
    ]

    return NextResponse.json({ suggestions })
  } catch (error) {
    console.error('Error in POST /api/ai/suggest-reply:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}