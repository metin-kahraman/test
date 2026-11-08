// app/[locale]/layout.tsx
import * as React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
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
import { baseUrl } from '@/lib/seo';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Orange Dent Clinic',
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