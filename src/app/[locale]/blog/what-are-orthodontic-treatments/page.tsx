import { useTranslations } from 'next-intl';
import { Container, Typography, Box, Paper, Divider, Grid, Card, CardContent } from '@mui/material';
import Image from 'next/image';

interface Treatment {
  name: string;
  description: string;
  image?: string;
}

export default function OrthodonticTreatments() {
  const t = useTranslations('Blog.OrthodonticTreatments');
  const treatments = t.raw('treatments') as Treatment[];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
          {t('title')}
        </Typography>

        <Typography variant="body1" paragraph sx={{ mb: 5, fontSize: '1.1rem' }}>
          {t('intro')}
        </Typography>

        <Divider sx={{ my: 5 }} />

        <Grid container spacing={4}>
          {treatments.map((treatment, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {treatment.image && (
                  <Box sx={{ height: 250, position: 'relative' }}>
                    <Image
                      src={`/images/${treatment.image}`}
                      alt={treatment.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Box>
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {treatment.name}
                  </Typography>
                  <Typography variant="body1">
                    {treatment.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}