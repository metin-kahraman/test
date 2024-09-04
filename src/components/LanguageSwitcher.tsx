// components/LanguageSwitcher.tsx
import React, { useState } from 'react';
import { MenuItem, Select, Modal, Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useMediaQuery, useTheme } from '@mui/material';

// Dil seçeneklerini tanımlayın
const languages = [
  { code: 'en', label: 'English' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'ru', label: 'Русский' },
  { code: 'fr', label: 'Français' },
];

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(router.locale || 'en');

  const handleLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newLocale = event.target.value as string;
    setSelectedLanguage(newLocale);
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  const handleModalLanguageChange = (langCode: string) => {
    setSelectedLanguage(langCode);
    router.push(router.pathname, router.asPath, { locale: langCode });
    handleModalClose();
  };

  return (
    <div>
      {/* Masaüstü için Dropdown */}
      {!isMobile && (
        <Select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          variant="outlined"
        >
          {languages.map((lang) => (
            <MenuItem key={lang.code} value={lang.code}>
              {lang.label}
            </MenuItem>
          ))}
        </Select>
      )}

      {/* Mobil için Modal */}
      {isMobile && (
        <>
          <Button variant="outlined" onClick={handleModalOpen}>
            {languages.find((lang) => lang.code === selectedLanguage)?.label}
          </Button>
          <Modal
            open={open}
            onClose={handleModalClose}
            aria-labelledby="language-modal-title"
            aria-describedby="language-modal-description"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 300,
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 24,
                p: 4,
              }}
            >
              <h2 id="language-modal-title">Select Language</h2>
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  fullWidth
                  onClick={() => handleModalLanguageChange(lang.code)}
                  sx={{ mb: 2 }}
                >
                  {lang.label}
                </Button>
              ))}
            </Box>
          </Modal>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
