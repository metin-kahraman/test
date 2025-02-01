import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid2 } from '@mui/material';

interface Partner {
  id: number;
  name: string;
  logo: string;
}

interface PartnersProps {
  partners: Partner[];
}

const Partners: React.FC<PartnersProps> = ({ partners }) => {
  return (
    <Grid2 container spacing={3} justifyContent="center" alignItems="center">
    <Grid2  size={{xs:12, sm:12, md:12, lg:12}}>
    <Typography variant="h5" align='center'>İş Ortakları</Typography>

    </Grid2>

      {partners.map((partner) => (
        <Grid2  size={{xs:6, sm:4, md:3, lg:2}} key={partner.id}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, boxShadow: 3 }}>
            <CardMedia
              component="img"
              image={partner.logo}
              alt={partner.name}
              sx={{ width: 100, height: 100, objectFit: 'fill' }}
            />
            <CardContent>
              <Typography variant="h6" align="center">
                {partner.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Partners;
