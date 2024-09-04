import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Define image data as a JavaScript object
const imageData = [
  { src: 'https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_1280.jpg', title: 'Başlık 1' },
  { src: 'https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_1280.jpg', title: 'Başlık 2' },
  { src: 'https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_1280.jpg', title: 'Başlık 3' },
  { src: 'https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_1280.jpg', title: 'Başlık 4' },
  { src: 'https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_1280.jpg', title: 'Başlık 5' }
];

// Container for the carousel
const CarouselContainer = styled('div')({
  position: 'relative',
  width: '100%',
  height: '300px',
  overflow: 'hidden',
});

// Container for rotating elements
const RotatingWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  position: 'relative',
  overflowX: 'hidden',
  scrollSnapType: 'x mandatory',
  scrollBehavior: 'smooth',
  '&::-webkit-scrollbar': {
    display: 'none', // Hide scrollbar
  },
});

const Slide = styled(Card)({
  flex: '0 0 auto',
  width: '300px',
  margin: '0 10px',
  borderRadius: '20px',
  overflow: 'hidden',
  position: 'relative',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  scrollSnapAlign: 'center', // Ensure proper snapping
});

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Ensure the image covers the card area
});

const Title = styled(Typography)({
  position: 'absolute',
  bottom: '10px',
  left: '50%',
  transform: 'translateX(-50%)',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  padding: '5px',
  borderRadius: '5px',
  textAlign: 'center',
});

const ShowAllButton = styled(Button)({
  position: 'absolute',
  bottom: '10px',
  left: '50%',
  transform: 'translateX(-50%)',
  color: 'white',
  backgroundColor: 'orange',
  backgroundImage: 'linear-gradient(to right, #ff7f50, #50d0ff)', // Gradient efekt
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Hafif gölge
  border: 'none',
  borderRadius: '30px', // Yuvarlak köşeler
  padding: '10px 20px', // İç boşluk
  fontSize: '16px', // Yazı boyutu
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease', // Geçiş animasyonu

  '&:hover': {
    backgroundImage: 'linear-gradient(to right, #FF6347, #FF4500)', // Hover'da gradient değişimi
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)', // Hover'da daha belirgin gölge
    transform: 'translateX(-50%) scale(1.05)', // Hover'da hafif büyüme
  },

  '&:active': {
    boxShadow: 'none', // Aktif durumda gölgeyi kaldır
    transform: 'translateX(-50%) scale(0.95)', // Aktif durumda butonu hafif küçült
  },
});


const ArrowButton = styled(Button)(({ direction }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  ...(direction === 'left' ? { left: '10px' } : { right: '10px' }),
}));

const CategorySlider = () => {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    setImages(imageData);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        const slideWidth = 300; // Width of each slide
        const margin = 20; // Margin between slides
        const totalWidth = slideWidth + margin;
        const scrollLeft = wrapperRef.current.scrollLeft;
        const centerIndex = Math.round(scrollLeft / totalWidth);
        setActiveIndex(centerIndex);
      }
    };

    const scrollContainer = wrapperRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [images]);

  useEffect(() => {
    const autoScroll = () => {
      if (wrapperRef.current) {
        const slideWidth = 300; // Width of each slide
        const margin = 20; // Margin between slides
        const totalWidth = slideWidth + margin;
        const newScrollLeft = (wrapperRef.current.scrollLeft + totalWidth) % (totalWidth * images.length);
        wrapperRef.current.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth'
        });
      }
    };

    intervalRef.current = setInterval(autoScroll, 3000); // Adjust the interval as needed
    return () => clearInterval(intervalRef.current);
  }, [images]);

  const goToPrevious = () => {
    if (wrapperRef.current) {
      const slideWidth = 300; // Width of each slide
      const margin = 20; // Margin between slides
      const totalWidth = slideWidth + margin;
      const newScrollLeft = (wrapperRef.current.scrollLeft - totalWidth + (totalWidth * images.length)) % (totalWidth * images.length);
      wrapperRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
    resetAutoScroll();
  };

  const goToNext = () => {
    if (wrapperRef.current) {
      const slideWidth = 300; // Width of each slide
      const margin = 20; // Margin between slides
      const totalWidth = slideWidth + margin;
      const newScrollLeft = (wrapperRef.current.scrollLeft + totalWidth) % (totalWidth * images.length);
      wrapperRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (wrapperRef.current) {
        const slideWidth = 300; // Width of each slide
        const margin = 20; // Margin between slides
        const totalWidth = slideWidth + margin;
        const newScrollLeft = (wrapperRef.current.scrollLeft + totalWidth) % (totalWidth * images.length);
        wrapperRef.current.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth'
        });
      }
    }, 3000); // Reset interval
  };

  const imageElements = images.map((image, index) => (
    <Slide key={index}>
      <Image src={image.src} alt={image.title} />
      <CardContent>
        <Title variant="h4">{image.title}</Title>
      </CardContent>
    </Slide>
  ));

  // Duplicate images to ensure infinite scrolling
  const carouselContent = [...imageElements, ...imageElements];

  return (
    <CarouselContainer>
      <ArrowButton direction="left" onClick={goToPrevious}>
        <ArrowBackIcon />
      </ArrowButton>
      <ArrowButton direction="right" onClick={goToNext}>
        <ArrowForwardIcon />
      </ArrowButton>
      <RotatingWrapper ref={wrapperRef}>
        {carouselContent}
      </RotatingWrapper>
      <ShowAllButton variant="contained">Tümünü Göster</ShowAllButton>
    </CarouselContainer>
  );
};

export default CategorySlider;
