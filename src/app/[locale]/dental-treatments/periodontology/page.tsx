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
import TreatmansEndo from '@/components/PageContent/treatments/Periodontology';
const TreatmansPeriPage = () => {

  return (
    <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', mt: 16, mb: 16, gap: 4 }}>
    <TreatmansEndo></TreatmansEndo>
   </Container>
  );
};

export default TreatmansPeriPage;
