"use client";
import { Typography, List, ListItem, ListItemIcon, ListItemText, Box, Paper } from '@mui/material';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { TreatmentsPageTranslations } from '@/types';

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


const ContentRightSlideMenu: FC = () => {
    const tt = useTranslations('TreatmentsPage.titles') as (key: keyof TreatmentsPageTranslations['titles']) => string;

    return (

        <Box display="flex" flexDirection="column" alignItems="center" >
            <Paper sx={{ backgroundColor: "white" }}>

                {/* Logo 
                  <Image 
            src="/img.jpeg" // Logonun dosya yolunu ayarla
            alt="Logo"
            width={24}
            height={24}
          />
          */}

                {/* Başlık */}
                <Typography align="center" sx={{ pt: 2 }} variant="h5" gutterBottom>
                    Tedaviler
                </Typography>
                {/* Liste */}


                <List>
                    {treatments.map((item, index) => (
                        <ListItem>

                            <ListItemText primaryTypographyProps={{ fontFamily: 'oswald', align: 'center', fontWeight: '400' }} primary={tt(item.title)} />

                        </ListItem>


                    ))}

                </List>
            </Paper>

        </Box>



    );
};

export default ContentRightSlideMenu;
