'use client';
import { Box, Container, Typography, Button, Icon } from '@mui/material';
//import EventIcon from '@mui/icons-material/Event';
import WhatsappIcon from '@mui/icons-material/WhatsApp';

import { useTranslations } from "next-intl";
  


export default function Hero() {
    const t = useTranslations("HomePage");


  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '600px', md: '85vh' }, // Mobilde biraz daha kısa
        backgroundImage: 'url(/images/slidermain.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Görselin üzerine hafif bir karartma efekti (okunabilirlik için) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
      />
      
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ maxWidth: { xs: '100%', md: '600px' }, color: '#fff' }}>
              <Typography variant="caption" component="div" sx={{ letterSpacing: '0.2em', mb: 2, color: 'primary.light', display: 'flex', alignItems: 'center', gap: 1 }}>
             ORANGE DENT CLINIC
          </Typography>

    {/*

                    <Icon sx={{ height: 'auto', width: 'auto', mr: 2, mt: 5 }}>
      <img
        src="/OrangeDentClinic.svg"
        width={250}
        alt="Orange Dent Clinic"
        style={{ cursor: 'pointer' }}
      />
    </Icon>

    */}

          <Typography component="h1" sx={{ mb: 3, opacity: 0.6,fontSize: { xs: '2.5rem', md: '3.5rem' }}}>
             {t(`title`)}<br/>{t(`title2`)}<br/>{t(`title3`)}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.5, maxWidth: '450px', fontSize: '1.1rem' }}>
           {t(`title4`)}
          </Typography>
          <Button
            variant="contained"
            startIcon={<WhatsappIcon  /*color="success"*/ />}
            sx={{
              backgroundColor: '#d3a572',
              color: '#ffffff',
              borderRadius: 0,
              px: 4,
              py: 1.5,
              '&:hover': { backgroundColor: '#b08350' }
            }}
          >
            {t(`bookAn`)}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}