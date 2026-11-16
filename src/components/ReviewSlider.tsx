"use client";
import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Card, CardContent, IconButton,
  useMediaQuery, useTheme,
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import TranslateIcon from '@mui/icons-material/Translate';
import { useLocale, useTranslations } from "next-intl";
import Link from '@mui/material/Link';

const reviewsItems = ["1", "2", "3", "4", "5"];
const reviewSourceLocales: Record<string, string> = {
  '1': 'tr', '2': 'ru', '3': 'en', '4': 'ro', '5': 'fr',
};

function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviewsItems.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? reviewsItems.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % reviewsItems.length);

  const buttonSx = {
    backgroundColor: '#FFA500',
    color: '#fff',
    zIndex: 3,
    '&:hover': { backgroundColor: '#FF8C00' },
  };

  return (
    <Box sx={{ width: '100%', margin: '0 auto', padding: { xs: '12px', sm: '20px' } }}>
      {/* Slider viewport */}
      <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>

        {/* Desktop: sol ok */}
        {!isMobile && (
          <IconButton
            onClick={handlePrev}
            aria-label="Previous review"
            sx={{
              ...buttonSx,
              position: 'absolute', left: '10px', top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <ArrowBack />
          </IconButton>
        )}

        {/* Sliding track */}
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            minHeight: { xs: 280, sm: 260 },
            transition: 'transform 0.5s ease',
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {reviewsItems.map((review, index) => (
            <Box
              key={index}
              sx={{
                flex: '0 0 100%',
                minWidth: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box',
                px: { xs: 1, sm: 2 },
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  maxWidth: '600px',
                  backgroundColor: 'white',
                  border: '2px solid #FFA500',
                  borderRadius: '15px',
                  textAlign: 'center',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s, opacity 0.3s',
                  transform: currentIndex === index ? 'scale(1.02)' : 'scale(0.98)',
                  opacity: currentIndex === index ? 1 : 0.85,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}
              >
                <Box sx={{ pt: 2 }}>
                  <img
                    src="/google-logo.png"
                    alt="Google Reviews"
                    width={100}
                    height={42}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100px', height: 'auto' }}
                  />
                </Box>

                <CardContent
                  sx={{
                    padding: { xs: '8px 8px 4px', sm: '10px' },
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  <Typography
                    variant="body1"
                    lang={reviewSourceLocales[review]}
                    sx={{
                      mb: '10px',
                      px: { xs: 1, sm: '16%' },
                      textAlign: 'center',
                      textIndent: 0,
                      wordBreak: 'break-word',
                      overflowWrap: 'anywhere',
                    }}
                  >
                    {t(`comment${review}orj`)}
                  </Typography>

                  {reviewSourceLocales[review] !== locale &&
                    t(`comment${review}orj`).trim() !== t(`comment${review}Translate`).trim() && (
                      <>
                        <TranslateIcon aria-hidden="true" sx={{ color: '#ff7f50' }} />
                        <Typography
                          variant="body1"
                          lang={locale}
                          sx={{
                            mb: '10px',
                            px: { xs: 1, sm: '16%' },
                            textAlign: 'center',
                            textIndent: 0,
                            wordBreak: 'break-word',
                            overflowWrap: 'anywhere',
                          }}
                        >
                          {t(`comment${review}Translate`)}
                        </Typography>
                      </>
                    )}

                  <Link
                    href={t(`comment${review}Link`)}
                    color="#FF8C00"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('viewReview')}
                  </Link>
                </CardContent>

                {/* 🔑 Mobil: oklar kart içinde, yorumun hemen altında */}
                {isMobile && (
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 3,
                      pb: 2,
                      pt: 0.5,
                      mt: 'auto', // kısa yorumlarda alta yaslan
                    }}
                  >
                    <IconButton
                      onClick={handlePrev}
                      aria-label="Previous review"
                      size="small"
                      sx={buttonSx}
                    >
                      <ArrowBack fontSize="small" />
                    </IconButton>
                    <IconButton
                      onClick={handleNext}
                      aria-label="Next review"
                      size="small"
                      sx={buttonSx}
                    >
                      <ArrowForward fontSize="small" />
                    </IconButton>
                  </Box>
                )}
              </Card>
            </Box>
          ))}
        </Box>

        {/* Desktop: sağ ok */}
        {!isMobile && (
          <IconButton
            onClick={handleNext}
            aria-label="Next review"
            sx={{
              ...buttonSx,
              position: 'absolute', right: '10px', top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <ArrowForward />
          </IconButton>
        )}
      </Box>
    </Box>
  );
}

export default ReviewSlider;