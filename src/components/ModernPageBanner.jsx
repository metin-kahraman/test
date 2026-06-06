import React from 'react';
import { Box, Typography } from '@mui/material';

const ModernPageBanner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '180px', sm: '240px' }, // Mobil ve masaüstü yüksekliği
        color: '#ffffff',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: { xs: '0 20px', sm: '0 45px' },
        boxSizing: 'border-box',
        // Arka plandaki ana turuncu degrade katmanı
        background: 'linear-gradient(135deg, #e65c00 0%, #f9d423 100%)',
        boxShadow: '0 10px 30px rgba(230, 92, 0, 0.25)',
      }}
    >
      {/* Görseldeki Birebir Paper-Cut Katmanları, Diş Silüeti ve Yaprak Detayları (Inline SVG)
        Tüm gölgeler (drop-shadow) ve derinlikler burada vektörel olarak işlenmiştir.
      */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
          '& svg': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          },
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Yoğun kağıt kesme derinliği veren gölge efekti */}
            <filter id="paper-shadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="-2" dy="4" stdDeviation="5" flood-color="#5c2000" flood-opacity="0.45" />
            </filter>
            {/* Diş etrafındaki iç oyuntu gölgesi */}
            <filter id="inner-shadow">
              <feComponentTransfer in="SourceAlpha">
                <feFuncA type="linear" slope="1"/>
              </feComponentTransfer>
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feOffset dx="1" dy="3"/>
              <feComposite operator="out" in2="SourceGraphic"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0"/>
              <feBlend mode="multiply" in2="SourceGraphic"/>
            </filter>
          </defs>

          {/* Katman 1: En Arka Dalga ve Doku */}
          <path d="M0,0 L800,0 L800,240 L0,240 Z" fill="#d35400" />
          <path d="M0,40 Q200,120 400,30 T800,70 L800,0 L0,0 Z" fill="#b33600" opacity="0.3" filter="url(#paper-shadow)" />

          {/* Katman 2: Orta Dalgalar (Üst ve Alt Çerçeveleşme) */}
          <path d="M0,0 C150,60 300,10 500,55 C650,90 720,30 800,50 L800,0 L0,0 Z" fill="#e67e22" filter="url(#paper-shadow)" />
          <path d="M0,240 C120,180 250,230 420,190 C600,150 700,210 800,180 L800,240 L0,240 Z" fill="#ca6f1e" filter="url(#paper-shadow)" />

          {/* Katman 3: Ana Oyuk Haznesi (Görseldeki orta derin turuncu alan) */}
          <path d="M0,0 C200,90 250,15 520,70 C680,110 730,45 800,65 L800,200 C710,160 620,220 450,170 C280,120 150,210 0,165 Z" fill="#d35400" filter="url(#paper-shadow)" />

          {/* Sol Alt Köşedeki Organik Yaprak Detayları */}
          <g fill="#f39c12" filter="url(#paper-shadow)" transform="translate(-20, 120) scale(0.8)">
            <path d="M50,50 Q20,20 10,40 Q30,50 50,50 Z" />
            <path d="M50,50 Q30,80 15,70 Q25,55 50,50 Z" />
            <path d="M50,50 Q70,20 85,35 Q65,50 50,50 Z" />
            <path d="M50,50 Q80,70 90,50 Q75,40 50,50 Z" />
            <path d="M10,40 L100,60" stroke="#b33600" strokeWidth="2" />
          </g>

          {/* Sağ Üst Köşedeki Yaprak Detayları */}
          <g fill="#e67e22" filter="url(#paper-shadow)" transform="translate(680, 15) scale(0.7)">
            <path d="M50,50 Q20,20 10,40 Q30,50 50,50 Z" />
            <path d="M50,50 Q70,20 85,35 Q65,50 50,50 Z" />
            <path d="M20,30 L80,45" stroke="#932600" strokeWidth="2" />
          </g>

          {/* SAĞ TARAFTAKİ KATMANLI DIŞ SİLÜETİ
            Görseldeki gibi iç içe geçerek derinlik oluşturan çoklu katman yapısı
          */}
          <g transform="translate(520, 35) scale(1.1)" filter="url(#paper-shadow)">
            {/* Dış Diş Çerçevesi (En derin katman) */}
            <path d="M40,10 C25,5 5,15 5,40 C5,75 25,90 35,110 C37,115 42,115 43,108 C48,90 52,90 57,108 C58,115 63,115 65,110 C75,90 95,75 95,40 C95,15 75,5 60,10 C50,15 50,15 40,10 Z" fill="#d35400" />
            
            {/* Orta Diş Katmanı */}
            <path d="M40,15 C28,11 10,20 10,42 C10,72 28,86 37,104 C38,107 41,107 42,102 C46,86 54,86 58,102 C59,107 62,107 63,104 C72,86 90,72 90,42 C90,20 72,11 60,15 C50,20 50,20 40,15 Z" fill="#e67e22" />
            
            {/* En Üst Diş Katmanı (Aydınlık yüzey) */}
            <path d="M40,20 C31,17 15,25 15,45 C15,69 31,82 39,98 C40,100 40,100 41,96 C44,82 56,82 59,96 C60,100 60,100 61,98 C69,82 85,69 85,45 C85,25 69,17 60,20 C50,25 50,25 40,20 Z" fill="#f39c12" />
          </g>
        </svg>
      </Box>

      {/* İÇERİK KATMANI (Yazılar ve İkon)
        Arka planın önünde durması için zIndex: 2 verilmiştir.
      */}
      <Box 
        sx={{ 
          position: 'relative', 
          zIndex: 2, 
          display: 'flex', 
          flexDirection: 'column',
          gap: '4px'
        }}
      >
        {/* Başlık ve Solundaki Çizgisel Klinik Logosu */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Görseldeki ince çizgisel mimari klinik ikonu */}
          <Box
            component="svg"
            viewBox="0 0 24 24"
            sx={{
              width: { xs: '32px', sm: '42px' },
              height: { xs: '32px', sm: '42px' },
              fill: 'none',
              stroke: '#ffffff',
              strokeWidth: '1.2',
            }}
          >
            {/*             <path d="M3 21h18M5 21V8a2 2 0 012-2h10a2 2 0 012 2v13M9 21v-4a1 1 0 011-1h4a1 1 0 011 1v4M7 10h2v2H7zm8 0h2v2h-2zm-8 4h2v2H7zm8 0h2v2h-2zM12 3v3M10 4h4" />
*/}
          </Box>

          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.8rem' },
              fontFamily: '"Poppins", "Roboto", "Helvetica", sans-serif',
              letterSpacing: '-0.01em',
              textShadow: '0 4px 15px rgba(0,0,0,0.2)',
            }}
          >
            
          </Typography>
        </Box>

        {/* Görseldeki Hizalı Breadcrumb Yapısı */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            paddingLeft: { xs: '46px', sm: '56px' }, // İkon genişliğine göre tam hiza
            opacity: 0.95,
          }}
        >
          <Typography
            component="a"
            href="/"
            sx={{
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: { xs: '0.85rem', sm: '0.95rem' },
              fontWeight: 400,
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Orange
          </Typography>
          
          <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' }, color: 'rgba(255,255,255,0.7)' }}>
           Dent
          </Typography>

          <Typography
            sx={{
              color: '#ffffff',
              fontSize: { xs: '0.85rem', sm: '0.95rem' },
              fontWeight: 500,
            }}
          >
            Clinic
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ModernPageBanner;