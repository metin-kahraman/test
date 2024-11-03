"use client";

import * as React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation'; // `locale` için gerekli
import { useTranslations } from 'next-intl';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { TreatmentsPageTranslations } from '@/types';
import Link from '@mui/material/Link';
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
}));

const StyledCardContent = styled(CardContent)({
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

const CustomDivider = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 2,
  backgroundColor: 'orange',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    borderBottom: `2px solid orange`,
  },
  '&::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 50,
    height: 50,
    backgroundImage: 'url(https://i.postimg.cc/J4w07Fsz/415029410-908622684217705-5065322948124474079-n.jpg)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '50%',
  },
}));

const cardData = [
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

const TreatmentsPage = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const t = useTranslations('TreatmentsPage.titles') as (key: keyof TreatmentsPageTranslations['titles']) => string;
  const seo = useTranslations('TreatmentsPage.seo') as (key: keyof TreatmentsPageTranslations['seo']) => string;

  const isXs = useMediaQuery('(max-width:600px)');
  const isMd = useMediaQuery('(min-width:901px) and (max-width:1200px)');
  const isLg = useMediaQuery('(min-width:1201px) and (max-width:1536px)');
  const isXl = useMediaQuery('(min-width:1537px)');

  const pageTitle = seo('title');
  const pageDescription = seo('description');
  const pageKeywords = seo('keywords');
  const url = seo('url');

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link rel="alternate" hrefLang={locale} href={`/${locale}/${url}`} />
      </Head>
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', mt: 16, mb: 16, gap: 4 }}>
        <Grid container spacing={2}>
          {cardData.map((card, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} md={6} lg={4} xl={3}>
              <Link underline="none" href={t(card.title+"Link")}>

                <StyledCard variant="outlined">
                  <CardMedia
                    component="img"
                    alt={`Dental treatment: ${t(card.title)}`}
                    image={card.img}
                    sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
                  />
                  <StyledCardContent>
                    <Typography sx={{ textAlign: 'center', alignSelf: 'center' }} gutterBottom variant="h6" component="div">
                      {t(card.title)}
                    </Typography>
                  </StyledCardContent>
                </StyledCard>
                </Link>
              </Grid>
              {(isXs && index < cardData.length - 1) || 
               (isMd && index < cardData.length - 1 && (index + 1) % 2 === 0) ||
               (isLg && index < cardData.length - 1 && (index + 1) % 3 === 0) ||
               (isXl && index < cardData.length - 1 && (index + 1) % 4 === 0)
              ? (
                <Grid item xs={12}>
                  <CustomDivider />
                </Grid>
              ) : null}
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default TreatmentsPage;
