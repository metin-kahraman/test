"use client";
import { Typography, List, ListItem, ListItemIcon, ListItemText, Box, Paper } from '@mui/material';
import Image from 'next/image'; // Logo için Next.js Image component'ini kullanıyoruz
import { FC } from 'react';
import Grid from '@mui/material/Grid2'; // Doğru import 
import SvgIcon from '@mui/material/SvgIcon';
import { useTranslations } from 'next-intl';
import { TreatmentsPageTranslations } from '@/types';
import Divider from '@mui/material/Divider';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import ContentRightSlideMenu from '@/components/contentRightSlideMenu';
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

const DigitalDentistry: FC = () => {
    const t = useTranslations('3dDentistry');
    const tt = useTranslations('TreatmentsPage.titles') as (key: keyof TreatmentsPageTranslations['titles']) => string;

    return (
        <Grid container spacing={2} component="div">
            <Grid size={{ xs: 12, md: 9 }}>
                <Paper sx={{ backgroundColor: "white" }}>

                    <Box p={2}>

                    <img width='100%' height={'auto'} src='/3Dscanners.webp'></img>
                    <Typography sx={{ textAlign: 'center', alignSelf: 'center', pt: 2 }} gutterBottom variant="h4">
                        {t('whatis3dDentistry')}
                        </Typography>
                        {t('MainContent')}

                        <img width='100%' height={'auto'} src='/dijital-dis-hekimligi-1.jpg'></img>

                        <Typography sx={{ pt: 2 }} align="center" gutterBottom variant="h5">
                            {t('whatisapplyof3dDentistry')}
                        </Typography>

                        {typofImplants.map((item) => (
                            <>
                                <Typography sx={{ pl: 2 }} gutterBottom variant="h6" component={"li"}>
                                    {t(`3dDentistrySteps.${item}`)}
                                </Typography>
                                <Typography sx={{ pl: 2 }} gutterBottom >
                                    {t(`3dDentistrySteps.${item + 'Content'}`)}
                                </Typography>
                            </>

                        ))}


                    </Box>

                </Paper>

            </Grid>

            {/* Sağ taraf (3 birim genişlik) */}
            <Grid size={{ xs: 12, md: 3 }}>
                <ContentRightSlideMenu />

            </Grid>
            <FrequentlyAskedQuestions />

        </Grid>

    );
};

export default DigitalDentistry;
