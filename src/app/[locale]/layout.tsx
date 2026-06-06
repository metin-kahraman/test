import * as React from "react";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles"; // <-- EKLENDİ
import theme from "@/theme";
import AppAppBar from "@/components/AppAppBar";
import Container from "@mui/material/Container";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import { Metadata } from "next";
import ModernBannerWrapper from "@/components/ModernBannerWrapper";
export const metadata: Metadata = {
  title: 'Orange Dent Clinic',
  description: 'Uzman doktorlarımızla gülüşünüzü güvence altına alın.',
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline: Temel sıfırlama */}
            <CssBaseline />
            
            {/* Yatay kaydırmayı kesin olarak engeller */}
            <GlobalStyles styles={{
              html: { overflowX: 'hidden', maxWidth: '100%' },
              body: { overflowX: 'hidden', maxWidth: '100%', margin: 0, padding: 0 }
            }} />

            <NextIntlClientProvider locale={locale} messages={messages}>
              
              {/* Navbar tam genişlik */}
              <AppAppBar />
              <ModernBannerWrapper />
              {/* Container: Mobildeki yan boşlukları yüzde (%) ile yönetiyoruz */}
              <Container
                maxWidth={false}
                disableGutters={false} // <-- false yaptık (ÖNEMLİ)
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  //pr:0,
                  //pl:0,
                  minHeight: '80vh',
                  // Mobilde sağ/sol boşluklar
                  px: { xs: '4.1%', md: '4.1%', lg:0, xl:0 }, 
                  //mt: { xs: 12, md: 14 ,lg:'6.1%', xl:'5.1%'  }, // Navbar yüksekliğine göre margin top
                  mb: 4
                }}
              >
                {children}
                <FloatingActionButtons />
              </Container>

              {/* Footer tam genişlik */}
              <Footer />

            </NextIntlClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}