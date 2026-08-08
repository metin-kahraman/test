"use client";
import { Typography, List, ListItem, ListItemIcon, ListItemText, Box, Paper } from '@mui/material';
import Image from 'next/image'; // Logo için Next.js Image component'ini kullanıyoruz
import { FC } from 'react';
import Grid from '@mui/material/Grid2'; // Doğru import 
import SvgIcon from '@mui/material/SvgIcon';
import { useTranslations } from 'next-intl';
import { TreatmentsPageTranslations } from '@/types';
import Divider from '@mui/material/Divider';
import ContentRightSlideMenu from '@/components/contentRightSlideMenu';


const typofImplants = ['content', 'content2', 'content3', 'content4'];

const DigitalDentistry: FC = () => {
    const t = useTranslations('3dDentistry');

    return (
        <Grid container spacing={2} component="div">
            <Grid size={{ xs: 12, md: 9 }}>
                <Paper sx={{ backgroundColor: "white" }}>

                    <Box p={2}>

                    <Typography sx={{ textAlign: 'center', alignSelf: 'center', pt: 2 }} gutterBottom variant="h4">
                        {t('title')}
                        </Typography>
                        
                    <Typography sx={{ textAlign: 'center', alignSelf: 'center', pt: 2 }} gutterBottom variant="h5">
                            {t('title2')}
                        </Typography>

<Box
  sx={{
    display: "flex",
    justifyContent: "center",
  }}
>
 
 
                    <img width='80%'  height={'auto'} src='/images/digital-dentistry.jpg'></img>
</Box>
                  
                        {typofImplants.map((item) => (
                            <>
                                <Typography sx={{ pl: 2 }} gutterBottom >
                                    {t(`${item}`)}
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

        </Grid>

    );
};

export default DigitalDentistry;
