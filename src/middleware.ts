import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { getLocalizedUrl, xDefaultLocale } from './lib/seo';
import { routing } from './i18n/routing';
 
const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = handleI18nRouting(request);
  const linkHeader = response.headers.get('Link');

  if (linkHeader) {
    const xDefaultUrl = getLocalizedUrl(xDefaultLocale);
    const normalizedLinkHeader = linkHeader.replace(
      /<[^>]+>;\s*rel="alternate";\s*hreflang="x-default"/,
      `<${xDefaultUrl}>; rel="alternate"; hreflang="x-default"`
    );

    if (normalizedLinkHeader !== linkHeader) {
      response.headers.set('Link', normalizedLinkHeader);
    }
  }

  return response;
}
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(tr|en|ru|pl|lt|)/:path*']
};