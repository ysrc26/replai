// src/types/database.ts
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          created_at: string
          subscription_plan: 'trial' | 'personal' | 'business'
          trial_expires_at: string
          onboarding_completed: boolean
          last_active: string
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
          subscription_plan?: 'trial' | 'personal' | 'business'
          trial_expires_at?: string
          onboarding_completed?: boolean
          last_active?: string
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
          subscription_plan?: 'trial' | 'personal' | 'business'
          trial_expires_at?: string
          onboarding_completed?: boolean
          last_active?: string
        }
      }
      business_profiles: {
        Row: {
          id: string
          user_id: string
          business_name: string
          business_description: string | null
          services_offered: string[]
          communication_style: string | null
          tone_preferences: Json | null
          phrases_to_avoid: string[]
          preferred_greetings: string[]
          preferred_closings: string[]
          ai_personality_prompt: string | null
          custom_instructions: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          business_name: string
          business_description?: string | null
          services_offered?: string[]
          communication_style?: string | null
          tone_preferences?: Json | null
          phrases_to_avoid?: string[]
          preferred_greetings?: string[]
          preferred_closings?: string[]
          ai_personality_prompt?: string | null
          custom_instructions?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          business_name?: string
          business_description?: string | null
          services_offered?: string[]
          communication_style?: string | null
          tone_preferences?: Json | null
          phrases_to_avoid?: string[]
          preferred_greetings?: string[]
          preferred_closings?: string[]
          ai_personality_prompt?: string | null
          custom_instructions?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      target_audiences: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          keywords: string[]
          special_pricing: string | null
          custom_messaging: string | null
          priority: number
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          keywords?: string[]
          special_pricing?: string | null
          custom_messaging?: string | null
          priority?: number
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string | null
          keywords?: string[]
          special_pricing?: string | null
          custom_messaging?: string | null
          priority?: number
          is_active?: boolean
          created_at?: string
        }
      }
      conversations: {
        Row: {
          id: string
          user_id: string
          platform: 'whatsapp' | 'instagram' | 'manual'
          external_conversation_id: string | null
          customer_name: string | null
          customer_username: string | null
          customer_phone: string | null
          customer_avatar_url: string | null
          last_message_at: string
          status: 'active' | 'closed' | 'waiting'
          detected_audience_id: string | null
          conversion_status: 'lead' | 'interested' | 'converted' | 'lost' | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          platform: 'whatsapp' | 'instagram' | 'manual'
          external_conversation_id?: string | null
          customer_name?: string | null
          customer_username?: string | null
          customer_phone?: string | null
          customer_avatar_url?: string | null
          last_message_at?: string
          status?: 'active' | 'closed' | 'waiting'
          detected_audience_id?: string | null
          conversion_status?: 'lead' | 'interested' | 'converted' | 'lost' | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          platform?: 'whatsapp' | 'instagram' | 'manual'
          external_conversation_id?: string | null
          customer_name?: string | null
          customer_username?: string | null
          customer_phone?: string | null
          customer_avatar_url?: string | null
          last_message_at?: string
          status?: 'active' | 'closed' | 'waiting'
          detected_audience_id?: string | null
          conversion_status?: 'lead' | 'interested' | 'converted' | 'lost' | null
          created_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          conversation_id: string
          sender_type: 'customer' | 'business' | 'ai_suggestion'
          content: string
          timestamp: string
          ai_suggested_replies: Json | null
          selected_reply_index: number | null
          final_sent_message: string | null
          was_edited: boolean
          detected_keywords: string[]
          detected_audience_id: string | null
          message_status: 'pending' | 'sent' | 'failed'
          created_at: string
        }
        Insert: {
          id?: string
          conversation_id: string
          sender_type: 'customer' | 'business' | 'ai_suggestion'
          content: string
          timestamp?: string
          ai_suggested_replies?: Json | null
          selected_reply_index?: number | null
          final_sent_message?: string | null
          was_edited?: boolean
          detected_keywords?: string[]
          detected_audience_id?: string | null
          message_status?: 'pending' | 'sent' | 'failed'
          created_at?: string
        }
        Update: {
          id?: string
          conversation_id?: string
          sender_type?: 'customer' | 'business' | 'ai_suggestion'
          content?: string
          timestamp?: string
          ai_suggested_replies?: Json | null
          selected_reply_index?: number | null
          final_sent_message?: string | null
          was_edited?: boolean
          detected_keywords?: string[]
          detected_audience_id?: string | null
          message_status?: 'pending' | 'sent' | 'failed'
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// src/types/app.ts
export interface User {
  id: string
  email: string
  subscription_plan: 'trial' | 'personal' | 'business'
  trial_expires_at: string
  onboarding_completed: boolean
}

export interface BusinessProfile {
  id: string
  user_id: string
  business_name: string
  business_description?: string
  services_offered: string[]
  communication_style?: string
  tone_preferences?: Record<string, boolean>
  phrases_to_avoid: string[]
  preferred_greetings: string[]
  preferred_closings: string[]
  ai_personality_prompt?: string
  custom_instructions?: string
}

export interface TargetAudience {
  id: string
  user_id: string
  name: string
  description?: string
  keywords: string[]
  special_pricing?: string
  custom_messaging?: string
  priority: number
  is_active: boolean
}

export interface Conversation {
  id: string
  user_id: string
  platform: 'whatsapp' | 'instagram' | 'manual'
  customer_name?: string
  customer_username?: string
  customer_phone?: string
  customer_avatar_url?: string
  last_message_at: string
  status: 'active' | 'closed' | 'waiting'
  detected_audience?: TargetAudience
  conversion_status?: 'lead' | 'interested' | 'converted' | 'lost'
  messages?: Message[]
}

export interface Message {
  id: string
  conversation_id: string
  sender_type: 'customer' | 'business' | 'ai_suggestion'
  content: string
  timestamp: string
  ai_suggested_replies?: string[]
  selected_reply_index?: number
  final_sent_message?: string
  was_edited: boolean
  detected_keywords: string[]
  detected_audience?: TargetAudience
  message_status: 'pending' | 'sent' | 'failed'
}

export interface ReplySuggestion {
  content: string
  confidence: number
  reasoning: string
  target_audience?: string
  includes_promotion?: boolean
}