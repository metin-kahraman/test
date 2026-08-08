import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import SchoolIcon from '@mui/icons-material/School';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import WorkIcon from '@mui/icons-material/Work';
//import StarRating from './StarRating'; // optional custom component

type ProfilCardProps = {
  name: string;
  specialty: string;
  university: string;
  graduationYear: number;
  experienceYears: number;
  imageUrl: string;
  rating?: number; // 0-5
};

export default function ProfilCard({
  name,
  specialty,
  university,
  graduationYear,
  experienceYears,
  imageUrl,
  rating,
}: ProfilCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 280,
        minWidth: 240,
        borderRadius: 4,
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
        },
        bgcolor: 'background.paper',
        overflow: 'visible',
      }}
    >
      {/* Avatar area - centered, overlapping the card */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: -4 }}>
        <Avatar
          src={imageUrl}
          alt={name}
          sx={{
            width: 88,
            height: 88,
            border: '4px solid white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        />
      </Box>

      <CardContent sx={{ pt: 2 }}>
        {/* Name & Specialty */}
        <Typography
          variant="h6"
          component="div"
          align="center"
          fontWeight={700}
          gutterBottom
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mb: 1.5 }}
        >
          {specialty}
        </Typography>

        {/* Optional rating */}
        {/*rating !== undefined && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1.5 }}>
            <StarRating value={rating} readOnly size="small" />
          </Box>
        )*/}

        <Divider sx={{ my: 1.5 }} />

        {/* Details with icons */}
        <Stack spacing={1}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <SchoolIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {university} ({graduationYear})
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <MedicalServicesIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {specialty}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <WorkIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {experienceYears} yıl deneyim
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}