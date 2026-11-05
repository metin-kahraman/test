// lib/schema.ts
import { baseUrl, getCanonicalUrl } from './seo';

export type ArticleSchemaInput = {
  locale: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  canonicalPath: string;
};

export function buildArticleSchema(input: ArticleSchemaInput) {
  const url = getCanonicalUrl(input.locale, input.canonicalPath);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    image: `${baseUrl}${input.image}`,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: input.locale,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: {
      '@type': 'Organization',
      name: input.authorName ?? 'Orange Dent Clinic',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Orange Dent Clinic',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
      },
    },
  };
}

export type BreadcrumbItem = { name: string; url: string };

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export type FaqItem = { question: string; answer: string };

export function buildFaqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
}

export function buildDentistSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Orange Dent Clinic',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    image: `${baseUrl}/images/og-default.svg`,
    telephone: '+90-000-000-0000',          // TODO: gerçek numara
    email: 'info@orangedentclinic.com',      // TODO: gerçek email
    address: {
      '@type': 'PostalAddress',
      streetAddress: '...',                  // TODO: sokak
      addressLocality: 'Kemer',
      addressRegion: 'Antalya',
      postalCode: '07980',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.5986,                     // TODO: doğrula
      longitude: 30.5604,                    // TODO: doğrula
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/orangedentclinic', // TODO: gerçek
      'https://www.facebook.com/orangedentclinic',  // TODO: gerçek
    ],
    priceRange: '₺₺',
  };
}