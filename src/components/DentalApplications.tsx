import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, IconButton } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff7f50',
    },
    secondary: {
      main: '#50d0ff',
    },
  },
});

const dentalApplications = [
  {
    title: 'Diş Beyazlatma',
    description: 'Dişlerinizi güvenle beyazlatın ve parlatın.',
    image: 'https://via.placeholder.com/200'
  },
  {
    title: 'Kanal Tedavisi',
    description: 'Ağrısız ve etkili kanal tedavi çözümleri.',
    image: 'https://via.placeholder.com/200'
  },
  {
    title: 'Diş Kaplama',
    description: 'Dişlerinizin görünümünü iyileştirin.',
    image: 'https://via.placeholder.com/200'
  },
  {
    title: 'Ortodonti',
    description: 'Dişlerinizin hizalanmasını sağlayın.',
    image: 'https://via.placeholder.com/200'
  },
];

const SliderContainer = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
});

const SliderWrapper = styled('div')(({ isPaused, currentIndex }) => ({
  display: 'flex',
  width: '100%',
  transition: isPaused ? 'none' : 'transform 0.5s ease-in-out',
  transform: `translateX(-${currentIndex * 100}%)`,
  willChange: 'transform',
}));

const SliderItem = styled('div')({
  flex: '0 0 50%', // Büyük ekranlarda iki kart görünür
  boxSizing: 'border-box',
  '@media (max-width: 600px)': {
    flex: '0 0 100%', // Küçük ekranlarda bir kart görünür
  },
});

const SliderButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  color: theme.palette.primary.main,
}));

const SliderButtonLeft = styled(SliderButton)({
  left: 10,
});

const SliderButtonRight = styled(SliderButton)({
  right: 10,
});

function DentalApplications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideCount = dentalApplications.length;

  useEffect(() => {
    let autoSlideInterval;

    if (!isPaused) {
      autoSlideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
      }, 3000); // 3 saniyede bir otomatik geçiş
    }

    return () => clearInterval(autoSlideInterval);
  }, [isPaused, slideCount]);

  useEffect(() => {
    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
      }, 5000); // 5 saniye duraklatma süresi
      return () => clearTimeout(timer);
    }
  }, [isPaused]);

  const handleNext = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

  const handlePrev = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Dental Uygulamalarımız
        </Typography>
        <SliderContainer>
          <SliderWrapper isPaused={isPaused} currentIndex={currentIndex}>
            {dentalApplications.map((app) => (
              <SliderItem key={app.title}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={app.image}
                    alt={app.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{app.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {app.description}
                    </Typography>
                  </CardContent>
                </Card>
              </SliderItem>
            ))}
          </SliderWrapper>
          <SliderButtonLeft onClick={handlePrev}>
            <ArrowBackIosIcon />
          </SliderButtonLeft>
          <SliderButtonRight onClick={handleNext}>
            <ArrowForwardIosIcon />
          </SliderButtonRight>
        </SliderContainer>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Tüm Uygulamalar
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default DentalApplications;
