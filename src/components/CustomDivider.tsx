"use client";
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export default function CustomDivider() {
    const CustomDivider = styled(Box)(({ theme }) => ({
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      width: '100%',
      height: 2,
      backgroundColor: 'orange',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        borderBottom: `2px solid orange`,
      },
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 50,
        height: 50,
        backgroundImage: 'url(https://i.postimg.cc/J4w07Fsz/415029410-908622684217705-5065322948124474079-n.jpg)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '50%',
      },
    }));

    return(
        <CustomDivider />
    )
}
  