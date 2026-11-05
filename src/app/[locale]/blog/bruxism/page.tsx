import { useTranslations } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import {
  Container, Typography, Box, Paper, Divider, Grid, Card, CardContent,
  List, ListItem, ListItemText, Grid2,
} from '@mui/material';
import Image from 'next/image';
import ContentRightSlideMenu from '@/components/contentRightSlideMenu';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import JsonLd from '@/components/JsonLd';
import { buildHreflang, getCanonicalUrl, baseUrl } from '@/lib/seo';
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  type FaqItem,
} from '@/lib/schema';

interface Treatment {
  title: string;
  content: string;
}

/* ---------- SEO ---------- */
const CANONICAL_PATH = 'blog/bruxism';
const PUBLISHED_DATE = '2024-01-01';   // TODO: gerçek yayın tarihi

type PageProps = { params: { locale: string } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = params;

  const canonicalUrl = getCanonicalUrl(locale, CANONICAL_PATH);
  const localizedLast = decodeURIComponent(canonicalUrl.split('/').pop() || '');
  const languages = buildHreflang(CANONICAL_PATH);

  let seo: { title?: string; description?: string; keywords?: string } | undefined;

  try {
    const messages = await getMessages({ locale });
    const items = (messages.BlogItems ?? {}) as Record<
      string,
      { seo?: { title: string; description: string; keywords?: string; url: string } }
    >;

    seo = Object.values(items)
      .map((i) => i?.seo)
      .find(
        (s) =>
          s?.url &&
          (s.url === localizedLast || s.url.split('/').pop() === localizedLast)
      );
  } catch {
    // fallback
  }

  return {
    title: seo?.title ?? 'Bruksizm - Orange Dent Clinic',
    description: seo?.description ?? '',
    keywords: seo?.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: seo?.title,
      description: seo?.description,
      url: canonicalUrl,
      type: 'article',
    },
    robots: { index: true, follow: true },
  };
}

/* ---------- Sayfa ---------- */
export default function BruxismPage({ params }: PageProps) {
  const { locale } = params;
  const t = useTranslations('Blog.bruxism');

  const symptoms = t.raw('symptoms') as string[];
  const treatments = t.raw('treatments') as Treatment[];

  const questionList: string[] = ['item1', 'item2', 'item3'];

  /* ---------- FAQ items (JSON-LD) ---------- */
  const faqRaw = t.raw('FREQUENTLYASKEDQUESTIONS') as
    | Record<string, Record<string, string | undefined>>
    | undefined;

  const faqItems: FaqItem[] = questionList
    .map((key): FaqItem | null => {
      const item = faqRaw?.[key];
      if (!item?.title) return null;

      const answer = Object.keys(item)
        .filter((k) => k.startsWith('value'))
        .sort((a, b) => {
          const numA = a === 'value' ? 1 : parseInt(a.replace('value', ''), 10);
          const numB = b === 'value' ? 1 : parseInt(b.replace('value', ''), 10);
          return numA - numB;
        })
        .map((k) => item[k])
        .filter(Boolean)
        .join(' ');

      return answer ? { question: item.title, answer } : null;
    })
    .filter((x): x is FaqItem => x !== null);

  /* ---------- JSON-LD verileri ---------- */
  const articleTitle = t('title');
  const articleIntro = t('intro');
  const canonicalUrl = getCanonicalUrl(locale, CANONICAL_PATH);
  const homeUrl = locale === 'en' ? baseUrl : `${baseUrl}/${locale}`;
  const blogUrl = locale === 'en' ? `${baseUrl}/blog` : `${baseUrl}/${locale}/blog`;

  const articleSchema = buildArticleSchema({
    locale,
    headline: articleTitle,
    description: articleIntro,
    image: '/images/bruxism-1.jpeg',
    datePublished: PUBLISHED_DATE,
    canonicalPath: CANONICAL_PATH,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Ana Sayfa', url: homeUrl },
    { name: 'Blog', url: blogUrl },
    { name: articleTitle, url: canonicalUrl },
  ]);

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqItems.length > 0 && <JsonLd data={buildFaqSchema(faqItems)} />}

      <Box sx={{ display: 'flex', backgroundColor: 'background.paper', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        {/* Sol taraf – ana içerik */}
        <Box sx={{ flex: { xs: '1 1 auto', md: '0 0 75%' }, mt: 4, width: '100%' }}>
          <Paper elevation={3} sx={{ pl: '10%', mb: 4, borderRadius: 3 }}>
            {/* Başlık ve Giriş */}
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
              {t('title')}
            </Typography>

            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              {t('intro')}
            </Typography>

            {/* Ana Görsel */}
            <Box sx={{ my: 4, position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
              <Image
                src="/images/bruxism-1.jpeg"
                alt={articleTitle}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>

            {/* Doktor Bilgisi */}
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
              {t('doctorTitle')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              {t('doctorContent')}
            </Typography>

            {/* Çocuk Tedavisi */}
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
              {t('childrenTitle')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              {t('childrenContent')}
            </Typography>

            <Divider sx={{ my: 4 }} />

            {/* Belirtiler */}
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              {t('symptomsTitle')}
            </Typography>

            <Grid container spacing={2} sx={{ mb: 4 }}>
              {symptoms.map((symptom, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper elevation={1} sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: 8, height: 8, bgcolor: '#D3A572', borderRadius: '50%', mr: 2 }} />
                    <Typography variant="body1">{symptom}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            {/* Tedavi Yöntemleri */}
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              {t('treatmentsTitle')}
            </Typography>

            <Grid container spacing={4} sx={{ mb: 4 }}>
              {treatments.map((treatment, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card sx={{ height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#D3A572' }}>
                        {treatment.title}
                      </Typography>
                      <Typography variant="body1">
                        {treatment.content}
                      </Typography>
                    </CardContent>
                    {index === 0 && (
                      <Box sx={{ p: 2 }}>
                        <Box sx={{ position: 'relative', height: '200px', borderRadius: '4px', overflow: 'hidden' }}>
                          <Image
                            src="/images/bruxism-2.png"
                            alt={treatment.title}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </Box>
                      </Box>
                    )}
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* SSS — FAQ schema ile eşleşmesi için görünür olmalı */}
            {faqItems.length > 0 && (
              <Grid container spacing={4} sx={{ mb: 4 }}>
                <FrequentlyAskedQuestions
                  translateKey="Blog.bruxism.FREQUENTLYASKEDQUESTIONS"
                  questionList={questionList}
                  startWith="•⁠"
                  totalQuestionsValue={questionList.length}
                />
              </Grid>
            )}
          </Paper>
        </Box>

        {/* Sağ taraf – sticky menu */}
        <Box sx={{
          flex: { xs: '1 1 auto', md: '0 0 25%' },
          width: '100%',
          position: { xs: 'static', md: 'sticky' },
          top: 80,
          alignSelf: 'flex-start',
          height: { xs: 'auto', md: '100vh' },
          overflow: 'auto',
        }}>
          <ContentRightSlideMenu />
        </Box>
      </Box>
    </>
  );
}