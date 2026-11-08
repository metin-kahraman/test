import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getMessages, getTranslations } from 'next-intl/server';
import {
  baseUrl,
  buildHreflang,
  getCanonicalUrl,
  getLocalizedPath,
  getOpenGraphLocale,
} from './seo';

type MessageObject = Record<string, unknown>;

type SeoEntry = {
  title?: string;
  description?: string;
  meta_title?: string;
  meta_description?: string;
  keywords?: string;
  url?: string;
};

function normalizePath(path: string): string {
  return path
    .replace(/^\/+|\/+$/g, '')
    .split('/')
    .map((segment) => decodeURIComponent(segment))
    .join('/');
}

function findSeoEntryPath(messages: MessageObject, englishPath: string): string[] | null {
  const target = normalizePath(englishPath);
  const blogPath = target.replace(/^blog\//, '');
  const matches: Array<{ path: string[]; score: number }> = [];

  function visit(value: unknown, path: string[]): void {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return;
    const object = value as MessageObject;
    const seo = object.seo;
    if (seo && typeof seo === 'object' && !Array.isArray(seo)) {
      const url = (seo as SeoEntry).url;
      if (typeof url === 'string') {
        const normalizedUrl = normalizePath(url);
        const score =
          normalizedUrl === target
            ? 3
            : normalizedUrl === blogPath || `blog/${normalizedUrl}` === target
              ? 2
              : 0;
        if (score > 0) matches.push({ path: [...path, 'seo'], score });
      }
    }

    for (const [key, child] of Object.entries(object)) {
      visit(child, [...path, key]);
    }
  }

  visit(messages, []);
  matches.sort((a, b) => b.score - a.score);
  return matches[0]?.path ?? null;
}

function getValueAtPath(value: unknown, path: string[]): unknown {
  return path.reduce<unknown>((current, key) => {
    if (!current || typeof current !== 'object' || Array.isArray(current)) return undefined;
    return (current as MessageObject)[key];
  }, value);
}

function getReadableTopic(locale: string, englishPath: string): string {
  const localizedPath = getLocalizedPath(locale, englishPath);
  const slug = localizedPath.split('/').pop() || englishPath.split('/').pop() || englishPath;
  return decodeURIComponent(slug)
    .split(/[-_]+/)
    .map((word) => word ? `${word[0].toLocaleUpperCase(locale)}${word.slice(1)}` : word)
    .join(' ');
}

async function getRouteMetadata(locale: string, englishPath: string): Promise<Metadata> {
  const [englishMessages, localizedMessages, fallbackT] = await Promise.all([
    getMessages({ locale: 'en' }),
    getMessages({ locale }),
    getTranslations({ locale, namespace: 'HomePage.SeoFallback' }),
  ]);
  const entryPath = findSeoEntryPath(englishMessages, englishPath);
  const translatedEntry = entryPath ? getValueAtPath(localizedMessages, entryPath) : null;
  const seo =
    translatedEntry && typeof translatedEntry === 'object'
      ? (translatedEntry as SeoEntry)
      : {};
  const topic = getReadableTopic(locale, englishPath);
  const title = seo.title || seo.meta_title || fallbackT('title', { topic });
  const description = seo.description || seo.meta_description || fallbackT('description', { topic });
  const canonicalUrl = getCanonicalUrl(locale, englishPath);

  return {
    title,
    description,
    keywords: seo.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: buildHreflang(englishPath),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Orange Dent Clinic',
      locale: getOpenGraphLocale(locale),
      type: englishPath.startsWith('blog/') ? 'article' : 'website',
      images: [{
        url: `${baseUrl}/og-clinic.jpg`,
        width: 1200,
        height: 630,
        alt: title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og-clinic.jpg`],
    },
  };
}

export function createRouteMetadataGenerator(englishPath: string) {
  return async function generateMetadata({
    params,
  }: {
    params: { locale: string };
  }): Promise<Metadata> {
    return getRouteMetadata(params.locale, englishPath);
  };
}

export function createNoIndexMetadataGenerator(englishPath: string, canonicalPath?: string) {
  return async function generateMetadata({
    params,
  }: {
    params: { locale: string };
  }): Promise<Metadata> {
    return {
      ...(await getRouteMetadata(params.locale, canonicalPath ?? englishPath)),
      robots: { index: false, follow: true },
    };
  };
}

export default function RouteMetadataLayout({ children }: { children: ReactNode }): ReactNode {
  return children;
}
