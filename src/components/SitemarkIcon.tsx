"use client";
import { useRouter } from 'next/navigation';
import { Icon } from '@mui/material';

export default function SitemarkIcon() {
  const router = useRouter();

  return (
    <Icon sx={{ height: 'auto', width: 'auto', mr: 2, mb: -0.5 }}>
      <img
        src="/OrangeDentClinic.svg"
        alt="Orange Dent Clinic"
        style={{ cursor: 'pointer' }}
        onClick={() => router.push('/')}
      />
    </Icon>
  );
}
