"use client";
import React, { useState, useEffect } from "react";
import { Fab, IconButton, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";

export default function FloatingActionButtons() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank"); // WhatsApp numaranızı buraya ekleyin
  };

  const handlePhoneCallClick = () => {
    window.location.href = "tel:+1234567890"; // Telefon numaranızı buraya ekleyin
  };

  const toggleButtons = () => {
    setOpen((prev) => !prev);
  };

  // Sayfa kaydırma pozisyonunu izleme
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
        pr:'2.2%'
      }}
    >
      <Zoom in={visible && open}>
        <Fab
          color="primary"
          size="small"
          onClick={handleWhatsAppClick}
          sx={{ mb: 1 }}
        >
          <WhatsAppIcon />
        </Fab>
      </Zoom>

      <Zoom in={visible && open}>
        <Fab
          color="primary"
          size="small"
          onClick={handlePhoneCallClick}
          sx={{ mb: 1 }}
        >
          <PhoneIcon />
        </Fab>
      </Zoom>

      <Zoom in={visible && open}>
        <Fab color="primary" size="small" onClick={handleScrollToTop} sx={{ mb: 1 }}>
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>

      <Zoom in={visible}>
        <Fab sx={{backgroundColor: "#ffa000",
                  '&:hover': {
                    backgroundColor: '#ff8f00',
                  },}} onClick={toggleButtons}>
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Box>
  );
}


/**
 *     <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5
      }}
    >
      <Zoom in={visible && open}>
        <Fab
          color="primary"
          size="small"
          onClick={handleWhatsAppClick}
          sx={{ mb: 1 }}
        >
          <WhatsAppIcon />
        </Fab>
      </Zoom>

      <Zoom in={visible && open}>
        <Fab
          color="primary"
          size="small"
          onClick={handlePhoneCallClick}
          sx={{ mb: 1 }}
        >
          <PhoneIcon />
        </Fab>
      </Zoom>

      <Zoom in={visible && open}>
        <Fab color="primary" size="small" onClick={handleScrollToTop} sx={{ mb: 1 }}>
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>

      <Zoom in={visible}>
        <Fab color="secondary" onClick={toggleButtons}>
          <AddIcon />
        </Fab>
      </Zoom>
    </Box>

 */