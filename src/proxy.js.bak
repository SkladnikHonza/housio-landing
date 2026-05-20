import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Matcher ignoruje API routy, _next, statické soubory
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
