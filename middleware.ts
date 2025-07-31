// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { Database } from '@/types/database'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient<Database>({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Protected routes that require authentication
  const protectedRoutes = ['/dashboard', '/onboarding', '/profile', '/settings']
  const isProtectedRoute = protectedRoutes.some(route => 
    req.nextUrl.pathname.startsWith(route)
  )

  // If user is not signed in and trying to access protected route
  if (!session && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // If user is signed in and trying to access auth pages
  if (session && (req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/register')) {
    // Check if onboarding is completed
    const { data: userData } = await supabase
      .from('users')
      .select('onboarding_completed')
      .eq('id', session.user.id)
      .single()

    if (userData && !userData.onboarding_completed) {
      return NextResponse.redirect(new URL('/onboarding', req.url))
    }

    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  // If user is signed in and accessing root, redirect based on onboarding status
  if (session && req.nextUrl.pathname === '/') {
    const { data: userData } = await supabase
      .from('users')
      .select('onboarding_completed')
      .eq('id', session.user.id)
      .single()

    if (userData && !userData.onboarding_completed) {
      return NextResponse.redirect(new URL('/onboarding', req.url))
    }

    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return res
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public|.*\\.).*)',
  ],
}