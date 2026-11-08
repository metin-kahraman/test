import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import ReviewSlider from '@/components/ReviewSlider';
import Partners from '@/components/Partners';
import {
  baseUrl,
  buildHreflang,
  getOpenGraphLocale,
  getCanonicalUrl,
} from '@/lib/seo';

type PageProps = { params: Promise<{ locale: string }> };

/* ---------- SEO Metadata ---------- */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  // ✅ "HomePage" namespace kullan
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  const canonicalUrl = getCanonicalUrl(locale, '/');
  const languages = buildHreflang('/');

  const title = t('seo.title');
  const description = t('seo.description');
  const keywords = t('seo.keywords');

  return {
    title,
    description,
    keywords,
    alternates: { canonical: canonicalUrl, languages },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Orange Dent Clinic',
      type: 'website',
      locale: getOpenGraphLocale(locale),
      images: [
        {
          url: `${baseUrl}/og-clinic.jpg`,
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
      images: [`${baseUrl}/og-clinic.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

/* ---------- Sayfa ---------- */
const partnersData = [
  { id: 1, name: 'oral-b', logo: '/images/icons/oral-b.png' },
  { id: 2, name: 'listerine', logo: '/images/icons/listerine.svg' },
  { id: 3, name: 'sirona', logo: '/images/icons/sirona.png' },
  { id: 4, name: 'gc', logo: '/images/icons/gc.svg' },
  { id: 5, name: 'cerec', logo: '/images/icons/cerec.png' },
  { id: 6, name: 'straumann', logo: '/images/icons/straumann.png' },
  { id: 7, name: 'ivoclar', logo: '/images/icons/ivoclar.png' },
  { id: 8, name: '3m', logo: '/images/icons/3m.png' },
  { id: 9, name: 'Tokuyama', logo: '/images/icons/Tokuyama.png' },
  { id: 10, name: 'opalescence', logo: '/images/icons/opalescence.png' },
  { id: 11, name: 'Astra', logo: '/images/icons/Astra.png' },
  { id: 12, name: 'Akylos', logo: '/images/icons/Akylos.png' },
  { id: 13, name: 'nobel', logo: '/images/icons/nobel.png' },
  { id: 14, name: 'megagen', logo: '/images/icons/megagen.png' },
  { id: 15, name: 'Osstem', logo: '/images/icons/Osstem.svg' },
];

export default async function Home({ params }: PageProps) {
  const { locale } = await params;

  return (
    <main>
      <Hero />
      <Services />
      <ReviewSlider />
      <Partners partners={partnersData} />
      <WhyChooseUs />
    </main>
  );
}