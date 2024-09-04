'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Select, MenuItem, SelectChangeEvent, styled, OutlinedInput } from '@mui/material';
import { useRouter } from 'next/navigation';
import Sitemark from './SitemarkIcon';

const languages = [
  { code: 'en', flagUrl: 'https://flagcdn.com/w40/gb.png' }, // İngilizce için bayrak
  { code: 'tr', flagUrl: 'https://flagcdn.com/w40/tr.png' }, // Türkçe için bayrak
  { code: 'ru', flagUrl: 'https://flagcdn.com/w40/ru.png' }, // Rusça için bayrak
  { code: 'fr', flagUrl: 'https://flagcdn.com/w40/fr.png' }, // Fransızca için bayrak
];

const CustomSelect = styled(Select)(({ theme }) => ({
    '& .MuiSelect-select': {
      display: 'flex',
      alignItems: 'center',
      padding: 0, // Sağ ve sol boşlukları kaldır
      minHeight: 'auto', // Yüksekliği otomatik yap
    },
    '& .MuiSelect-icon': {
      display: 'none', // Ok ikonunu gizle
    },
    '& .MuiOutlinedInput-root': {
      padding: 0, // Padding'leri sıfırla
    },
    '& .MuiOutlinedInput-input': {
      padding: '0 !important', // Padding'leri sıfırla ve !important ile geçersiz kıl
      minHeight: '1.4375em', // Minimum yükseklik
      boxSizing: 'border-box', // Box modelini border-box yap
    },
  }));
  

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState('en');
  const router = useRouter();

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    const langCode = event.target.value;
    setSelectedLanguage(langCode);
    router.push(router.pathname, router.asPath, { locale: langCode });
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 10 }}
    >
      <Container maxWidth="lg">
        <Toolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Sitemark />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="text" color="info" size="small">
                Features
              </Button>
              <Button variant="text" color="info" size="small">
                Testimonials
              </Button>
              <Button variant="text" color="info" size="small">
                Highlights
              </Button>
              <Button variant="text" color="info" size="small">
                Pricing
              </Button>
              <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                FAQ
              </Button>
              <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                Blog
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <CustomSelect
              value={selectedLanguage}
              onChange={handleLanguageChange}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={languages.find((lang) => lang.code === selected)?.flagUrl || languages[0].flagUrl}
                    alt={selected}
                    style={{ width: 32, height: 32, margin: 0 }}
                  />
                </Box>
              )}
              inputProps={{ 'aria-label': 'Language select' }}
              input={<OutlinedInput notched={false} />}
            >
              {languages.map((lang) => (
                <MenuItem key={lang.code} value={lang.code}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <img
                      src={lang.flagUrl}
                      alt={lang.code}
                      style={{ width: 32, height: 32 }}
                    />
                    <span>{lang.code.toUpperCase()}</span> {/* Bayrak kodu */}
                  </Box>
                </MenuItem>
              ))}
            </CustomSelect>
            <Button color="primary" variant="text" size="small">
              Sign in
            </Button>
            <Button color="primary" variant="contained" size="small">
              Sign up
            </Button>
          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <CustomSelect
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={languages.find((lang) => lang.code === selected)?.flagUrl || languages[0].flagUrl}
                          alt={selected}
                          style={{ width: 32, height: 32, margin: 0 }}
                        />
                      </Box>
                    )}
                    inputProps={{ 'aria-label': 'Language select' }}
                    input={<OutlinedInput notched={false} />}
                  >
                    {languages.map((lang) => (
                      <MenuItem key={lang.code} value={lang.code}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <img
                            src={lang.flagUrl}
                            alt={lang.code}
                            style={{ width: 32, height: 32 }}
                          />
                          <span>{lang.code.toUpperCase()}</span> {/* Bayrak kodu */}
                        </Box>
                      </MenuItem>
                    ))}
                  </CustomSelect>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
