"use client";
import { Typography, List, ListItem, ListItemIcon, ListItemText, Box, Paper } from '@mui/material';
import Image from 'next/image'; // Logo için Next.js Image component'ini kullanıyoruz
import { FC } from 'react';
import Grid from '@mui/material/Grid2'; // Doğru import 
import SvgIcon from '@mui/material/SvgIcon';

const Blog: FC = () => {
    return (
        <Grid container spacing={2} component="div">
            {/* Sol taraf (9 birim genişlik) */}
            <Grid size={{ xs: 12, md: 9 }}>
                <Paper>

                    <Box p={2}>
                        <Typography variant="h4" gutterBottom>
                            İmplantlar
                        </Typography>
                        <Typography variant="body1">
                            İmplant tedavisi hastaya hafif bir sedasyon verilerek yapılır. İşlemden önce detaylı muayene ve röntgen gereklidir. Çene kemiklerinin ve kalan dişlerin ölçüsü alınır. Dental implantların yerleştirilmesi için iki seçenek vardır. Tek aşamalı işlemde implant yerleştirildikten sonra geçici başlık takılır. İki aşamalı işlemde ise dental implant takıldıktan sonra üzeri diş eti ile kapatılır ve iyileşmeye bırakılır. Protez başlıklar daha sonra takılır. Her iki durumda da geçici bir köprü yerleştirilir ve alt çene için 3 ay, üst çene için altı ay iyileşme süreci beklenir. Bazen dental implantların üzerine yeni yapılan dişler hemen takılabilir. Dental implantla hasta güvenle gülebilir ve yemek yiyebilir.

                            Zirkonyum implantlar, titanyumdan yapılmış implantların direncini artırmak için yapılmış yeni kuşak implantlardır. Özellikle dar çene kemiğinde dayanıklılığı artırmak için kullanılır. Titanyumdan dayanıklılık haricinde farkı yoktur.

                            Zirkonyum aynı zamanda diş kaplamasında da kullanılmaktadır. Zirkonyum doğal dişe yakın beyazlıktadır ve ışığı yansıtır. Bu nedenle dayanıklılık yanında estetik açıdan da kullanışlıdır. Aşınma yapmaz ve ağızda metal tadı bırakmaz. Zamanla renk değişikliğı oluşmaz. Vücuda zararı yoktur.
                        </Typography>
                    </Box>
                </Paper>

            </Grid>

            {/* Sağ taraf (3 birim genişlik) */}
            <Grid size={{ xs: 12, md: 3 }}>

                <Box p={2} display="flex" flexDirection="column" alignItems="center">
                    {/* Logo 
                  <Image 
            src="/img.jpeg" // Logonun dosya yolunu ayarla
            alt="Logo"
            width={24}
            height={24}
          />
          */}

                    {/* Başlık */}
                    <Typography variant="h6" gutterBottom>
                        Tedaviler
                    </Typography>
                    {/* Liste */}


                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <SvgIcon sx={{ height: "auto", width: "auto", mr: 1 }}>

                                    <svg fill="orange" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 490.868 490.868">
                                        <g>
                                            <path d="M483.572,431.224l-74.2-74.2c5.5-13,10.5-26.4,14.9-40.3c44.7-142.5,10.4-278.8-77-310c-38.5-13.5-83.2-4.2-124.8,26
c-41.6-31.2-86.3-40.6-124.8-26c-87.4,31.2-121.7,167.5-77,310c21.8,70.7,58.9,129.5,105.1,166.5c26.8,21.4,47.2-7.2,46.8-23.9
c-1.3-57,27-121.7,51-121.7c23.9,0,52.6,58.8,51,121.7c-1,38.5,42.5,30.3,44.7,23.9c27.6-22.6,52.2-53.1,72.1-89.1l65.2,65.2
c11.7,11.7,25,4.2,27,1C491.872,452.024,491.872,439.524,483.572,431.224z M314.972,433.224c-5.2-77-43.7-135.2-91.5-135.2
c-47.9,0-86.3,58.3-91.6,135.2c-30.2-32.3-56.2-77-71.8-128c-36.4-117.6-12.5-236.2,52-260.1c8.3-3.1,43-17.4,97.8,29.1
c8.3,6.2,19.8,6.2,27,0c33.3-29.1,68.7-39.5,97.8-29.1c64.5,23.9,88.4,142.5,52,260.1c-2.3,7.4-4.7,14.6-7.4,21.7l-6.1-6.1
c-7.3-7.3-11.4-18.7-11.4-31.2v-41.6c0-5.2-2.1-10.4-6.2-14.6l-98.8-100.9c-8.3-8.3-20.8-8.3-29.1,0c-5.2,5.2-7.1,12-5.9,18.4
l-27.4,27.4c-8.3,8.3-8.3,20.8,0,29.1s20.8,8.3,29.1,0l25-25l8.8,8.8l-23.4,23.6c-8.3,8.3-8.3,20.8,0,29.1c11.5,11.5,25,4.2,29.1,0
l23.4-23.4l6.8,6.8l-23.9,23.9c-8.3,8.3-8.3,20.8,0,29.1c11.7,11.7,26,4.2,29.1,0l23.9-23.9v33.3c0,22.9,8.3,43.7,23.9,59.3
l16.2,16.2C348.872,391.324,332.672,414.424,314.972,433.224z"/>
                                        </g>
                                    </svg>


                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText primary="Liste Öğesi 1" />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <SvgIcon sx={{ height: "auto", width: "auto", mr: 1 }}>

                                    <svg fill="orange" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 490.868 490.868">
                                        <g>
                                            <path d="M483.572,431.224l-74.2-74.2c5.5-13,10.5-26.4,14.9-40.3c44.7-142.5,10.4-278.8-77-310c-38.5-13.5-83.2-4.2-124.8,26
c-41.6-31.2-86.3-40.6-124.8-26c-87.4,31.2-121.7,167.5-77,310c21.8,70.7,58.9,129.5,105.1,166.5c26.8,21.4,47.2-7.2,46.8-23.9
c-1.3-57,27-121.7,51-121.7c23.9,0,52.6,58.8,51,121.7c-1,38.5,42.5,30.3,44.7,23.9c27.6-22.6,52.2-53.1,72.1-89.1l65.2,65.2
c11.7,11.7,25,4.2,27,1C491.872,452.024,491.872,439.524,483.572,431.224z M314.972,433.224c-5.2-77-43.7-135.2-91.5-135.2
c-47.9,0-86.3,58.3-91.6,135.2c-30.2-32.3-56.2-77-71.8-128c-36.4-117.6-12.5-236.2,52-260.1c8.3-3.1,43-17.4,97.8,29.1
c8.3,6.2,19.8,6.2,27,0c33.3-29.1,68.7-39.5,97.8-29.1c64.5,23.9,88.4,142.5,52,260.1c-2.3,7.4-4.7,14.6-7.4,21.7l-6.1-6.1
c-7.3-7.3-11.4-18.7-11.4-31.2v-41.6c0-5.2-2.1-10.4-6.2-14.6l-98.8-100.9c-8.3-8.3-20.8-8.3-29.1,0c-5.2,5.2-7.1,12-5.9,18.4
l-27.4,27.4c-8.3,8.3-8.3,20.8,0,29.1s20.8,8.3,29.1,0l25-25l8.8,8.8l-23.4,23.6c-8.3,8.3-8.3,20.8,0,29.1c11.5,11.5,25,4.2,29.1,0
l23.4-23.4l6.8,6.8l-23.9,23.9c-8.3,8.3-8.3,20.8,0,29.1c11.7,11.7,26,4.2,29.1,0l23.9-23.9v33.3c0,22.9,8.3,43.7,23.9,59.3
l16.2,16.2C348.872,391.324,332.672,414.424,314.972,433.224z"/>
                                        </g>
                                    </svg>


                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText primary="Liste Öğesi 2" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <SvgIcon sx={{ height: "auto", width: "auto", mr: 1 }}>

                                    <svg fill="orange" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 490.868 490.868">
                                        <g>
                                            <path d="M483.572,431.224l-74.2-74.2c5.5-13,10.5-26.4,14.9-40.3c44.7-142.5,10.4-278.8-77-310c-38.5-13.5-83.2-4.2-124.8,26
		c-41.6-31.2-86.3-40.6-124.8-26c-87.4,31.2-121.7,167.5-77,310c21.8,70.7,58.9,129.5,105.1,166.5c26.8,21.4,47.2-7.2,46.8-23.9
		c-1.3-57,27-121.7,51-121.7c23.9,0,52.6,58.8,51,121.7c-1,38.5,42.5,30.3,44.7,23.9c27.6-22.6,52.2-53.1,72.1-89.1l65.2,65.2
		c11.7,11.7,25,4.2,27,1C491.872,452.024,491.872,439.524,483.572,431.224z M314.972,433.224c-5.2-77-43.7-135.2-91.5-135.2
		c-47.9,0-86.3,58.3-91.6,135.2c-30.2-32.3-56.2-77-71.8-128c-36.4-117.6-12.5-236.2,52-260.1c8.3-3.1,43-17.4,97.8,29.1
		c8.3,6.2,19.8,6.2,27,0c33.3-29.1,68.7-39.5,97.8-29.1c64.5,23.9,88.4,142.5,52,260.1c-2.3,7.4-4.7,14.6-7.4,21.7l-6.1-6.1
		c-7.3-7.3-11.4-18.7-11.4-31.2v-41.6c0-5.2-2.1-10.4-6.2-14.6l-98.8-100.9c-8.3-8.3-20.8-8.3-29.1,0c-5.2,5.2-7.1,12-5.9,18.4
		l-27.4,27.4c-8.3,8.3-8.3,20.8,0,29.1s20.8,8.3,29.1,0l25-25l8.8,8.8l-23.4,23.6c-8.3,8.3-8.3,20.8,0,29.1c11.5,11.5,25,4.2,29.1,0
		l23.4-23.4l6.8,6.8l-23.9,23.9c-8.3,8.3-8.3,20.8,0,29.1c11.7,11.7,26,4.2,29.1,0l23.9-23.9v33.3c0,22.9,8.3,43.7,23.9,59.3
		l16.2,16.2C348.872,391.324,332.672,414.424,314.972,433.224z"/>
                                        </g>
                                    </svg>


                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText primary="Liste Öğesi 3" />
                        </ListItem>
                    </List>
                </Box>

            </Grid>

        </Grid>
    );
};

export default Blog;
