"use client";
import { Typography, Card, CardContent, CardMedia, List, ListItem, ListItemIcon, ListItemText, Box, Paper } from '@mui/material';
import Image from 'next/image'; // Logo için Next.js Image component'ini kullanıyoruz
import { FC } from 'react';
import Grid from '@mui/material/Grid2'; // Doğru import 
import SvgIcon from '@mui/material/SvgIcon';
import { useTranslations } from 'next-intl';
import { TreatmentsPageTranslations } from '@/types';
import Divider from '@mui/material/Divider';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import ContentRightSlideMenu from '@/components/contentRightSlideMenu';
import { styled } from '@mui/material/styles';
import { usePathname, useRouter, useParams } from "next/navigation";

import { MenuItemTranslations } from "@/types/menu";

const treatments = [
  { img: 'https://picsum.photos/800/450?random=1', title: 'T1' },
  { img: 'https://picsum.photos/800/450?random=2', title: 'T2' },
  { img: 'https://picsum.photos/800/450?random=3', title: 'T3' },
  { img: 'https://picsum.photos/800/450?random=4', title: 'T4' },
  { img: 'https://picsum.photos/800/450?random=5', title: 'T5' },
  { img: 'https://picsum.photos/800/450?random=6', title: 'T6' },
  { img: 'https://picsum.photos/800/450?random=7', title: 'T7' },
  { img: 'https://picsum.photos/800/450?random=8', title: 'T8' },
  { img: 'https://picsum.photos/800/450?random=9', title: 'T9' },
  { img: 'https://picsum.photos/800/450?random=10', title: 'T10' },
  { img: 'https://picsum.photos/800/450?random=11', title: 'T11' },
];

const typofImplants = ['item1', 'item2', 'item3', 'item4'];

const SyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const SyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});




const DigitalDentistry: FC = () => {
  const t = useTranslations('BlogItems');
  const tt = useTranslations('TreatmentsPage.titles') as (key: keyof TreatmentsPageTranslations['titles']) => string;
 const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const { locale } = params;

  return (
    <Grid container spacing={2} >

          <Grid size={{ xs: 12, md: 12 }}>
            <Typography variant='h5' align='center'> Alan 1</Typography>
          <img
        style={{
          borderRadius: 8,
          width: "80%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        srcSet={`/images/treatmentsPage/implant.jpg`}
        src={`/images/treatmentsPage/implant.jpg`}
        loading="lazy"
      />
          </Grid>

          <Grid size={{ xs: 12, md: 12 }}>
            <Typography variant='h5' align='center'> Alan 2</Typography>
          <img
        style={{
          borderRadius: 8,
          width: "80%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        srcSet={`/images/treatmentsPage/implant.jpg`}
        src={`/images/treatmentsPage/implant.jpg`}
        loading="lazy"
      />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant='h5' align='center'> Alan 3</Typography>
          <img
        style={{
          borderRadius: 8,
          width: "80%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        srcSet={`/images/treatmentsPage/implant.jpg`}
        src={`/images/treatmentsPage/implant.jpg`}
        loading="lazy"
      />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
          <img
        style={{
          borderRadius: 8,
          width: "80%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        srcSet={`/images/treatmentsPage/implant.jpg`}
        src={`/images/treatmentsPage/implant.jpg`}
        loading="lazy"
      />
                  <Typography variant='h5' align='center'> Alan 4</Typography>

          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant='h5' align='center'> Alan 5</Typography>
          <img
        style={{
          borderRadius: 8,
          width: "80%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        srcSet={`/images/treatmentsPage/implant.jpg`}
        src={`/images/treatmentsPage/implant.jpg`}
        loading="lazy"
      />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
          <img
        style={{
          borderRadius: 8,
          width: "80%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        srcSet={`/images/treatmentsPage/implant.jpg`}
        src={`/images/treatmentsPage/implant.jpg`}
        loading="lazy"
      />
                  <Typography variant='h5' align='center'> Alan 6</Typography>

          </Grid>


    </Grid>

  );
};

export default DigitalDentistry;
/*


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