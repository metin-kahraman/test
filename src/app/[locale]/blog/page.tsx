// src/app/[locale]/blog/page.tsx
import { useTranslations } from 'next-intl';
import { Container, Grid, Typography } from '@mui/material';
import BlogCard2 from '@/components/BlogCard2';
export default function BlogPage() {
  const t = useTranslations('BlogItems');

  const blogItems = ['item2','item3','item4','item5','item6','item7','item8','item9','item10','item11']

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        {t('recentPosts')}
      </Typography>
      
      <Grid container spacing={4}>
        {blogItems.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BlogCard2
              title={t(`${post}.caption`)}
              description={t(`${post}.title`)}
              image={t(`${post}.imgLink`)}
              slug={t(`${post}.imgAlt`)}
              url={t(`${post}.seo.url`)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}