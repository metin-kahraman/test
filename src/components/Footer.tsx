import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import SitemarkIcon from './SitemarkIcon';
import CustomDivider from './CustomDivider';
import { useTranslations } from 'next-intl';


function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      {'Copyright © '}
      <Link color="text.secondary" href="https://mui.com/">
        Sitemark
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {

  const t = useTranslations('Footer');
  return (
    <React.Fragment>
                  <CustomDivider text="" />
        <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            width: '100%',
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box>
                {/*<SitemarkIcon />*/}
                <Typography
                  variant="h6"
                  gutterBottom
                  color="#d3a572"
                  sx={{ fontWeight: 600, mt: 2 }}
                >
                  Orange Dent Clinic
                </Typography>

                <Stack direction="column" spacing={2}>
                  <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                    {t('address')}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Merkez, Lise Cd. 18 C / D, 07980 Kemer/Antalya
                  </Typography>
                   <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {t('phone')}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    05324401740
                  </Typography>
                  
                </Stack>

              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ width: '100%', height: '300px' }}>
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d306.9322410570486!2d30.5584491!3d36.599118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3b7ec82618f7b%3A0x4e65997d889e38fb!2sOrange%20Dent%20Clinic!5e0!3m2!1str!2str!4v1721820000000!5m2!1str!2str"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            pt: { xs: 4, sm: 8 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >


        </Box>
      </Container>
    </React.Fragment>
  );
}
/**
 *           <Stack direction="row" spacing={1} useFlexGap sx={{ justifyContent: 'left', color: 'text.secondary' }}>
            <IconButton
              color="inherit"
              size="small"
              href="https://github.com/mui"
              aria-label="GitHub"
              sx={{ alignSelf: 'center' }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://x.com/MaterialUI"
              aria-label="X"
              sx={{ alignSelf: 'center' }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://www.linkedin.com/company/mui/"
              aria-label="LinkedIn"
              sx={{ alignSelf: 'center' }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
 */