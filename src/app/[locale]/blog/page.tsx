import { Container, Grid, Typography } from '@mui/material';
import BlogCard2 from '@/components/BlogCard2';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import {
  baseUrl,
  buildHreflang,
  getCanonicalUrl,
  getLocalizedPath,
  getOpenGraphLocale,
} from '@/lib/seo';

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'BlogItems' });
  const englishT = await getTranslations({ locale: 'en', namespace: 'BlogItems' });

  const blogItems = [
    'item2','item3','item4','item5','item6','item7','item8','item9','item10',
    'item11','item12','item13','item14','item15','item16','item17','item18','item19','item20'
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      
      
      <Grid container spacing={4}>
        {blogItems.map((postKey) => {
          const englishSeoUrl = englishT(`${postKey}.seo.url`).replace(/^\/+/, '');
          const href = `/${locale}/${getLocalizedPath(locale, `blog/${englishSeoUrl}`)}`;
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

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'BlogItems.seo' });
  const title = t('title');
  const description = t('description');
  const canonicalUrl = getCanonicalUrl(locale, 'blog');

  return {
    title,
    description,
    keywords: t('keywords'),
    alternates: {
      canonical: canonicalUrl,
      languages: buildHreflang('blog'),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Orange Dent Clinic',
      locale: getOpenGraphLocale(locale),
      type: 'website',
      images: [{
        url: `${baseUrl}/og-clinic.jpg`,
        width: 1200,
        height: 630,
        alt: title,
      }],
    },
  };
}