// app/sitemap.ts
import type { MetadataRoute } from 'next';
import {
  locales,
  defaultLocale,
  getEnglishPages,
  getLocalizedUrl,
} from '@/lib/seo';
import urlMappings from '../../public/locales/urlMapping';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = getEnglishPages();

  // Anasayfayı da ekle
  const allPages = ['', ...pages];

  return allPages.flatMap((enSlug) => {
    // Bu sayfa için tüm dillerdeki URL'ler (hreflang haritası)
    const languages: Record<string, string> = {};
    for (const loc of locales) {
      const localized =
        enSlug === ''
          ? ''
          : loc === 'en'
            ? enSlug
            : urlMappings[loc]?.[enSlug] ?? enSlug;
      languages[loc] = getLocalizedUrl(loc, localized ? `/${localized}` : '');
    }
    languages['x-default'] = getLocalizedUrl(
      defaultLocale,
      enSlug ? `/${enSlug}` : ''
    );

    return locales.map((loc) => {
      const localized =
        enSlug === ''
          ? ''
          : loc === 'en'
            ? enSlug
            : urlMappings[loc]?.[enSlug] ?? enSlug;
      return {
        url: getLocalizedUrl(loc, localized ? `/${localized}` : ''),
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority:
          enSlug === '' ? 1 : loc === defaultLocale ? 0.9 : 0.8,
        alternates: { languages },
      };
    });
  });
}