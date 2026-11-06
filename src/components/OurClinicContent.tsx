'use client';

import { Typography, Box, Container, Breadcrumbs, Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

// ✅ Görsel listesi — tek yerden yönetilebilir
const clinicImages = [
  {
    src: '/images/our-clinic-1.jpeg',
    alt: 'Orange Dent Clinic Kemer Antalya resepsiyon alanı',
    width: 1200,
    height: 800,
  },
  {
    src: '/images/our-clinic-2.jpeg',
    alt: 'Orange Dent Clinic Kemer Antalya bekleme salonu',
    width: 1200,
    height: 800,
  },
  {
    src: '/images/our-clinic-3.jpeg',
    alt: 'Orange Dent Clinic Kemer Antalya muayene odası',
    width: 800,
    height: 600,
  },
  {
    src: '/images/our-clinic-8.jpeg',
    alt: 'Orange Dent Clinic Kemer Antalya tedavi odası',
    width: 800,
    height: 600,
  },
  {
    src: '/images/our-clinic-7.jpeg',
    alt: 'Orange Dent Clinic Kemer Antalya klinik iç mekan',
    width: 800,
    height: 600,
  },
  {
    src: '/images/our-clinic-4.jpeg',
    alt: 'Orange Dent Clinic Kemer Antalya dijital görüntüleme alanı',
    width: 800,
    height: 600,
  },
  {
    src: '/images/our-clinic-5.jpeg',
    alt: 'Orange Dent Clinic Kemer Antalya sterilizasyon odası',
    width: 800,
    height: 600,
  },
  {
    src: '/images/our-clinic-6.jpeg',
    alt: 'Orange Dent Clinic Kemer Antalya ekip çalışma alanı',
    width: 800,
    height: 600,
  },
];

export default function OurClinicContent() {
  const t = useTranslations('OurClinic');
  const locale = useLocale();

  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  return (
    <Container maxWidth={false} sx={{ mt: 4 }}>
      {/* Görünür Breadcrumb */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <MuiLink component={NextLink} href={homeHref} underline="hover" color="inherit">
          Ana Sayfa
        </MuiLink>
        <Typography color="text.primary">{t('title')}</Typography>
      </Breadcrumbs>

      {/* H1 — tek bir tane */}
      <Typography
        component="h1"
        variant="h3"
        sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2 }}
      >
        {t('title')}
      </Typography>

      {/* Giriş metni — thin content'i çözer */}
      <Typography
        component="p"
        variant="body1"
        sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto', mb: 4, lineHeight: 1.7 }}
      >
        {t('intro')}
      </Typography>

      <Grid container spacing={2}>
        {/* İlk 2 görsel — tam genişlik */}
        {clinicImages.slice(0, 2).map((img, idx) => (
          <Grid key={img.src} size={{ xs: 12, md: 12 }} sx={{ mt: idx === 0 ? 10 : 10 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src={img.src}
                alt={t(img.alt  )} // Çok dilli alt metin
                width={img.width}
                height={img.height}
                sizes="(max-width: 900px) 80vw, 60vw"
                style={{
                  borderRadius: 8,
                  width: '80%',
                  height: 'auto',
                  display: 'block',
                }}
                priority={idx === 0}
              />
            </Box>
          </Grid>
        ))}

        {/* Kalan görseller — grid */}
        {clinicImages.slice(2).map((img, idx) => (
          <Grid key={img.src} size={{ xs: 12, md: 6 }} sx={{ mt: 5, p: 5, pt: idx >= 2 ? 0 : 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src={img.src}
                alt={t(`p${idx + 1}alt`)}
                width={img.width}
                height={img.height}
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{
                  borderRadius: 8,
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
                loading="lazy"
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}