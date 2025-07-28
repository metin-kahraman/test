import { useTranslations } from 'next-intl';
import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemText } from '@mui/material';
import Image from 'next/image';

export default function ImpactedTeeth() {
  const t = useTranslations('Blog.ImpactedTeeth');
  const causes = t.raw('wisdomTeethCauses') as string[];
  const indications = t.raw('extractionIndications') as string[];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('title')}
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Image
            src="/images/gomulu-dis1.jpeg"
            alt="Gömülü diş tedavisi"
            width={800}
            height={400}
            style={{ width: '100%', height: '400px', borderRadius: '8px' }}
          />
        </Box>

        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('definition')}
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('extractionTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('extractionProcess')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('recovery')}
        </Typography>

        <Box sx={{ mb: 4, mt: 4 }}>
          <Image
            src="/images/gomulu-dis2.jpeg"
            alt="20 yaş dişi çekimi"
            width={800}
            height={400}
            style={{ width: '100%', height: '400px', borderRadius: '8px' }}
          />
        </Box>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('wisdomTeethTitle')}
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          {causes.map((cause, index) => (
            <ListItem key={index} sx={{ display: 'list-item', p: 0 }}>
              <Typography variant="body1">{cause}</Typography>
            </ListItem>
          ))}
        </List>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3, mt: 4 }}>
          {t('extractionNecessityTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('extractionNecessity')}
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('extractionIndicationsTitle')}
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          {indications.map((indication, index) => (
            <ListItem key={index} sx={{ display: 'list-item', p: 0 }}>
              <Typography variant="body1">{indication}</Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}