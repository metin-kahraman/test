import urlMappings from './urlMappings.js';

export const baseUrl = 'https://orangedentclinic.com';
export const defaultLocale = 'en';
// x-default intentionally targets Russian because Russian-speaking international patients are the primary audience.
export const xDefaultLocale = 'ru';
export const locales = ['en', 'tr', 'ru', 'pl', 'lt'] as const;
export type Locale = (typeof locales)[number];

const typedUrlMappings = urlMappings as Record<string, Record<Locale, string>>;

export const openGraphLocales: Record<Locale, string> = {
  en: 'en_US',
  tr: 'tr_TR',
  ru: 'ru_RU',
  pl: 'pl_PL',
  lt: 'lt_LT',
};

export function getOpenGraphLocale(locale: string): string {
  assertLocale(locale);
  return openGraphLocales[locale];
}

function assertLocale(locale: string): asserts locale is Locale {
  if (!locales.includes(locale as Locale)) {
    throw new RangeError(`Unsupported locale: ${locale}`);
  }
}

function cleanPath(path: string): string {
  return path.replace(/^\/+|\/+$/g, '');
}

function encodePath(path: string): string {
  return cleanPath(path).split('/').map(encodeURIComponent).join('/');
}

export function getLocalizedPath(locale: string, englishPath: string): string {
  assertLocale(locale);
  const clean = cleanPath(englishPath);
  return encodePath(clean ? typedUrlMappings[clean]?.[locale] ?? clean : '');
}

export function getEnglishPath(locale: string, localizedPath: string): string | null {
  assertLocale(locale);
  const clean = cleanPath(localizedPath)
    .split('/')
    .map((segment) => decodeURIComponent(segment))
    .join('/');

  return (
    Object.entries(typedUrlMappings).find(
      ([, mapping]) => cleanPath(mapping[locale]) === clean
    )?.[0] ?? null
  );
}

export function getLocalizedUrl(locale: string, englishPath = ''): string {
  assertLocale(locale);
  const path = getLocalizedPath(locale, englishPath);
  return `${baseUrl}/${locale}${path ? `/${path}` : ''}`;
}

export function getCanonicalUrl(locale: string, englishPath: string): string {
  return getLocalizedUrl(locale, englishPath);
}

export function buildHreflang(englishPath: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = getLocalizedUrl(loc, englishPath);
  }
  languages['x-default'] = languages[xDefaultLocale];
  return languages;
}

export function getEnglishPages(): string[] {
  return Object.keys(typedUrlMappings).filter((path) => path !== 'contact');
}