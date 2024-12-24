"use client";
import * as React from "react";
import { useTranslations } from "next-intl";

import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Sitemark from "./SitemarkIcon";
import { usePathname, useRouter, useParams } from "next/navigation";
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  OutlinedInput,
  Modal,
  Container,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import urlMappings from "public/locales/urlMapping";
import { MenuItemTranslations } from "@/types/menu";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.paper, 0.4),
  boxShadow: theme.shadows[1],
  padding: "8px 12px",
}));

const languages = [
  { code: "en", flagUrl: "https://flagcdn.com/w320/gb.png" },
  { code: "tr", flagUrl: "https://flagcdn.com/w320/tr.png" },
  { code: "ru", flagUrl: "https://flagcdn.com/w320/ru.png" },
  { code: "fr", flagUrl: "https://flagcdn.com/w320/fr.png" },
];

const CustomSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    minHeight: "auto",
  },
  "& .MuiSelect-icon": {
    display: "none",
  },
  "& .MuiOutlinedInput-root": {
    padding: 0,
  },
  "& .MuiOutlinedInput-input": {
    padding: "0 !important",
    boxSizing: "border-box",
  },
}));
const menuItems = [
  { title: "item1" },
  { title: "item2" },
  { title: "item3" },
  { title: "item4" },
  { title: "item6" },
];

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setmodalOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const { locale } = params;
  const t = useTranslations("Menu.titles") as (
    key: keyof MenuItemTranslations["titles"]
  ) => string;
  const url = useTranslations("Menu.urls") as (
    key: keyof MenuItemTranslations["url"]
  ) => string;
  const handleScrollToBottom = () => {
    console.log("cliked");
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>("en");
  const flagitemMobil = languages.find((language) => language.code === locale);
  const [color, setColor] = React.useState('green'); React.useEffect(() => { const interval = setInterval(() => { setColor((prevColor) => (prevColor === 'green' ? '#f37418' : 'green')); }, 5000); return () => clearInterval(interval); }, []);
  const handleLanguageChange = (event: SelectChangeEvent<unknown> | string) => {
    const newLocale =
      typeof event === "string" ? event : (event.target.value as string);

    // Mevcut locale'yi çıkart ve kalan path'i al
    const pathParts = pathname.split("/");
    const currentPath = pathParts.slice(2).join("/"); // locale ve '/' kısmını çıkar

    // URL'yi yeni locale'e göre dönüştür
    const newPath =
      urlMappings[newLocale as keyof typeof urlMappings]?.[currentPath] ||
      currentPath;
    console.log("newPath", newPath);
    // Yönlendirme
    router.push(`/${newLocale}/${newPath}`);
    setSelectedLanguage(newLocale);
  };

  const handleModalOpen = () => setmodalOpen(true);
  const handleModalClose = () => setmodalOpen(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };


  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
        pr: "2.2%",
        pl: "2.2%",
      }}
    >
      <Container maxWidth={false} disableGutters={false}>
        <StyledToolbar>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <Sitemark />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {menuItems.map((item) => (
                <Button
                  onClick={() => router.push(`/${locale}/${url(item.title)}`)}
                  variant="text"
                  sx={{
                    color: item.title == "item4" ?  color : "#388E3C",
                    transition:item ?  'color 1.7s ease-in-out' : "none",
                    fontWeight: "bold",
                    fontFamily: "oswald",
                    letterSpacing: "0.5px",
                    fontSize: "12px",
                  }}
                >
                  {t(item.title)}
                </Button>
              ))}
              <Button
                onClick={() => handleScrollToBottom()}
                variant="text"
                sx={{
                  color: "#388E3C",
                  fontWeight: "bold",
                  fontFamily: "oswald",
                  letterSpacing: "0.5px",
                  fontSize: "12px",
                }}
              >
                {t("item5")}
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <IconButton
              aria-label="Instgram"
              size="small"
              sx={{ color: "#E4405F" }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              aria-label="Telefon"
              size="small"
              sx={{ color: "#f37418" }}
            >
              <PhoneIcon />
            </IconButton>
            <IconButton aria-label="WhatsApp" size="small" color="success">
              <WhatsAppIcon />
            </IconButton>

            <CustomSelect
              value={locale}
              onChange={handleLanguageChange}
              sx={{ borderRadius: "50%" }}
              renderValue={(selected) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={
                      languages.find((lang) => lang.code === locale)?.flagUrl ||
                      languages[0].flagUrl
                    }
                    alt={selectedLanguage as string} // 'unknown' türünü 'string' olarak belirtiyoruz
                    style={{
                      width: 26,
                      height: 24,
                      margin: 0,
                      borderRadius: "50%",
                    }}
                  />
                </Box>
              )}
              inputProps={{ "aria-label": "Dil seç" }}
              input={<OutlinedInput notched={false} />}
            >
              {languages.map((lang) => (
                <MenuItem key={lang.code} value={lang.code}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <img
                      src={lang.flagUrl}
                      alt={lang.code}
                      style={{ width: 32, height: 24 }}
                    />
                  </Box>
                </MenuItem>
              ))}
            </CustomSelect>
          </Box>
          <Box sx={{ display: { sm: "flex", md: "none" } }}>
            <Modal
              open={modalOpen}
              onClose={handleModalClose}
              aria-labelledby="language-modal-title"
              aria-describedby="language-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 300,
                  bgcolor: "hsla(210, 100%, 95%, 0.8)",
                  borderRadius: 2,
                  boxShadow: 24,
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h2 id="language-modal-title">Dil Seçin</h2>
                {languages.map((lang) => (
                  <IconButton
                    key={lang.code}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mt: 2,
                    }}
                    aria-label={`${lang.code} bayrağı`}
                    size="small"
                    color="success"
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    <img
                      src={lang.flagUrl}
                      alt={lang.code}
                      style={{ width: 42, height: 42, borderRadius: "50%" }}
                    />
                  </IconButton>
                ))}
              </Box>
            </Modal>

            <IconButton aria-label="Telefon" size="small" color="warning">
              <PhoneIcon />
            </IconButton>
            <IconButton aria-label="WhatsApp" size="small" color="success">
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              aria-label="Dil Seçimi"
              size="small"
              color="success"
              onClick={handleModalOpen}
            >
              <img
                src={
                  languages.find((lang) => lang.code === locale)?.flagUrl ||
                  languages[0].flagUrl
                }
                alt={selectedLanguage as string}
                style={{ width: 24, height: 24, borderRadius: "50%" }}
              />
            </IconButton>

            <IconButton aria-label="Menü" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: "rgb(252, 252, 252)" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Sitemark />
                  <IconButton
                    aria-label="Menüyü Kapat"
                    onClick={toggleDrawer(false)}
                  >
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 2 }} />
                {menuItems.map((item) => (
                  <Button
                    onClick={() => router.push(`/${locale}/${url(item.title)}`)}
                    variant="text"
                    color="info"
                    size="small"
                  >
                    {t(item.title)}
                  </Button>
                ))}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
