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


  return (
    <React.Fragment>
                  <CustomDivider />
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
                <SitemarkIcon />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, mt: 2 }}
                >
                  Contact Us
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  Reach out to us through the form below or visit us at our office.
                </Typography>
                <Stack direction="column" spacing={2}>
                  <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                    Address
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    123 Main Street, Suite 456, City, Country
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                    Phone
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    +123 456 7890
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                    Email
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    contact@sitemark.com
                  </Typography>
                </Stack>

              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ width: '100%', height: '300px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2970745575454!2d-122.41135668468183!3d37.77492977975977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808df1f58c07%3A0x9c4f06e5a5e6231b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1632344402727!5m2!1sen!2sus"
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