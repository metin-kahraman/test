"use client";
import {
  Typography,
  List,
  ListItem,
  Box,
} from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import { useTranslations } from "next-intl";
import { TreatmentsPageTranslations } from "@/types";
import { usePathname } from 'next/navigation';
import { Nunito } from 'next/font/google';
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
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

  // Metni istenen formata dönüştüren yardımcı fonksiyon
  const formatMenuItemText = (text: string) => {
    if (!text) return null;
    const upperText = text.toUpperCase();
    const chars = upperText.split('');
    if (chars.length === 0) return null;
    const firstChar = chars[0];
    const restChars = chars.slice(1).join('');
    return (
      <>
        <span style={{ fontSize: '100%', display: 'inline' }}>{firstChar}</span>
        <span style={{ fontSize: '70%', display: 'inline' }}>{restChars}</span>
      </>
    );
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" sx={{mt: 4}}>
      <Typography
        align="center"
        sx={{ fontWeight: 'bold', pt: 2 }}
        color="#388E3C"
        variant="h5"
        gutterBottom
      >
        Tedaviler
      </Typography>

      <List sx={{ width: '100%', mr:5 }}>
        {treatments.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              transition: 'all 0.2s ease',
              borderRadius: 1,
              mb: 0.5,
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.04)',
                transform: 'translateX(4px)',
              },
            }}
          >
            <Link
              href={`/${locale}/` + tt(item.title + "Link")}
              passHref
              style={{
                textDecoration: "none",
                color: 'inherit',
                width: "100%",
                display: "block",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: nunito.style.fontFamily,
                  textAlign: "center",
                  fontWeight: 800,
                  color: "#ed6c02",
                  letterSpacing: '0.05em',
                  transition: 'color 0.2s',
                  p:0,
                  '&:hover': {
                    color: '#388E3C',
                  },
                }}
              >
                {formatMenuItemText(tt(item.title))}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ContentRightSlideMenu;