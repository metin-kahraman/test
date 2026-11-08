// app/[locale]/klinigimiz/page.tsx
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import OurClinicContent from '../../../components/OurClinicContent';
import {
  buildHreflang,
  getCanonicalUrl,
  getOpenGraphLocale,
  baseUrl,
} from '@/lib/seo';
import { buildBreadcrumbSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';

const CANONICAL_PATH = 'our-clinic';

type PageProps = { params: Promise<{ locale: string }> };

/* ---------- SEO Metadata ---------- */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'OurClinic' });

  const canonicalUrl = getCanonicalUrl(locale, CANONICAL_PATH);
  const languages = buildHreflang(CANONICAL_PATH);

  // try/catch ile güvenli fallback (t.has server'da yok)
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

  const title = seoTitle ?? `${t('title')} | Orange Dent Clinic`;
  const description =
    seoDescription ?? `${t('intro').slice(0, 155)}…`;

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
      type: 'website',
      locale: getOpenGraphLocale(locale),
      images: [
        {
          url: `${baseUrl}/images/clinic/clinic-interior-1.jpg`,
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
      images: [`${baseUrl}/images/clinic/clinic-interior-1.jpg`],
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
export default async function OurClinicPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'OurClinic' });

  const canonicalUrl = getCanonicalUrl(locale, CANONICAL_PATH);
  const homeUrl = getCanonicalUrl(locale, '');

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Ana Sayfa', url: homeUrl },
    { name: t('title'), url: canonicalUrl },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <OurClinicContent />
    </>
  );
}