// src/app/[locale]/blog/single-tooth-implant/page.tsx
import { useTranslations } from 'next-intl';
import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import Image from 'next/image';

export default function SingleToothImplant() {
  const t = useTranslations('SingleToothImplant');

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('title')}
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Image
            src="/images/single-implant1.png"
            alt="Single tooth implant"
            width={600}
            height={400}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Box>

        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('content1')}
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('advantagesTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('advantagesContent')}
        </Typography>

        <Box sx={{ mb: 4, mt: 4 }}>
          <Image
            src="/images/single-implant2.png"
            alt="Implant advantages"
            width={600}
            height={400}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Box>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('boneTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('boneContent')}
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('priceTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('priceContent')}
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('lifetimeTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('lifetimeContent')}
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('recoveryTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('recoveryContent')}
        </Typography>
      </Paper>
    </Container>
  );
}