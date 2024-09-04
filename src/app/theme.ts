import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: 'linear-gradient(to bottom, #ff7f50, #50d0ff)', // Arka plan rengi tanımı
      paper: '#f3f3f3', // İçerik kartlarının arka plan rengi
    },
    primary: {
      main: '#ff7f50', // Turuncu tonlar
    },
    secondary: {
      main: '#50d0ff', // Mavi tonlar
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
