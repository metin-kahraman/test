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


const itemList = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8"]

const cardData = [
  {
    img: 'https://picsum.photos/800/450?random=1',
    tag: 'Engineering',
    title: 'Revolutionizing software development with cutting-edge tools',
    description:
      'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
    authors: [
      { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
    ],
  },
  {
    img: 'https://picsum.photos/800/450?random=2',
    tag: 'Product',
    title: 'Innovative product features that drive success',
    description:
      'Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.',
    authors: [{ name: 'Erica Johns', avatar: '/static/images/avatar/6.jpg' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=3',
    tag: 'Design',
    title: 'Designing for the future: trends and insights',
    description:
      'Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.',
    authors: [{ name: 'Kate Morrison', avatar: '/static/images/avatar/7.jpg' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=4',
    tag: 'Company',
    title: "Our company's journey: milestones and achievements",
    description:
      "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
    authors: [{ name: 'Cindy Baker', avatar: '/static/images/avatar/3.jpg' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=45',
    tag: 'Engineering',
    title: 'Pioneering sustainable engineering solutions',
    description:
      "Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of our eco-friendly initiatives.",
    authors: [
      { name: 'Agnes Walker', avatar: '/static/images/avatar/4.jpg' },
      { name: 'Trevor Henderson', avatar: '/static/images/avatar/5.jpg' },
    ],
  },
  {
    img: 'https://picsum.photos/800/450?random=6',
    tag: 'Product',
    title: 'Maximizing efficiency with our latest product updates',
    description:
      'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
    authors: [{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' }],
  },
];


const DigitalDentistry: FC = () => {
  const t = useTranslations('BlogItems');
  const tt = useTranslations('TreatmentsPage.titles') as (key: keyof TreatmentsPageTranslations['titles']) => string;

  return (
    <Grid container spacing={2} >

      {itemList.map(function (item) {
        return (
          <Grid size={{ xs: 12, md: 4 }}>
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
                {t(`${item}.caption`)}
                </Typography>
                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                  {cardData[0].description}
                </StyledTypography>
              </SyledCardContent>
            </SyledCard>
          </Grid>
        )
      })}


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