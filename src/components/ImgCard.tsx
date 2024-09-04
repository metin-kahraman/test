import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';

interface ImgCardProps {
  imageSrc: string;
  text: string;
  caption: string;
  imageFirst?: boolean; // Resmin solda mı sağda mı olacağını belirleyen opsiyonel prop
}

const ImgCard: React.FC<ImgCardProps> = ({ imageSrc, text, imageFirst = true, caption}) => {
  return (
    <Paper style={{ padding: '16px', margin: '16px' }}>
      <Grid container spacing={2}>
        {imageFirst ? (
          <>
            <Grid item xs={12} md={6}>
              <img src={imageSrc} alt="ImgCard" style={{ width: '100%', borderRadius: '8px' }} />
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography variant="h3" align='center' sx={{p:2}}>{caption}</Typography>
              <Typography variant="body1" align='center'>{text}</Typography>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} md={6}>
            <Typography variant="h3" align='center' sx={{p:2}}>{caption}</Typography>
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
