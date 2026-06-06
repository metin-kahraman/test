"use client";
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#d3a572', // Tasarımdaki altın rengi tonu
      light: '#f2d0a4',
      dark: '#b08350',
    },
    secondary: {
      main: '#2f4037', // Tasarımdaki koyu yeşil/antrasit tonu
    },
    background: {
      default: '#fcfbf9', // Hafif krem tonu
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 400,
      letterSpacing: '0.02em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
});