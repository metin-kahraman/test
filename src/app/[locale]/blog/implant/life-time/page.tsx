import { useTranslations } from 'next-intl';
import { Container, Typography, Box, Paper, Divider, List, ListItem } from '@mui/material';
import Image from 'next/image';

export default function ImplantLifetime() {
  const t = useTranslations('Blog.ImplantLifetime');

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('title')}
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Image
            src="/images/implant-omur1.jpeg"
            alt="İmplant diş ömrü"
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
          {t('factorsTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('factorsContent')}
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('extendLifeTitle')}
        </Typography>
        <List>
          {t.raw('extendLifeList').map((item: string, index: number) => (
            <ListItem key={index} sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              {item}
            </ListItem>
          ))}
        </List>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('hygieneTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('hygieneContent')}
        </Typography>
      </Paper>
    </Container>
  );
}