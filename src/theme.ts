'use client';
import { Oswald, Gowun_Batang, Nunito, Handlee } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { getDesignTokens } from './app/theme/themePrimitives';
import {
  inputsCustomizations,
  dataDisplayCustomizations,
  feedbackCustomizations,
  navigationCustomizations,
  surfacesCustomizations,
} from './app/theme/customizations';

const oswald = Oswald({
  weight: ['200', '300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});
const gowunBatang = Gowun_Batang({
  weight: ['400', '700'],
  subsets: ['latin'],
});
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});
const handlee = Handlee({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  ...getDesignTokens('light'),
  typography: {
    fontFamily: [
      'sans-serif',
      nunito.style.fontFamily,
      oswald.style.fontFamily,
      gowunBatang.style.fontFamily,
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
    ].join(','),
    body1: {
      fontFamily: gowunBatang.style.fontFamily,
      textTransform: 'none',
      fontSize: 18,
      textAlign: 'justify',
    },
    body2: {
      fontFamily: gowunBatang.style.fontFamily,
      textTransform: 'none',
    },
    h1: { fontFamily: gowunBatang.style.fontFamily },
    h2: { fontFamily: gowunBatang.style.fontFamily },
    h3: { fontFamily: gowunBatang.style.fontFamily },
    h4: { fontFamily: gowunBatang.style.fontFamily },
    h5: { fontFamily: gowunBatang.style.fontFamily },
    h6: { fontFamily: gowunBatang.style.fontFamily },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          padding: '20px', // mt:2 karşılığı
          textAlign: 'justify',
          textIndent: '2em', // satır başı boşluğu
        },
                h1: {
          padding: '5px', // mt:2 karşılığı
          //textAlign: 'justify'
          textAlign: 'center'
        },
                h2: {
          padding: '5px', // mt:2 karşılığı
          //textAlign: 'justify'
          textAlign: 'center'
        },
                h3: {
          padding: '5px', // mt:2 karşılığı
          //textAlign: 'justify'
          textAlign: 'center'
        },
                h4: {
          padding: '5px', // mt:2 karşılığı
          //textAlign: 'justify'
          textAlign: 'center'
        },
                       h5: {
          padding: '5px', // mt:2 karşılığı
          //textAlign: 'justify'
          textAlign: 'center'
        },
                       h6: {
          padding: '5px', // mt:2 karşılığı
          textAlign: 'center'
        },

      },
    },
    //...inputsCustomizations,
    //...dataDisplayCustomizations,
    //...feedbackCustomizations,
    //...navigationCustomizations,
    //...surfacesCustomizations,
  },
});

export default theme;
