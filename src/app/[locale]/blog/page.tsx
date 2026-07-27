import { Container, Grid, Typography } from '@mui/material';
import BlogCard2 from '@/components/BlogCard2';
import { getTranslations } from 'next-intl/server';

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'BlogItems' });

  const blogItems = [
    'item2','item3','item4','item5','item6','item7','item8','item9','item10',
    'item11','item12','item13','item14','item15','item16','item17','item18','item19','item20'
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        {t('recentPosts')}
      </Typography>
      
      <Grid container spacing={4}>
        {blogItems.map((postKey) => {
          const seoUrl = t(`${postKey}.seo.url`);
          const href = `/${locale}/blog/${seoUrl}`;
          return (
            <Grid item xs={12} sm={6} md={4} key={postKey}>
              <BlogCard2
                title={t(`${postKey}.caption`)}
                description={t(`${postKey}.title`)}
                image={t(`${postKey}.imgLink`)}
                slug={t(`${postKey}.imgAlt`)}
                url={href}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

// generateMetadata zaten mevcut, onu da güncelleyelim (getTranslations kullanarak)
import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'BlogItems' });

  return {
    title: t('recentPosts'),
    description: t('blogDescription') || 'En güncel diş sağlığı ve tedavi yazıları burada.',
    keywords: t('blogKeywords') || 'diş blogu, diş sağlığı, implant, ortodonti',
    openGraph: {
      title: t('recentPosts'),
      description: t('blogDescription') || 'Diş tedavileri hakkında bilgi edinin.',
      url: `/${locale}/blog`,
      siteName: 'Dental Clinic',
      locale: locale,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/blog`,
    },
  };
}