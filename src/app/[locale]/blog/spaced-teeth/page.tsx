import { useTranslations } from 'next-intl';
import { Container, Typography, Box, Paper, Divider, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import Image from 'next/image';

interface Treatment {
  title: string;
  content: string;
}

export default function SpacedTeethPage() {
  const t = useTranslations('Blog.spacedTeeth');
  
  const causes = t.raw('causes') as string[];
  const treatments = t.raw('treatments') as Treatment[];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
        {/* Başlık ve Giriş */}
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
          {t('title')}
        </Typography>
        
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('intro')}
        </Typography>

        {/* Ana Görsel */}
        <Box sx={{ my: 4, position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
          <Image
            src="/images/spaced-teeth-1.jpeg"
            alt="Ayrık Diş Tedavisi"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Nedenler */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('causesTitle')}
        </Typography>
        
        <List sx={{ mb: 4 }}>
          {causes.map((cause, index) => (
            <ListItem key={index} sx={{ display: 'list-item', pl: 2, listStyleType: 'disc' }}>
              <ListItemText primary={cause} />
            </ListItem>
          ))}
        </List>

        {/* Tedavi Yöntemleri */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('treatments.0.title')} {/* İlk tedavi başlığı için */}
        </Typography>
        
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {treatments.map((treatment, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {index === 1 && (
                  <Box sx={{ height: 250, position: 'relative' }}>
                    <Image
                      src="/images/spaced-teeth-2.jpeg"
                      alt={treatment.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                )}
                {index === 2 && (
                  <Box sx={{ height: 250, position: 'relative' }}>
                    <Image
                      src="/images/spaced-teeth-3.jpeg"
                      alt={treatment.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {treatment.title}
                  </Typography>
                  <Typography variant="body1">
                    {treatment.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Sonuç */}
        <Typography variant="body1" paragraph sx={{ mb: 4, fontStyle: 'italic' }}>
          {t('conclusion')}
        </Typography>
      </Paper>
    </Container>
  );
}