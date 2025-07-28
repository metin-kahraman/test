import { useTranslations } from 'next-intl';
import { Container, Typography, Box, Paper, Divider, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import Image from 'next/image';

interface Treatment {
  title: string;
  content: string;
}

export default function BruxismPage() {
  const t = useTranslations('Blog.bruxism');
  
  const symptoms = t.raw('symptoms') as string[];
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
            src="/images/bruxism-1.jpeg"
            alt="Diş Sıkma ve Gıcırdatma"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </Box>

        {/* Doktor Bilgisi */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
          {t('doctorTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          {t('doctorContent')}
        </Typography>

        {/* Çocuk Tedavisi */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
          {t('childrenTitle')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          {t('childrenContent')}
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Belirtiler */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('symptomsTitle')}
        </Typography>
        
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {symptoms.map((symptom, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper elevation={1} sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 8, height: 8, bgcolor: 'primary.main', borderRadius: '50%', mr: 2 }} />
                <Typography variant="body1">{symptom}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Tedavi Yöntemleri */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('treatmentsTitle')}
        </Typography>
        
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {treatments.map((treatment, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    {treatment.title}
                  </Typography>
                  <Typography variant="body1">
                    {treatment.content}
                  </Typography>
                </CardContent>
                {index === 0 && (
                  <Box sx={{ p: 2 }}>
                    <Box sx={{ position: 'relative', height: '200px', borderRadius: '4px', overflow: 'hidden' }}>
                      <Image
                        src="/images/bruxism-2.png"
                        alt={treatment.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </Box>
                  </Box>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}