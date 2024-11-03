'use client';
import { Oswald, Gowun_Batang } from 'next/font/google';
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
  weight: [ '400', '700'],
  subsets: ['latin'],
});

const theme = createTheme({
  ...getDesignTokens('light'),
  typography: {
    fontFamily: [
      oswald,
      gowunBatang,
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    body1: {
      fontFamily: 'gowunBatang',
      textTransform: 'none',
    },
    body2: {
      fontFamily: 'gowunBatang',
      textTransform: 'none',
    },
    h1: {
      fontFamily: 'gowunBatang',
    },
    h2: {
      fontFamily: 'gowunBatang',
    },
    h3: {
      fontFamily: 'gowunBatang',

    },
    h4: {
      fontFamily: 'gowunBatang',
    },
    h5: {
      fontFamily: 'gowunBatang',
    },
    h6: {
      fontFamily: 'gowunBatang',
    },
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
