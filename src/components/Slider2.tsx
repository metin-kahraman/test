import React, { useState } from 'react';
import { Box, IconButton, Typography, Button } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { orange } from '@mui/material/colors';

const sliderItems = [
  {
    description: 'Kaliteli hizmet için en iyi seçenekleri sunuyoruz.',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDEyNjB8MHwxfGFsbHwxfHx8fHx8fHwxNjYwODUwODg3&ixlib=rb-1.2.1&q=80&w=1080',
    buttonText: 'Daha Fazla Bilgi',
    buttonLink: '#',
  },
  {
    description: 'Diş sağlığınız için en iyi tedaviler burada.',
    image: 'https://images.unsplash.com/photo-1574169208507-843761748f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDEyNjB8MHwxfGFsbHwyfHx8fHx8fHwxNjYwODUwODg3&ixlib=rb-1.2.1&q=80&w=1080',
    buttonText: 'Tedavilere Göz At',
    buttonLink: '#',
  },
  {
    description: 'Uzman doktorlarımızla güvendesiniz.',
    image: 'https://images.unsplash.com/photo-1504429494987-41305d3b8aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDEyNjB8MHwxfGFsbHwzfHx8fHx8fHwxNjYwODUwODg3&ixlib=rb-1.2.1&q=80&w=1080',
    buttonText: 'Randevu Alın',
    buttonLink: '#',
  },
];

const MUISlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    const index = activeIndex > 0 ? activeIndex - 1 : sliderItems.length - 1;
    setActiveIndex(index);
  };

  const handleNextSlide = () => {
    const index = activeIndex < sliderItems.length - 1 ? activeIndex + 1 : 0;
    setActiveIndex(index);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden', m: 0 }}>
      <Box
        sx={{
          display: 'flex',
          transition: 'transform 1s ease-in-out', // Yatay geçiş efekti
          transform: `translateX(-${activeIndex * 100}%)`, // Aktif slayta kaydırma
          height: '100%',
        }}
      >
        {sliderItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: '0 0 100%',
              height: '100%',
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '10%', // Yazıyı sola yaklaştırma
                transform: 'translateY(-50%)',
                color: '#fff',
                textAlign: 'left',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '20px',
                borderRadius: '8px',
                maxWidth: '60%',
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                {item.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={item.buttonLink}
                sx={{
                  backgroundColor: 'orange',
                  '&:hover': {
                    backgroundColor: 'darkorange',
                  },
                }}
              >
                {item.buttonText}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={handlePrevSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          color: orange[400],
          border:'none',
          padding: '10px',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={handleNextSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          color: orange[400],
          border:'none',
          padding: '10px',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default MUISlider;