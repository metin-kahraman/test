"use client";
import React from "react";
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
  Button,
} from "@mui/material";
import Image from "next/image"; // Logo için Next.js Image component'ini kullanıyoruz
import { FC } from "react";
import Grid from "@mui/material/Grid2"; // Doğru import
import SvgIcon from "@mui/material/SvgIcon";
import { useTranslations } from "next-intl";
import { TreatmentsPageTranslations } from "@/types";
import Divider from "@mui/material/Divider";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import ContentRightSlideMenu from "@/components/contentRightSlideMenu";
import { styled } from "@mui/material/styles";
import CustomBeforeAfterSlider from "@/components/BeforeAfter";
import CustomDivider from '@/components/CustomDivider';
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
];

const typofImplants = ["item1", "item2", "item3", "item4"];

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const SyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const itemList = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
];

const itemListImplant = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
];

export default function Page(): React.JSX.Element {
  const t = useTranslations("BlogItems");
  const tt = useTranslations("TreatmentsPage.titles") as (
    key: keyof TreatmentsPageTranslations["titles"]
  ) => string;
  const [implantLimit, setImplantLimit] = React.useState(3);


  function showMore(type: number) {

    switch (type) {
      case 0:
        if (itemListImplant.length > (implantLimit + 3)) {
          setImplantLimit(implantLimit + 3)
        } else {
          setImplantLimit(itemListImplant.length)
        }
        break;

      default:
        console.log(`Sorry, we are out of ${type}.`);

    }
  }

  function showLess(type: number) {

    switch (type) {
      case 0:
        setImplantLimit(3)
        break;

      default:
        console.log(`Sorry, we are out of ${type}.`);

    }
  }



  return (
    <Grid container alignItems={'center'} spacing={3} sx={{ mr: 1, ml: 1, mb: 1, mt: 4 }}>
      <Grid size={{ xs: 12, md: 12 }}>
        <Typography
          variant="h5"
          align="center"
          sx={{
            color: "#388E3C",
            fontWeight: "bold",
            fontFamily: "oswald",
            letterSpacing: "0.5px",
          }}
        >
          Implant
        </Typography>
        <CustomDivider></CustomDivider>
      </Grid>

      {itemListImplant.slice(0, implantLimit).map(function (item) {
        return (
          <Grid size={{ xs: 12, md: 4 }}>
            <CustomBeforeAfterSlider
              beforeImage="/images/ba12.jpeg"
              afterImage="/images/ba11.jpeg"
              handleImage="/img.jpeg"
            />
          </Grid>
        );
      })}

      <Grid size={{ xs: 12, md: 12 }}>

        <Typography align='center'>
          {implantLimit == itemListImplant.length ? <Button sx={{ fontFamily: "oswald", letterSpacing: "0.1px", backgroundColor: '#ed6c02' }} size='large' variant='contained' onClick={() => showLess(0)}>Show less </Button>
            : <Button sx={{ fontFamily: "oswald", letterSpacing: "0.1px", backgroundColor: '#ed6c02' }} size='large' variant='contained' onClick={() => showMore(0)}>Show more </Button>

          }

        </Typography>

      </Grid>


      <Grid size={{ xs: 12, md: 12 }}>
        <Typography
          variant="h5"
          align="center"
          sx={{
            color: "#388E3C",
            fontWeight: "bold",
            fontFamily: "oswald",
            letterSpacing: "0.5px",
          }}
        >
          Diş Taşı Temizliği
        </Typography>
        <CustomDivider></CustomDivider>

      </Grid>

      {itemList.map(function (item) {
        return (
          <Grid size={{ xs: 12, md: 4 }}>
            <CustomBeforeAfterSlider
              beforeImage="/images/ba12.jpeg"
              afterImage="/images/ba11.jpeg"
              handleImage="/img.jpeg"
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
