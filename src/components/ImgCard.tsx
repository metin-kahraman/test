import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import theme from '@/app/theme';

interface ImgCardProps {
  imageSrc: string;
  text: string;
  caption: string;
  imageFirst?: boolean; // Resmin solda mı sağda mı olacağını belirleyen opsiyonel prop
}

const ImgCard: React.FC<ImgCardProps> = ({ imageSrc, text, imageFirst = true, caption}) => {
  return (
    <Paper style={{ padding: '16px', margin: '16px', backgroundColor:"transparent"}}>
      <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
      <Typography variant="h4" align='center' sx={{p:2}}>{caption}</Typography>

      </Grid>

        {imageFirst ? (
          <>
            <Grid item xs={12} md={6}>
              <img src={imageSrc} alt="ImgCard" style={{ width: '100%',paddingRight:'5%',paddingLeft:'5%', borderRadius: '8px' }} />
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography variant="h4" align='center' sx={{p:2}}>{caption}</Typography>
              <Typography variant="body1" align='center'>{text}</Typography>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} md={6}>
            <Typography variant="h4" align='center' sx={{p:2}}>{caption}</Typography>
            <Typography variant="body1" align='center'>{text}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={imageSrc} alt="ImgCard" style={{ width: '100%', borderRadius: '8px' }} />
            </Grid>
          </>
        )}
      </Grid>
    </Paper>
  );
};

export default ImgCard;
