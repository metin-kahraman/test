'use client';
import { Box, Container, Typography, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HealingIcon from '@mui/icons-material/Healing';
import { useTranslations } from 'next-intl';



export default function WhyChooseUs() {

    const t = useTranslations('Footer');
  const reasons = [
  { icon: <PersonIcon />, title: t('iconPersonTitle'), desc: t('iconPersonSubTitle') },
  { icon: <BuildIcon />, title: t('iconRepairTitle'), desc: t('iconRepairSubTitle') },
  { icon: <CalendarMonthIcon />, title: t('iconCalendarTitle'), desc: t('iconCalendarSubTitle') },
  { icon: <HealingIcon />, title: t('iconMedicTitle'), desc: t('iconMedicSubTitle') },
];
    
  return (
    <Box sx={{ bgcolor: '#2f4037', color: '#fff', py: 8 }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          {/* Sol Taraf: Başlıklar */}
          <Grid item xs={12} md={4}>
            <Typography variant="caption" component="div" sx={{ fontWeight:600,letterSpacing: '0.1em', color: '#d3a572', mb: 1 }}>
              Orange Dent Clinic
            </Typography>
            <Typography variant="h4" component="h2" 
            sx={{ fontWeight: 400, fontSize: {xs: '1.8rem', md: '2.5rem'},
                 textAlign: 'left',
    hyphens: 'auto',        // uzun kelimeleri satır sonunda böler
    wordSpacing: '0.05em',  // kelime arası boşluğu sınırlar
    lineHeight: 1.6,        // satır aralığını dengeler
    overflowWrap: 'break-word', // taşan kelimeleri kırar
                }}>
              {t('title')}
            </Typography>
          </Grid>

          {/* Sağ Taraf: Grid */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {reasons.map((reason, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Box sx={{ color: '#d3a572', mb: 1 }}>
                      {reason.icon}
                    </Box>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 600, fontSize: '1rem', mb: 0.5 }}>
                      {reason.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#b0bfb5' }}>
                      {reason.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}