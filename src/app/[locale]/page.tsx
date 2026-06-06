import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import Navbar from '../components/Navbar'; // <--- BUNU SİLİN
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import WhyChooseUs from '../../components/WhyChooseUs';
import { theme } from '../theme';
import ReviewSlider from '@/components/ReviewSlider';
import Partners from '@/components/Partners';
export default function Home() {
    const partnersData = [
    { id: 1, name: 'Dentsply Sirona', logo: 'images/icons/oral-b.png' },
    { id: 2, name: 'Nobel', logo: 'images/icons/listerine.svg' },
    { id: 3, name: 'Firma C', logo: 'images/icons/sirona.png' },
    { id: 4, name: 'Firma A', logo: 'images/icons/gc.svg' },
    { id: 5, name: 'Firma B', logo: 'images/icons/cerec.png' },
    { id: 6, name: 'Firma', logo: 'images/icons/straumann.png' },
    { id: 7, name: 'Firma', logo: 'images/icons/ivoclar.png' },
    { id: 8, name: 'Firma', logo: 'images/icons/3m.png' },
    { id: 9, name: 'Firma', logo: 'images/icons/Tokuyama.png' },
    { id: 10, name: 'Firma', logo: 'images/icons/opalescence.png' },
    { id: 11, name: 'Firma', logo: 'images/icons/Astra.png' },
    { id: 12, name: 'Firma', logo: 'images/icons/Akylos.png' },
    { id: 13, name: 'Firma', logo: 'images/icons/nobel.png' },
    { id: 14, name: 'Firma', logo: 'images/icons/megagen.png' },
    { id: 15, name: 'Firma', logo: 'images/icons/Osstem.svg' }


  ];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Navbar />  <--- BURAYI DA SİLİN (AppAppBar layout'ta var) */}
      <main>
        <Hero />
        <Services />
        <ReviewSlider></ReviewSlider>
        <Partners partners={partnersData} />

        <WhyChooseUs />
      </main>
    </ThemeProvider>
  );
}