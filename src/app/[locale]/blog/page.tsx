// src/app/[locale]/blog/page.tsx
import { useTranslations } from 'next-intl';
import { Container, Grid, Typography } from '@mui/material';
import BlogCard2 from '@/components/BlogCard2';
export default function BlogPage() {
  const t = useTranslations('Blog');

  const blogPosts = [
    {
      title: t('AyrıkDiş.title'),
      description: t('AyrıkDiş.content1').substring(0, 100) + '...',
      image: 'single-implant1.png',
      slug: 'ayrık-diş-tedavisi'
    },
    {
      title: t('DisEtiKanama.title'),
      description: t('DisEtiKanama.content1').substring(0, 100) + '...',
      image: 'single-implant2.png',
      slug: 'dis-eti-kanamaları'
    },
    // Diğer blog yazıları...
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        {t('recentPosts')}
      </Typography>
      
      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BlogCard2
              title={post.title}
              description={post.description}
              image={post.image}
              slug={post.slug}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}