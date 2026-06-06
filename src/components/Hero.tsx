'use client';
import { Box, Container, Typography, Button, Icon } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

export default function Hero() {
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

          <Typography variant="h2" component="h1" sx={{ mb: 3, opacity: 0.6,fontSize: { xs: '2.5rem', md: '3.5rem' }, lineHeight: 1.2 }}>
            Uzman doktorlarımızla <br/> gülüşünüzü güvence altına alın.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.5, maxWidth: '450px', fontSize: '1.1rem' }}>
            Modern teknoloji ve kişiye özel tedavi yaklaşımlarımızla sağlıklı, estetik ve özgüvenli gülüşler tasarlıyoruz.
          </Typography>
          <Button
            variant="contained"
            startIcon={<EventIcon />}
            sx={{
              backgroundColor: '#d3a572',
              color: '#fff',
              borderRadius: 0,
              px: 4,
              py: 1.5,
              '&:hover': { backgroundColor: '#b08350' }
            }}
          >
            RANDEVU ALIN
          </Button>
        </Box>
      </Container>
    </Box>
  );
}