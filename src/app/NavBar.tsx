'use client';
import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { theme } from './theme';

const navItems = ['DİŞ TEDAVİLERİ', 'DİJİTAL DİŞ HEKİMLİĞİ', 'KLİNİĞİMİZ', 'ÖNCESİ VE SONRASI', 'BLOG', 'İLETİŞİM'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Orange Dent Clinic
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemText primary={item} sx={{ textAlign: 'center' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" position="sticky" sx={{ backgroundColor: '#ffffff', boxShadow: '0px 1px 0px rgba(0,0,0,0.05)', color: '#000' }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 5 } }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: { xs: 1, md: 0 }, display: 'flex', alignItems: 'center', fontWeight: 'bold', letterSpacing: '1px', color: 'secondary.main' }}
          >
            ORANGE <Typography component="span" variant="caption" sx={{ ml: 1, color: 'text.secondary' }}>DENTAL CLINIC</Typography>
          </Typography>

          {/* Desktop Menü */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'text.primary', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.05em' }}>
                {item}
              </Button>
            ))}
            <Button variant="outlined" color="primary" sx={{ ml: 2, borderRadius: 0, borderWidth: 1, px: 3 }}>
              RANDEVU ALIN
            </Button>
          </Box>

          {/* Mobil Menü İkonu */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobil Çekmece */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {drawer}
      </Drawer>
    </>
  );
}