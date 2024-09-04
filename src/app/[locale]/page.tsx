"use client";

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, PaletteMode } from '@mui/material/styles';
import AppAppBar from '@/components/AppAppBar';
import MainContent from '@/components/MainContent';
import Latest from '@/components/Latest';
import Footer from '@/components/Footer';
import Slider from '@/components/Slider';
import MUISlider from '@/components/Slider2';
import ImgCard from '@/components/ImgCard';
import NavBar from '../NavBar';
import ReviewSlider from '@/components/ReviewSlider';
import getBlogTheme from '../theme/getBlogTheme';
import CustomBeforeAfterSlider from "@/components/BeforeAfter";
import {useTranslations} from 'next-intl';
import CustomDivider from '@/components/CustomDivider';
import CategorySlider from '@/components/CategorySlider';
import DentalApplications from '@/components/DentalApplications';

export default function Blog() {

  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  
  const blogTheme = createTheme(getBlogTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  



  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };
  const t = useTranslations('HomePage');

  return (
    <>
      <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', mt: 16, mb: 16, gap: 4 }}>

        <MUISlider/>
        <CustomDivider />

        <ImgCard imageSrc='https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_1280.jpg' caption='MyCaption' text='MyText'/>
        <CustomDivider />

        <ImgCard imageSrc='https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_1280.jpg' caption='MyCaption' text='MyText' imageFirst={false}/>

        <CustomDivider />

        <ReviewSlider />
        <CustomDivider />
        <DentalApplications />
        <CustomDivider />

        <CategorySlider />
        </Container>
        </>

  );
}
