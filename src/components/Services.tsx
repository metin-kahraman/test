'use client';
import { Container, Typography, Grid, Card, CardMedia, Box, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { theme } from '../app/theme';

const servicesData = [
  {
    title: 'Estetik Diş Hekimliği',
    desc: 'Gülüş tasarımı, porselen kaplama, lamine veneer ile estetik ve doğal sonuçlar.',
    image: '/images/treatmentsPage/estetikdishekimligi.jpeg',
    icon: <Box component="img" src="/dental-icon.svg" alt="Icon" sx={{ width: 40, height: 40 }} /> // Placeholder için burada ikon kullanabilirsiniz
  },
  {
    title: 'İmplant Tedavisi',
    desc: 'Eksik dişleriniz için kalıcı, sağlam ve doğal görünümlü implant çözümleri.',
    image: '/images/treatmentsPage/implant.jpg',
    icon: <Box component="img" src="/implant-icon.svg" alt="Icon" sx={{ width: 40, height: 40 }} />
  },
  {
    title: 'Ortodonti',
    desc: 'Diş teli ve şeffaf plak tedavileri ile daha düzgün ve sağlıklı dişlere kavuşun.',
    image: '/images/treatmentsPage/teltedavisi.jpeg',
    icon: <Box component="img" src="/aligners-icon.svg" alt="Icon" sx={{ width: 40, height: 40 }} />
  },
  {
    title: 'Diş Bakımı',
    desc: 'Düzenli bakım ve profesyonel temizlikle ağız ve diş sağlığınızı koruyun.',
    image: '/images/treatmentsPage/disetitedavileri.jpeg',
    icon: <Box component="img" src="/checkup-icon.svg" alt="Icon" sx={{ width: 40, height: 40 }} />
  }
];

export default function Services() {
  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="caption" component="div" sx={{ color: 'primary.main', letterSpacing: '0.1em' }}>
          KALİTELİ DİŞ SAĞLIĞI
        </Typography>
        <Typography variant="h4" component="h2" sx={{ color: '#1a1a1a', mt: 1 }}>
          Dental Uygulamalarımız
        </Typography>
        <Box sx={{ width: '40px', height: '2px', bgcolor: 'primary.main', mx: 'auto', mt: 2 }} />
      </Box>

      <Grid container spacing={3}>
        {servicesData.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', borderRadius: 0, boxShadow: 'none', border: '1px solid #f0f0f0', transition: 'all 0.3s', '&:hover': { boxShadow: '0px 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-4px)' } }}>
              <CardMedia component="img" height="200" image={service.image} alt={service.title} sx={{ objectFit: 'cover' }} />
              <Box sx={{ p: 2, position: 'relative' }}>
                <Box sx={{ width: '50px', height: '50px', bgcolor: '#fff', borderRadius: '50%', border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: -3, mb: 2, boxShadow: '0px 2px 10px rgba(0,0,0,0.05)' }}>
                    <Box sx={{color:'primary.main'}}>
                        {/* İkonu buraya koyun. MUI ikonu veya SVG ile. Örnek: */}
                        {/* <LocalHospitalIcon /> */}
                        <Box sx={{width:20, height:20, bgcolor:'primary.main', borderRadius:'50%'}}></Box>
                    </Box>
                </Box>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600, fontSize: '1rem', mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: '0.9rem' }}>
                  {service.desc}
                </Typography>
                <IconButton size="small" sx={{ color: 'primary.main' }}>
                  <ArrowForwardIcon fontSize="small" />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}