import * as React from "react";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import AppAppBar from "@/components/AppAppBar";
import Container from "@mui/material/Container";
import Footer from "@/components/Footer";
import { useTranslations } from 'next-intl';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Sunucudan dil mesajlarını al
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline: Uygulamanızın tutarlı bir temel stilini sağlar */}
            <CssBaseline />
            <AppAppBar />
            <Container
              maxWidth="lg"
              component="main"
              sx={{
                display: "flex",
                flexDirection: "column",
                mb: 4,
                gap: 4,
              }}
            >
              <NextIntlClientProvider messages={messages}>
                {children}
              </NextIntlClientProvider>
              <Footer />
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
