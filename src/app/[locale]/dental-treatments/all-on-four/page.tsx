"use client";

import * as React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation'; // `locale` için gerekli
import { useTranslations } from 'next-intl';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { TreatmentsPageTranslations } from '@/types';
import ContentRightSlideMenu from '@/components/contentRightSlideMenu';
import TreatmansAllOnFor from '@/components/PageContent/treatments/AllOnFour';
const TreatmansAllOnForPage = () => {

  return (
    <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', mt: 16, mb: 16, gap: 4 }}>
        <Grid container spacing={2} component="div">
      <Grid size={{ xs: 12, md: 9 }}>
          <Paper sx={{ backgroundColor: "white" }}>

              <Box p={2}>

              <TreatmansAllOnFor></TreatmansAllOnFor>


              </Box>

          </Paper>

      </Grid>

      {/* Sağ taraf (3 birim genişlik) */}
      <Grid size={{ xs: 12, md: 3 }}>
          <ContentRightSlideMenu />

      </Grid>

  </Grid>

    
   </Container>
  );
};

export default TreatmansAllOnForPage;
