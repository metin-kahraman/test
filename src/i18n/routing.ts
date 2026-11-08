// routing.ts
import { defineRouting } from 'next-intl/routing';
import type { Pathnames } from 'next-intl/routing';
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import urlMappings from '../lib/urlMappings.js';

const locales = ['en', 'tr', 'ru', 'pl', 'lt'] as const;
const pathnames: Record<string, Record<string, string>> = {};
for (const [enSlug, mapping] of Object.entries(urlMappings)) {
  pathnames[`/${enSlug}`] = {};
  for (const [loc, slug] of Object.entries(mapping as Record<string, string>)) {
    pathnames[`/${enSlug}`][loc] = `/${slug}`;
  }
}

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
  localePrefix: 'always',
  pathnames: pathnames as Pathnames<typeof locales>,
});

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);