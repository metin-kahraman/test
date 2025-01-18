import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, IconButton, Paper } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Grid from '@mui/material/Grid2';
import { useTranslations } from 'next-intl';
import { TreatmentsPageTranslations } from '@/types';

// Type definitions
interface DentalApplication {
  title: string;
  description: string;
  image: string;
}

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

const SyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const SyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});


const dentalApplications: DentalApplication[] = [
  {
    title: 'Diş Beyazlatma',
    description: 'Dişlerinizi güvenle beyazlatın ve parlatın.',
    image: '/tw.jpg'
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
const treatments = [
  { img: 'https://picsum.photos/800/450?random=1', title: 'T1' },
  { img: 'https://picsum.photos/800/450?random=2', title: 'T2' },
  { img: 'https://picsum.photos/800/450?random=3', title: 'T3' },
  { img: 'https://picsum.photos/800/450?random=4', title: 'T4' },
  { img: 'https://picsum.photos/800/450?random=5', title: 'T5' },
  { img: 'https://picsum.photos/800/450?random=6', title: 'T6' },
  { img: 'https://picsum.photos/800/450?random=7', title: 'T7' },
  { img: 'https://picsum.photos/800/450?random=8', title: 'T8' },
  { img: 'https://picsum.photos/800/450?random=9', title: 'T9' },
  { img: 'https://picsum.photos/800/450?random=10', title: 'T10' },
  { img: 'https://picsum.photos/800/450?random=11', title: 'T11' },
];

const SliderContainer = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
});

const SliderWrapper = styled('div')<{ isPaused: boolean; currentIndex: number }>(({ isPaused, currentIndex }) => ({
  display: 'flex',
  width: '100%',
  transition: isPaused ? 'transform 0.1s ease-in-out' : 'transform 0.5s ease-in-out',
  transform: `translateX(-${currentIndex * 50}%)`, // 50% burada iki kartın genişliğini ifade eder
  '@media (max-width: 600px)': {
    transform: `translateX(-${currentIndex * 100}%)`, // 50% burada iki kartın genişliğini ifade eder
  },
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
  const slideCount = treatments.length;
  const extendedTreatments = [...treatments, ...treatments]; // Sonsuz döngü için diziyi genişletiyoruz

  const tt = useTranslations('TreatmentsPage.titles') as (key: keyof TreatmentsPageTranslations['titles']) => string;

  useEffect(() => {
    let autoSlideInterval: NodeJS.Timeout;

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
      <Container maxWidth={false} disableGutters={true} sx={{pt:4}}>
        <Typography variant="h4" align='center' gutterBottom>
          Dental Uygulamalarımız
        </Typography>
        <Grid container spacing={3} sx={{ mr: 1, ml: 1, mb: 1, mt: 4 }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ height:344,maxHeight:480}} >
            <SyledCard
              variant="outlined"
              tabIndex={0}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                image={'/implant.jpeg'}
                aspect-ratio="16 / 9"
                sx={{
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  height:200

                }}
              />
              <SyledCardContent sx={{height:144}}>

                <Typography gutterBottom variant="h6" component="div">
                  {"İmplant Tedavisi"}
                </Typography>
                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                  {"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                </StyledTypography>
              </SyledCardContent>
            </SyledCard>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }} sx={{ height:344,maxHeight:480}} >
            <SyledCard
              variant="outlined"
              tabIndex={0}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                image={'/pediatricdentistry.jpg'}
                aspect-ratio="16 / 9"
                sx={{
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  height:200

                }}
              />
              <SyledCardContent sx={{height:144}}>

                <Typography gutterBottom variant="h6" component="div">
                  {"Alignment Treatments"}
                </Typography>
                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                  {"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                </StyledTypography>
              </SyledCardContent>
            </SyledCard>
          </Grid>
        </Grid>
        <SliderContainer>
          <SliderWrapper isPaused={isPaused} currentIndex={currentIndex}>
            {extendedTreatments.map((app) => (
              <SliderItem key={app.title}>
                <Card sx={{ m: 1 }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={app.img}
                    alt={app.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{tt(app.title)}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tt(app.title)}
                    </Typography>
                  </CardContent>
                </Card>
              </SliderItem>
            ))}
          </SliderWrapper>
          <SliderButtonLeft onClick={handlePrev}>
            <ArrowBackIosIcon sx={{color:'#f37418'}}/>
          </SliderButtonLeft>
          <SliderButtonRight onClick={handleNext}>
            <ArrowForwardIosIcon sx={{color:'#f37418'}}/>
          </SliderButtonRight>
        </SliderContainer>
        <Button variant="contained" sx={{ mt: 3, ml: 1,backgroundColor:"#f37418" }}>
          Tüm Uygulamalar
        </Button>

      </Container>
  );
}

export default DentalApplications;
