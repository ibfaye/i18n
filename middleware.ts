import { authMiddleware } from '@clerk/nextjs'
import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'

const I18Middleware = createI18nMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  urlMappingStrategy: 'rewrite',
})

const middleware = (request: NextRequest) => {
  return I18Middleware(request)
}

export default authMiddleware({
  beforeAuth: (req) => {
    return middleware(req)
  },
  publicRoutes: ['/', '/:locale/sign-in'],
})

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}
