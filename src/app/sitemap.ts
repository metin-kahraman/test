// app/sitemap.ts
import type { MetadataRoute } from 'next';
import {
  locales,
  defaultLocale,
  getEnglishPages,
  getLocalizedUrl,
  buildHreflang,
} from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', ...getEnglishPages()].flatMap((englishPath) => {
    const languages = buildHreflang(englishPath);

    return locales.map((locale) => ({
      url: getLocalizedUrl(locale, englishPath),
      changeFrequency: 'monthly' as const,
      priority: englishPath === '' ? 1 : locale === defaultLocale ? 0.9 : 0.8,
      alternates: { languages },
    }));
  });
}