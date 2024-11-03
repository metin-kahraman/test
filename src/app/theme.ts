'use client';
import { Roboto, Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { getDesignTokens } from './theme/themePrimitives';

import {
  inputsCustomizations,
  dataDisplayCustomizations,
  feedbackCustomizations,
  navigationCustomizations,
  surfacesCustomizations,
} from '../app/theme/customizations';

const roboto = Roboto({
  weight: ['100', '300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
});
const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

const theme = createTheme({
  ...getDesignTokens('dark'),
  components: {
    ...inputsCustomizations,
    ...dataDisplayCustomizations,
    ...feedbackCustomizations,
    ...navigationCustomizations,
    ...surfacesCustomizations,
  },
});

export default theme;
