"use client";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Paper,
} from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import { useTranslations } from "next-intl";
import { TreatmentsPageTranslations } from "@/types";
import { usePathname } from 'next/navigation'; // `locale` için gerekli

const treatments = [
  { img: "https://picsum.photos/800/450?random=1", title: "T1" },
  { img: "https://picsum.photos/800/450?random=2", title: "T2" },
  { img: "https://picsum.photos/800/450?random=3", title: "T3" },
  { img: "https://picsum.photos/800/450?random=4", title: "T4" },
  { img: "https://picsum.photos/800/450?random=5", title: "T5" },
  { img: "https://picsum.photos/800/450?random=6", title: "T6" },
  { img: "https://picsum.photos/800/450?random=7", title: "T7" },
  { img: "https://picsum.photos/800/450?random=8", title: "T8" },
  { img: "https://picsum.photos/800/450?random=9", title: "T9" },
  { img: "https://picsum.photos/800/450?random=10", title: "T10" },
  { img: "https://picsum.photos/800/450?random=11", title: "T11" },
  { img: "https://picsum.photos/800/450?random=11", title: "T12" },
  { img: "https://picsum.photos/800/450?random=11", title: "T13" },
];

const ContentRightSlideMenu: FC = () => {
  const tt = useTranslations("TreatmentsPage.titles") as (
    key: keyof TreatmentsPageTranslations["titles"]
  ) => string;
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Paper sx={{ backgroundColor: "white" }}>
        {/* Logo 
                  <Image 
            src="/img.jpeg" // Logonun dosya yolunu ayarla
            alt="Logo"
            width={24}
            height={24}
          />
          */}

        {/* Başlık */}
        <Typography align="center" sx={{ pt: 2 }} variant="h5" gutterBottom>
          Tedaviler
        </Typography>
        {/* Liste */}

        <List>
          {treatments.map((item, index) => (
            <ListItem>
              <Link
                href={`/${locale}/`+tt(item.title+"Link")} // Her öğenin URL'sini buraya koyun
                passHref
                style={{
                  textDecoration: "none",
                  color: 'inherit', // Varsayılan metin rengini kullanır
                  width: "100%", // Tıklanabilir alanı genişletmek için
                  display: "block",
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontFamily: "oswald",
                    align: "center",
                    fontWeight: "400",
                  }}
                  primary={tt(item.title)}
                />
              </Link>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default ContentRightSlideMenu;
