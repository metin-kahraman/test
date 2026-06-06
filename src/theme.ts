'use client';
import { Oswald, Gowun_Batang, Nunito } from 'next/font/google';
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

const theme = createTheme({
  ...getDesignTokens('light'),
  typography: {
    // Burada fontların .style.fontFamily değerini kullanıyoruz
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
    //...inputsCustomizations,
    //...dataDisplayCustomizations,
    //...feedbackCustomizations,
    //...navigationCustomizations,
    //...surfacesCustomizations,
  },
});

export default theme;
