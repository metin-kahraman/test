// src/components/BlogCard.tsx
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
//import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';
//import urlMappings from "public/locales/urlMapping";

import Link from 'next/link';
interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  url: string;
}

export default function BlogCard2({ title, description, image, slug ,url }: BlogCardProps) {
    const t = useTranslations('Buttons');
    
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={`${image}`}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Button
          component={Link}
          href={`${url}`}
          variant="contained"
          size="small"
          sx={{backgroundColor:'#f37418'}}
          fullWidth
        >
          {t('readMore')}
        </Button>
      </Box>
    </Card>
  );
}