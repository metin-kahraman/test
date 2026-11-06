// lib/seo.ts
import urlMappings from '../../public/locales/urlMapping';

export const locales = ['en', 'tr', 'ru', 'pl', 'lt'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://orangedentclinic.com';

/** Slug segmentlerini encode eder (mūsų-klinika, skaitmeninė-... vb.) */
const encodePath = (p: string) =>
  p.split('/').map(encodeURIComponent).join('/');

/** Mevcut davranış: düz path prefix'leme (anasayfa vb. için) */
export function getLocalizedUrl(locale: string, path: string = ''): string {
  const clean = path.startsWith('/') ? path : path ? `/${path}` : '';
  return locale === defaultLocale
    ? `${baseUrl}${clean}`
    : `${baseUrl}/${locale}${clean}`;
}

/** Kanonik (EN) slug -> tüm dillerdeki hreflang haritası */
export function buildLanguageAlternates(path: string = '') {
  // EN'de olmayan path'ler için eski davranışa düş
  const enSlug = path.replace(/^\//, '');
  const hasMapping =
    !enSlug || Object.values(urlMappings.en).includes(enSlug);

  if (!hasMapping) {
    const languages: Record<string, string> = {};
    locales.forEach((loc) => {
      languages[loc] = getLocalizedUrl(loc, path);
    });
    languages['x-default'] = getLocalizedUrl(defaultLocale, path);
    return languages;
  }

  const languages: Record<string, string> = {};
  for (const loc of locales) {
    const localized =
      loc === 'en' ? enSlug : urlMappings[loc]?.[enSlug] ?? enSlug;
    languages[loc] = getLocalizedUrl(loc, `/${localized}`);
  }
  languages['x-default'] = getLocalizedUrl(
    defaultLocale,
    `/${enSlug}`
  );
  return languages;
}

/** Sayfa metadata'sında kullan: herhangi bir dilden path -> doğru alternates */
export function getAlternatesFromPath(path: string, fromLocale: Locale) {
  const clean = path.replace(/^\//, '');

  // EN path'i bul
  const enSlug =
    fromLocale === 'en' ? clean : urlMappings.en[clean];
  if (!enSlug) return null;

  const perLocale: Partial<Record<Locale, string>> = {};
  for (const loc of locales) {
    const localized =
      loc === 'en' ? enSlug : urlMappings[loc]?.[enSlug];
    if (!localized) return null; // bir dilde yoksa hreflang seti üretme
    perLocale[loc] = localized;
  }
  return perLocale as Record<Locale, string>;
}

/** Kanonik EN slug listesi (sitemap için) */
export function getEnglishPages(): string[] {
  return Array.from(new Set(Object.values(urlMappings.en)));
}
// lib/seo.ts sonuna ekle

/**
 * Kanonik (EN) path -> tüm dillerdeki hreflang haritası.
 * Slug çevirisini urlMappings üzerinden yapar.
 */
export function buildHreflang(englishPath: string): Record<string, string> {
  const clean = englishPath.replace(/^\/+|\/+$/g, '');
  const enc = (p: string) => p.split('/').map(encodeURIComponent).join('/');

  const languages: Record<string, string> = {};
  for (const loc of locales) {
    const localized =
      loc === 'en' ? clean : urlMappings[loc]?.[clean] ?? clean;
    const prefix = loc === defaultLocale ? '' : `/${loc}`;
    languages[loc] = `${baseUrl}${prefix}/${enc(localized)}`;
  }
  // ✅ x-default her zaman Türkçe sayfaya gitmeli
  languages['x-default'] = languages['tr'];
  return languages;
}

/** Kanonik path -> belirli dildeki URL */
export function getCanonicalUrl(locale: string, englishPath: string): string {
  const clean = englishPath.replace(/^\/+|\/+$/g, '');
  const localized =
    locale === 'en' ? clean : urlMappings[locale]?.[clean] ?? clean;
  const enc = (p: string) => p.split('/').map(encodeURIComponent).join('/');
  return getLocalizedUrl(locale, `/${enc(localized)}`);
}