"use client";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Paper,
} from "@mui/material";
import Image from "next/image"; // Logo için Next.js Image component'ini kullanıyoruz
import { FC } from "react";
import Grid from "@mui/material/Grid2"; // Doğru import
import { useTranslations } from "next-intl";
import { Merienda } from 'next/font/google';
 import ProfileCard from "@/components/ProfilCard";
import { usePathname, useRouter, useParams } from "next/navigation";

import { MenuItemTranslations } from "@/types/menu";
const handlee = Merienda({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

const AboutUs: FC = () => {
  const t = useTranslations("aboutUs");
  //const tt = useTranslations('TreatmentsPage.titles') as (key: keyof TreatmentsPageTranslations['titles']) => string;
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const { locale } = params;


  return (
<Grid
  container
  spacing={2}
  sx={{
    padding: { xs: 2, sm: 3, md: "7%" }, // mobilde 7% çok fazla
  }}
>
  {/* === Sol blok: 3 satır yazı === */}
  <Grid
    size={{ xs: 12, md: 6 }}
    sx={{
      mt: { xs: 2, md: 5 },
      //backgroundColor: "#f5f5f5",
      //borderRadius: 2,
      //boxShadow: 3,
      px: { xs: 2, md: 3 },
      py: { xs: 2, md: 3 },
      overflow: "hidden", // negatif margin yerine iç padding
    }}
  >
<Box
  sx={{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    //backgroundColor: "#f5f5f5",
    py: { xs: 3, md: 4 },
  }}
>
  {/* 1. SATIR — SOLA YAPIŞIK */}
  <Box sx={{ alignSelf: "flex-start", pl: { xs: 2, md: 3 } }}>
    <Typography
      sx={{
        p: 0,                      // ✅ 20px padding sıfırlandı
        //pt:'0%',                  // ✅ 7% +
        textIndent: 0,             // ✅ 2em girinti sıfırlandı
        fontFamily: handlee.style.fontFamily,
        fontSize: { xs: 26, sm: 36, md: 46 },
        fontWeight: "bold",
        fontStyle: "italic",
        lineHeight: 1.15,
        whiteSpace: "nowrap",
                textShadow:"6px 6px 10px rgba(0,0,0,0.3)",

      }}
    >
      {t("slogan1")}
    </Typography>
  </Box>

  {/* 2. SATIR — ORTADA */}
  <Box sx={{ alignSelf: "center", my: { xs: 1, md: 1.5 } }}>
    <Typography
      sx={{
        p: 0,                      // ✅ 20px padding sıfırlandı
        pt:{ xs: 2, md: 7 },                  // ✅ 7% +
        textIndent: 0,             // ✅ 2em girinti sıfırlandı
        fontFamily: handlee.style.fontFamily,
        fontSize: { xs: 26, sm: 36, md: 46 },
        fontWeight: "bold",
        fontStyle: "italic",
        lineHeight: 1.15,
        whiteSpace: "nowrap",
                textShadow:"6px 6px 10px rgba(0,0,0,0.3)",

      }}
    >
      {t("slogan2")}  
    </Typography>
  </Box>

  {/* 3. SATIR — SAĞA YAPIŞIK */}
  <Box sx={{ alignSelf: "flex-end", pr: { xs: 2, md: 3 } }}>
    <Typography
      sx={{
        p: 0,
        pt:{ xs: 2, md: 7 },
        textIndent: 0,
        fontFamily: handlee.style.fontFamily,
        fontSize: { xs: 26, sm: 36, md: 46 },
        fontWeight: "bold",
        fontStyle: "italic",
        lineHeight: 1.15,
        whiteSpace: "nowrap",
                textShadow:"6px 6px 10px rgba(0,0,0,0.3)",

      }}
    >
      {t("slogan3")}
    </Typography>
  </Box>
</Box>
  </Grid>

  {/* === Sağ blok: görsel === */}
  <Grid size={{ xs: 12, md: 6 }} sx={{ mt: { xs: 2, md: 5 } }}>
    <Box
      component="img"
      src="/images/aboutUs/desk3.jpeg"
      srcSet="/images/aboutUs/desk3.jpeg"
      alt="Orange Dent Klinik"
      loading="lazy"
      sx={{
        width: "100%",
        maxHeight: { xs: 300, md: 600 },
        objectFit: "cover",
        borderRadius: 2,
        display: "block",
      }}
    />
  </Grid>

  {/* === Başlık === */}
  <Grid size={12}>
    <Typography
      sx={{
        fontSize: { xs: 24, sm: 32, md: 40 },
        textAlign: "center", // flex gereksiz
        mt: 3,
        px: { xs: 1, md: 5 },
      }}
    >
      {t("title")}
    </Typography>
  </Grid>

  {/* === Metin blokları — hepsi tek Grid item içinde === */}
  <Grid size={12}>
    <Typography
      variant="body1"
      sx={{ fontSize: { xs: 16, md: 20 }, textAlign: "justify"}}
    >
      {t("content")}
    </Typography>


  </Grid>
</Grid>
  );
};

export default AboutUs;
/*


      <Typography variant="body1" sx={{ fontSize: 20, textAlign: "justify", mt: 2 }}>
        {t("content")}
      </Typography>
      


      <Grid size={{ xs: 12, md: 6 }}>
        <SyledCard
          variant="outlined"
          tabIndex={0}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            image={cardData[0].img}
            aspect-ratio="16 / 9"
            sx={{
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          />
          <SyledCardContent>

            <Typography gutterBottom variant="h6" component="div">
              {cardData[0].title}
            </Typography>
            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
              {cardData[0].description}
            </StyledTypography>
          </SyledCardContent>
        </SyledCard>
      </Grid>

      */
