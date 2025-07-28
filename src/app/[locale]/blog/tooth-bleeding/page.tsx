import { useTranslations } from 'next-intl';
import { Container, Typography, Box, Paper, Divider, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import Image from 'next/image';

interface Disease {
  name: string;
  description: string;
}

export default function GumBleedingPage() {
  const t = useTranslations('Blog.gumBleeding');
  
  const causes = t.raw('causes') as string[];
  const riskFactors = t.raw('riskFactors') as string[];
  const diseases = t.raw('diseases') as Disease[];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
        {/* Başlık ve Giriş */}
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('title')}
        </Typography>
        
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {t('intro')}
        </Typography>

        {/* Ana İçerik */}
        <Box sx={{ my: 4, position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
          <Image
            src="/images/gum-bleeding-1.jpeg"
            alt="Diş Eti Kanaması"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </Box>

        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          {t('mainContent')}
        </Typography>

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

        {/* Risk Faktörleri */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('riskFactorsTitle')}
        </Typography>
        
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {riskFactors.map((factor, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
                <Typography variant="body1">{factor}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ my: 4, position: 'relative', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
          <Image
            src="/images/gum-bleeding-2.jpeg"
            alt="Diş Eti Kanaması Risk Faktörleri"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>

        {/* Hastalıklar */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('diseasesTitle')}
        </Typography>
        
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {diseases.map((disease, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {disease.name}
                  </Typography>
                  <Typography variant="body1">
                    {disease.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Vitamin Eksiklikleri */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('vitaminTitle')}
        </Typography>
        
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          {t('vitaminContent')}
        </Typography>

        {/* Tedavi */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('treatmentTitle')}
        </Typography>
        
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          {t('treatmentContent')}
        </Typography>

        <Box sx={{ my: 4, position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
          <Image
            src="/images/gum-bleeding-3.jpeg"
            alt="Diş Eti Kanaması Tedavisi"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </Paper>
    </Container>
  );
}