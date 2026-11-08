import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import TreatmentsPageClient from './TreatmentsPageClient';
import {
  baseUrl,
  buildHreflang,
  getCanonicalUrl,
  getOpenGraphLocale,
} from '@/lib/seo';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'TreatmentsPage.seo',
  });
  const title = t('title');
  const description = t('description');
  const canonicalUrl = getCanonicalUrl(locale, 'dental-treatments');
  const image = `${baseUrl}/og-clinic.jpg`;

  return {
    title,
    description,
    keywords: t('keywords'),
    alternates: {
      canonical: canonicalUrl,
      languages: buildHreflang('dental-treatments'),
    },
    openGraph: {
      type: 'website',
      siteName: 'Orange Dent Clinic',
      title,
      description,
      url: canonicalUrl,
      locale: getOpenGraphLocale(locale),
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default function DentalTreatmentsPage() {
  return <TreatmentsPageClient />;
}
