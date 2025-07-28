import { useTranslations } from 'next-intl';
import { Container, Typography, Box, Paper, Divider, List, ListItem } from '@mui/material';
import Image from 'next/image';

export default function Orthodontics() {
  const t = useTranslations('Blog.Orthodontics');

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('title')}
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Image
            src="/images/ortodonti1.jpg"
            alt="Ortodonti tedavisi"
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
          {t('whoNeedsTitle')}
        </Typography>
        <List>
          {t.raw('whoNeedsList').map((item: string, index: number) => (
            <ListItem key={index} sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              {item}
            </ListItem>
          ))}
        </List>

        <Box sx={{ mb: 4, mt: 4 }}>
          <Image
            src="/images/ortodonti2.jpg"
            alt="Ortodonti tedavi örnekleri"
            width={600}
            height={400}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Box>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('startingAgeTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('startingAgeContent')}
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('durationTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('durationContent')}
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('careTipsTitle')}
        </Typography>
        <List>
          {t.raw('careTipsList').map((item: string, index: number) => (
            <ListItem key={index} sx={{ display: 'list-item', listStyleType: 'disc', pl: 2, ml: 2 }}>
              {item}
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}