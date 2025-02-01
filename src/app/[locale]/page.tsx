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
import { Grid, Grid2 } from '@mui/material';
import SitemarkIcon from '@/components/SitemarkIcon';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { Opacity } from '@mui/icons-material';
import Partners from '@/components/Partners';
export default function Blog() {
  const partnersData = [
    { id: 1, name: 'Dentsply Sirona', logo: 'https://picsum.photos/800/450?random=1' },
    { id: 2, name: 'Nobel', logo: 'https://picsum.photos/800/450?random=1' },
    { id: 3, name: 'Firma C', logo: 'https://picsum.photos/800/450?random=1' },
    { id: 4, name: 'Firma A', logo: 'https://picsum.photos/800/450?random=1' },
    { id: 5, name: 'Firma B', logo: 'https://picsum.photos/800/450?random=1' },
    { id: 6, name: 'Firma', logo: 'https://picsum.photos/800/450?random=1' },
    { id: 7, name: 'Firma', logo: 'https://picsum.photos/800/450?random=1' },
    { id: 8, name: 'Firma', logo: 'https://picsum.photos/800/450?random=1' },
    { id: 9, name: 'Firma', logo: 'https://picsum.photos/800/450?random=1' },
  ];
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  
  const blogTheme = createTheme(getBlogTheme(mode));

  const imageUrls = [
    "https://picsum.photos/800/450?random=1",
    "https://picsum.photos/800/450?random=2",
    "https://picsum.photos/800/450?random=3"
];

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
      <Container maxWidth={false} disableGutters={true} component="main" sx={{ flexDirection: 'column' }}>

        <MUISlider/>
     {/**
      * 
      *         <img src='/OrangeDentClinic.svg'   style={{
            height: 100,
            width: '100%',
            marginTop:40,
          }}  ></img> 
            
      */}


        <DentalApplications />

        <CustomDivider />


        <ReviewSlider />
        <CustomDivider />

        <Grid2 container spacing={3} sx={{ mr: 1, ml: 1, mb: 1, mt: 4 }}>
        <Grid2 size={{ xs: 12, md: 4 }}>
        <CustomBeforeAfterSlider beforeImage='/images/ba12.jpeg'
        afterImage='/images/ba11.jpeg' handleImage='/img.jpeg'/>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
        <CustomBeforeAfterSlider beforeImage='/images/ba21.jpeg'
        afterImage='/images/ba22.jpeg' handleImage='/img.jpeg'/>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
        <CustomBeforeAfterSlider beforeImage='/images/ba31.jpeg'
        afterImage='/images/ba32.jpeg' handleImage='/img.jpeg'/>
        </Grid2>
        </Grid2>
        
        <Partners partners={partnersData} />


        </Container>
        </>

  );
}

/**
 * 
 *         <ImgCard imageSrc='/DSC_0103.JPG' caption='ORANGE DENT ' text='İçerik'/>

        <CustomBeforeAfterSlider beforeImage='https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_1280.jpg'
        afterImage='https://picsum.photos/800/450?random=2' handleImage='/img.jpeg'/>
                <CustomDivider />

                        <ImgCard imageSrc='https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_1280.jpg' caption='MyCaption' text='MyText' imageFirst={false}/>


 */
