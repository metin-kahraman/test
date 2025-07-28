import { useTranslations } from 'next-intl';
import { Container, Typography, Box, Paper, Divider, Grid, Card, CardContent } from '@mui/material';
import Image from 'next/image';

interface Section {
  title?: string;
  content?: string;
  image?: string;
  items?: string[];
}

interface Method {
  title: string;
  content: string;
  image?: string;
}

export default function ToothYellowingPage() {
  const t = useTranslations('Blog.toothYellowing');
  
  // Dil dosyalarından verileri al
  const sections = t.raw('sections') as Section[];
  const methods = t.raw('methods') as Method[];

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

        {/* Dinamik bölümler */}
        {sections.map((section, index) => (
          <Box key={index} sx={{ mb: 6 }}>
            {section.title && (
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                {section.title}
              </Typography>
            )}
            
            {section.content && (
              <Typography variant="body1" paragraph>
                {section.content}
              </Typography>
            )}
            
            {section.items && (
              <Box component="ul" sx={{ pl: 4, mb: 3 }}>
                {section.items.map((item, idx) => (
                  <Box component="li" key={idx} sx={{ mb: 1 }}>
                    <Typography variant="body1">{item}</Typography>
                  </Box>
                ))}
              </Box>
            )}
            
            {section.image && (
              <Box sx={{ 
                my: 4, 
                position: 'relative', 
                height: { xs: '250px', md: '400px' }, 
                borderRadius: '8px', 
                overflow: 'hidden' 
              }}>
                <Image
                  src={`/images/${section.image}`}
                  alt={section.title || 'Blog görseli'}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Box>
            )}
            
            {index < sections.length - 1 && <Divider sx={{ my: 5 }} />}
          </Box>
        ))}

        {/* Tedavi yöntemleri gridi */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3, mt: 6 }}>
          {t('methodsTitle')}
        </Typography>
        
        <Grid container spacing={4}>
          {methods.map((method, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                {method.image && (
                  <Box sx={{ 
                    height: 250, 
                    position: 'relative',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
                  }}>
                    <Image
                      src={`/images/${method.image}`}
                      alt={method.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Box>
                )}
                
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {method.title}
                  </Typography>
                  <Typography variant="body1">
                    {method.content}
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