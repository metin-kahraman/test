import { useTranslations } from 'next-intl';
import { Container, Typography, Box, Paper, Divider, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import Image from 'next/image';

interface CrownType {
  name: string;
  description: string;
  advantages?: string[];
  image?: string;
}

export default function DentalCrowns() {
  const t = useTranslations('Blog.DentalCrowns');
  const types = t.raw('types') as CrownType[];
  const generalAdvantages = t.raw('generalAdvantages') as string[];

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

        <Grid container spacing={4} sx={{ mb: 5 }}>
          {types.map((type, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {type.image && (
                  <Box sx={{ height: 300, position: 'relative' }}>
                    <Image
                      src={`/images/${type.image}`}
                      alt={type.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Box>
                )}
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {type.name}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {type.description}
                  </Typography>
                  {type.advantages && (
                    <>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
                        Avantajlar:
                      </Typography>
                      <List dense>
                        {type.advantages.map((advantage, idx) => (
                          <ListItem key={idx} sx={{ py: 0 }}>
                            <ListItemText primary={`• ${advantage}`} />
                          </ListItem>
                        ))}
                      </List>
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          {t('advantagesTitle')}
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          {generalAdvantages.map((advantage, index) => (
            <ListItem key={index} sx={{ display: 'list-item', p: 0 }}>
              <Typography variant="body1">{advantage}</Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}