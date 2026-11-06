'use client';

import {
  Typography,
  Box,
  Paper,
  Container,
  Breadcrumbs,
  Link as MuiLink,
} from '@mui/material';
import NextLink from 'next/link';
import Grid from '@mui/material/Grid2';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import ContentRightSlideMenu from '@/components/contentRightSlideMenu';

const contentKeys = ['content', 'content2', 'content3', 'content4'] as const;

export default function DigitalDentistryContent() {
  const t = useTranslations('3dDentistry');
  const locale = useLocale();

  const homeHref = locale === 'en' ? '/' : `/${locale}`;

  return (
    <Container maxWidth={false} sx={{ mt: 4 }}>
      {/* Görünür Breadcrumb (SEO + UX) */}


      <Grid container spacing={2} component="div">
        <Grid size={{ xs: 12, md: 9 }}>
          <Paper sx={{ backgroundColor: 'white' }}>
            <Box p={2}>
              {/* H1 — Tek bir tane olmalı */}
              <Typography
                component="h1"
                variant="h4"
                gutterBottom
                sx={{ textAlign: 'center', pt: 2, fontWeight: 'bold' }}
              >
                {t('title')}
              </Typography>

              {/* H2 — Alt başlık */}
              <Typography
                component="h2"
                variant="h5"
                gutterBottom
                sx={{ textAlign: 'center', pt: 2 }}
              >
                {t('title2')}
              </Typography>

              {/* Ana görsel — alt zorunlu */}
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
                <Image
                  src="/images/digital-dentistry.jpg"
                  alt={t('title')}
                  width={800}
                  height={450}
                  style={{ width: '80%', height: 'auto' }}
                  priority
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </Box>

              <Box p={2}>
                {contentKeys.map((key) => (
                  <Typography
                    key={key}
                    component="p"
                    variant="body1"
                    gutterBottom
                    sx={{ p: 2, lineHeight: 1.7 }}
                  >
                    {t(key)}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <ContentRightSlideMenu />
        </Grid>
      </Grid>
    </Container>
  );
}