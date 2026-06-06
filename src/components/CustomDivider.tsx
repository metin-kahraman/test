"use client";
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

interface CustomDividerProps {
  text: string;
}

export default function CustomDivider({ text }: CustomDividerProps) {
  const DividerContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: 50,
    height: 50,
    backgroundImage: 'url("/img.jpeg")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }));

  // Sayfayı kaplayan ve içeriği ortalar
  const CenteredWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //minHeight: '100vh', // tüm viewport yüksekliğini kaplar, dikey ortalama için
    width: '100%',
  });

  return (
    <CenteredWrapper>
      <DividerContainer>

      </DividerContainer>

    </CenteredWrapper>
  );
}