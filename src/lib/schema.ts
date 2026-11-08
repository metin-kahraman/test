// lib/schema.ts
import { baseUrl, getCanonicalUrl, type Locale } from './seo';

/* =========================================================
   ARTICLE
   ========================================================= */
export type ArticleSchemaInput = {
  locale: string;
  headline: string;
  description: string;
  image: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
  authorType?: 'Person' | 'Organization';
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
    ...(input.datePublished
      ? {
          datePublished: input.datePublished,
          dateModified: input.dateModified ?? input.datePublished,
        }
      : {}),
    inLanguage: input.locale,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: {
      '@type': input.authorType ?? 'Organization',
      name: input.authorName ?? 'Orange Dent Clinic',
      url: input.authorUrl ?? baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Orange Dent Clinic',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
      },
    },
  };
}

/* =========================================================
   BREADCRUMB
   ========================================================= */
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

/* =========================================================
   FAQ
   ========================================================= */
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

/* =========================================================
   DENTIST (LocalBusiness)
   ========================================================= */
type DentistSchemaOptions = {
  locale?: string;
};

export function buildDentistSchema(options: DentistSchemaOptions = {}) {
  const { locale } = options;
  const url = locale ? getCanonicalUrl(locale, '/') : baseUrl;
  const serviceNames: Record<Locale, string[]> = {
    en: [
      'Dental implants',
      'Cosmetic dentistry',
      'Orthodontics',
      'Teeth whitening',
      'Gum treatment',
      'Root canal treatment',
    ],
    tr: [
      'Diş implantı',
      'Estetik diş hekimliği',
      'Ortodonti',
      'Diş beyazlatma',
      'Diş eti tedavisi',
      'Kanal tedavisi',
    ],
    ru: [
      'Зубные импланты',
      'Эстетическая стоматология',
      'Ортодонтия',
      'Отбеливание зубов',
      'Лечение дёсен',
      'Лечение корневых каналов',
    ],
    pl: [
      'Implanty zębowe',
      'Stomatologia estetyczna',
      'Ortodoncja',
      'Wybielanie zębów',
      'Leczenie dziąseł',
      'Leczenie kanałowe',
    ],
    lt: [
      'Dantų implantai',
      'Estetinė odontologija',
      'Ortodontija',
      'Dantų balinimas',
      'Dantenų gydymas',
      'Šaknų kanalų gydymas',
    ],
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': `${baseUrl}/#organization`,
    name: 'Orange Dent Clinic',
    url,
    inLanguage: locale,
    logo: `${baseUrl}/images/OrangeDentClinic-logo.svg`,
       image: [
      `${baseUrl}/images/our-clinic-1.jpeg`,
      `${baseUrl}/images/our-clinic-2.jpeg`,
      `${baseUrl}/images/our-clinic-3.jpeg`,
      `${baseUrl}/images/our-clinic-4.jpeg`,
      `${baseUrl}/images/our-clinic-5.jpeg`,
      `${baseUrl}/images/our-clinic-8.jpeg`,
    ],
    email: 'info@orangedentclinic.com',    // TODO: gerçek email
    telephone: '+90-532-440-17-40',
    address: {
  '@type': 'PostalAddress',
  streetAddress: 'Merkez, Lise Cd. 18 C / D',
  addressLocality: 'Kemer',
  addressRegion: 'Antalya',
  postalCode: '07980',
  addressCountry: 'TR',
  
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.5986,                   // TODO: doğrula
      longitude: 30.5604,                  // TODO: doğrula
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/orangedentclinic', // TODO: gerçek
      'https://www.facebook.com/orangedentclinic',  // TODO: gerçek
      'https://maps.app.goo.gl/9GXEhmQp8oZsMZuU8'
    ],
    priceRange: '₺₺',
    medicalSpecialty: 'Dentistry',
    availableService: (locale ? serviceNames[locale as Locale] : serviceNames.en).map(
      (name) => ({ '@type': 'MedicalProcedure', name })
    ),
  };
}

/* =========================================================
   WEBSITE + SearchAction (Sitelinks Search Box)
   ========================================================= */
type WebSiteSchemaOptions = {
  locale?: string;
  searchPath?: string; // örn: '/ara' veya '/search'
};

export function buildWebSiteSchema(options: WebSiteSchemaOptions = {}) {
  const { locale, searchPath } = options;
  const inLanguage = locale ?? 'tr';

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: locale ? getCanonicalUrl(locale, '') : baseUrl,
    name: 'Orange Dent Clinic',
    inLanguage,
    publisher: { '@id': `${baseUrl}/#organization` },
  };
  

  if (searchPath) {
    const localizedSearch =
      locale && locale !== 'en'
        ? `${baseUrl}/${locale}${searchPath}`
        : `${baseUrl}${searchPath}`;

    schema.potentialAction = {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${localizedSearch}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    };
  }

  return schema;
}