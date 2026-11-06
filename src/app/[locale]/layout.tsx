// app/[locale]/layout.tsx
import * as React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import theme from '@/theme';
import AppAppBar from '@/components/AppAppBar';
import Container from '@mui/material/Container';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import type { Metadata } from 'next';
import ModernBannerWrapper from '@/components/ModernBannerWrapper';
import JsonLd from '@/components/JsonLd';
import { buildDentistSchema, buildWebSiteSchema } from '@/lib/schema';
import { baseUrl, getCanonicalUrl } from '@/lib/seo';

/* ---------- Locale ayarları ---------- */
const locales = ['en', 'tr', 'ru', 'lt', 'pl'] as const; // ⚠️ pt mi pl mi kontrol edin
const defaultLocale = 'en';

const ogLocaleMap: Record<string, string> = {
  tr: 'tr_TR',
  en: 'en_US',
  lt: 'lt_LT',
  pt: 'pt_PT',
  ru: 'ru_RU',
};

/* ---------- Yardımcılar ---------- */
function getLocalizedUrl(locale: string, path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : path ? `/${path}` : '';
  return locale === defaultLocale
    ? `${baseUrl}${cleanPath}`
    : `${baseUrl}/${locale}${cleanPath}`;
}

function buildLanguageAlternates(path: string = '') {
  const languages: Record<string, string> = {};
  locales.forEach((loc) => {
    languages[loc] = getLocalizedUrl(loc, path);
  });
  languages['x-default'] = getLocalizedUrl(defaultLocale, path);
  return languages;
}

/* ---------- Metadata ---------- */
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Home.seo' });

  // Fallback: Metadata namespace yoksa varsayılanlara dön
  let title: string;
  let description: string;
  try {
    title = t('title');
    description = t('description');
  } catch {
    title =
      'Orange Dent Clinic | Kemer Antalya Diş Kliniği - İmplant, Estetik Diş, Ortodonti';
    description =
      'Kemer Antalya’da Orange Dent Clinic: implant, estetik diş hekimliği, ortodonti, diş beyazlatma ve dijital diş hekimliği. Uzman kadro, modern teknoloji.';
  }

  const canonicalUrl = getLocalizedUrl(locale);
  const ogImage = '/images/og-home.jpg'; // ⚠️ SVG yerine JPG/PNG (1200×630)

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | Orange Dent Clinic`,
    },
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: buildLanguageAlternates(),
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      siteName: 'Orange Dent Clinic',
      title,
      description,
      locale: ogLocaleMap[locale] ?? 'en_US',
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => ogLocaleMap[l]),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'Orange Dent Clinic - Kemer Antalya Diş Kliniği',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
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
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
  };
}

/* ---------- Layout ---------- */
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        {/* Sitewide JSON-LD — her sayfada bir kez */}
        <JsonLd data={buildDentistSchema({ locale })} />
        <JsonLd data={buildWebSiteSchema({ locale })} />

        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <GlobalStyles
              styles={{
                html: { overflowX: 'hidden', maxWidth: '100%' },
                body: {
                  overflowX: 'hidden',
                  maxWidth: '100%',
                  margin: 0,
                  padding: 0,
                },
              }}
            />

            <NextIntlClientProvider locale={locale} messages={messages}>
              <AppAppBar />
              <ModernBannerWrapper />
              <Container
                maxWidth={false}
                disableGutters={false}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '80vh',
                  px: { xs: '4.1%', md: '4.1%', lg: 0, xl: 0 },
                  mb: 4,
                }}
              >
                {children}
                <FloatingActionButtons />
              </Container>

              <Footer />
            </NextIntlClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
} 