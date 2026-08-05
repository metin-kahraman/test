'use client';
import { Container, Typography, Grid, Card, CardMedia, Box, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { theme } from '../app/theme';
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
const servicesData2 = [
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


const servicesData = ["AESTHETICDENTISTRY", "IMPLANT", "ORTHODONTIC", "DENTALBLEACHING"];
const serviceDataLink =["T1Link","T8Link","T4Link","T2Link"]
export default function Services() {
    const { locale } = useParams();
    console.log("Locale in Services component:", locale); // Log the locale to check its value
    const t = useTranslations('HomePage');
    const tt = useTranslations('Menu.titles');
    const ttt = useTranslations('Treatmans');
    const tLink = useTranslations('TreatmentsPage.titles');

  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="caption" component="div" sx={{ color: 'primary.main', letterSpacing: '0.1em' }}>
          {t('title5')}
        </Typography>
        <Typography variant="h4" component="h2" sx={{ color: '#1a1a1a', mt: 1 }}>
          {tt('item1')}
        </Typography>
        <Box sx={{ width: '40px', height: '2px', bgcolor: 'primary.main', mx: 'auto', mt: 2 }} />
      </Box>

      <Grid container spacing={3}>
        {servicesData2.map((service, index) => (
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
                  {ttt(`${servicesData[index]}.item1.title`)}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: '0.9rem' }}>
                   {ttt(`${servicesData[index]}.item1.value`)}
                </Typography>


              </Box>
            </Card>
            <Box sx={{ position: "relative", width: '100%', height: '10', pt:0.5}}>
  <IconButton
    size="small"
    sx={{
      color: "primary.main",
      position: "absolute",
      bottom: 8,
      left: 10
      }}
    component="a"
    href={`${locale}/${tLink(serviceDataLink[index])}`}
  >
    <ArrowForwardIcon fontSize="small" />
  </IconButton>
</Box>
          </Grid>
          
        ))}
        
      </Grid>
      
    </Container>
  );
}