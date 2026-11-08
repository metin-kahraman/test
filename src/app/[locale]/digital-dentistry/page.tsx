// app/[locale]/dijital-dis-hekimligi/page.tsx
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import DigitalDentistryContent from '../../../components/DigitalDentistryContent';
import {
  buildHreflang,
  getCanonicalUrl,
  getOpenGraphLocale,
  baseUrl,
} from '@/lib/seo';
import { buildBreadcrumbSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';

const CANONICAL_PATH = 'digital-dentistry';

type PageProps = { params: Promise<{ locale: string }> };

/* ---------- SEO Metadata ---------- */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: '3dDentistry' });

  const canonicalUrl = getCanonicalUrl(locale, CANONICAL_PATH);
  const languages = buildHreflang(CANONICAL_PATH);

  // ✅ t.has() yerine try/catch — server-side'da t.has yok
  let seoTitle: string | undefined;
  let seoDescription: string | undefined;

  try {
    seoTitle = t('seo.title');
  } catch {
    seoTitle = undefined;
  }

  try {
    seoDescription = t('seo.description');
  } catch {
    seoDescription = undefined;
  }

  const localizedTitle = seoTitle ?? t('title');
  const title = localizedTitle.includes('Orange Dent')
    ? localizedTitle
    : `${localizedTitle} | Orange Dent Clinic`;
  const description =
    seoDescription ?? `${t('content').slice(0, 155)}…`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Orange Dent Clinic',
      type: 'article',
      locale: getOpenGraphLocale(locale),
      images: [
        {
          url: `${baseUrl}/images/digital-dentistry.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/digital-dentistry.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/* ---------- Sayfa ---------- */
export default async function DigitalDentistryPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: '3dDentistry' });

  const canonicalUrl = getCanonicalUrl(locale, CANONICAL_PATH);
  const homeUrl = getCanonicalUrl(locale, '');

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Ana Sayfa', url: homeUrl },
    { name: t('title'), url: canonicalUrl },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <DigitalDentistryContent />
    </>
  );
}