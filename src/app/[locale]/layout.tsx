// app/[locale]/layout.tsx
import * as React from "react";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import theme from "@/theme";
import AppAppBar from "@/components/AppAppBar";
import Container from "@mui/material/Container";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import type { Metadata } from "next";
import ModernBannerWrapper from "@/components/ModernBannerWrapper";
import JsonLd from "@/components/JsonLd";
import { buildDentistSchema } from "@/lib/schema";

const locales = ['en', 'tr', 'ru', 'pl', 'lt'] as const;
const defaultLocale = 'en';

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://orangedentclinic.com';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const canonicalUrl = getLocalizedUrl(locale);
  const ogImage = '/images/og-default.svg';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default:
        'Orange Dent Clinic | Kemer Antalya Diş Kliniği - İmplant, Estetik Diş, Ortodonti',
      template: '%s | Orange Dent Clinic',
    },
    description:
      'Kemer Antalya’da Orange Dent Clinic: implant, estetik diş hekimliği, ortodonti, diş beyazlatma ve dijital diş hekimliği. Uzman kadro, modern teknoloji, kişiye özel tedavi. Randevu için hemen arayın.',
    alternates: {
      canonical: canonicalUrl,
      languages: buildLanguageAlternates(),
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      siteName: 'Orange Dent Clinic',
      title:
        'Orange Dent Clinic | Kemer Antalya Diş Kliniği - İmplant, Estetik Diş, Ortodonti',
      description:
        'Kemer Antalya’da Orange Dent Clinic: implant, estetik diş hekimliği, ortodonti ve dijital diş hekimliği.',
      locale: locale,
      alternateLocale: ['en', 'tr', 'ru', 'pl', 'lt'].filter((l) => l !== locale),
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
      title: 'Orange Dent Clinic | Kemer Antalya Diş Kliniği',
      description:
        'Uzman kadro, modern teknoloji, kişiye özel tedavi. Randevu için hemen arayın.',
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
      },
    },
  };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        {/* Sitewide Dentist schema — her sayfada bir kez */}
        <JsonLd data={buildDentistSchema()} />

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