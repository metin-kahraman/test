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
import FloatingActionButtons from "@/components/FloatingActionButtons";
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
            <NextIntlClientProvider locale={locale} messages={messages}>

              <Container
                maxWidth={false}
                disableGutters={true}
                //component="main"
                sx={{
                  //display: "flex",
                  flexDirection: "column",
                  mb: 4,
                  mt:14,
                  pr:'4.1%',
                  pl:'4.1%'
                }}
              >
                              <AppAppBar />

                {children}
                <FloatingActionButtons></FloatingActionButtons>
                <Footer />
              </Container>
            </NextIntlClientProvider>

          </ThemeProvider>
        </AppRouterCacheProvider>

      </body>
      
    </html>
  );
}
