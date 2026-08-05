import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid2 , Container, Box } from '@mui/material';
import { useTranslations } from "next-intl";


interface Partner {
  id: number;
  name: string;
  logo: string;
}

interface PartnersProps {
  partners: Partner[];
}

const Partners: React.FC<PartnersProps> = ({ partners }) => {
  const t = useTranslations('HomePage');

  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="caption" component="div" sx={{ color: 'primary.main', letterSpacing: '0.1em' }}>
          {t('title5')}
        </Typography>
        <Typography variant="h4" component="h2" sx={{ color: '#1a1a1a', mt: 1 }}>
          {t('ourPartners')}
        </Typography>
        <Box sx={{ width: '40px', height: '2px', bgcolor: 'primary.main', mx: 'auto', mt: 2 }} />
      </Box>

    <Grid2 container spacing={3} justifyContent="center" alignItems="center">
    <Grid2  size={{xs:12, sm:12, md:12, lg:12}}>

    </Grid2>

      {partners.map((partner) => (
        <Grid2  size={{xs:12, sm:6, md:3, lg:2}} key={partner.id} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                 <CardMedia
              component="img"
              image={partner.logo}
              alt={partner.name}
              sx={{ width: 200, height: 120,p:2, objectFit: 'contain' }}
            />
        </Grid2>
      ))}
    </Grid2>
      </Container>



  );
};

export default Partners;
