import { useTranslations } from 'next-intl';
import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import Image from 'next/image';

export default function ImplantRecovery() {
  const t = useTranslations('Blog.ImplantRecovery');

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('title')}
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Image
            src="/images/implant-iyilesme1.png"
            alt="Implant iyileşme süreci"
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
          {t('healingProcessTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('healingProcessContent')}
        </Typography>

        <Box sx={{ mb: 4, mt: 4 }}>
          <Image
            src="/images/implant-iyilesme2.jpeg"
            alt="Implant yarası iyileşme süreci"
            width={600}
            height={400}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Box>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('woundHealingTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('woundHealingContent')}
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('postOpCareTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('postOpCareContent')}
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('completeHealingTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('completeHealingContent')}
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('painTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('painContent')}
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('smokingTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('smokingContent')}
        </Typography>
      </Paper>
    </Container>
  );
}