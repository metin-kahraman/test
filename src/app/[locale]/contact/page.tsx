"use client";
import {
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Avatar,
  Divider,
} from "@mui/material";
import { FC, useState } from "react";
import Grid from "@mui/material/Grid2";
import { useTranslations } from "next-intl";
import { Merienda } from "next/font/google";
import ProfileCard from "@/components/ProfilCard";
import WhyChooseUs from "@/components/WhyChooseUs";

const handlee = Merienda({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});
const imageUrl = `${window.location.origin}/images/treatmentsPage/estetik.jpeg`;

// Örnek veri (kendi verilerinizle değiştirin)
const doctors = [
  {
    id: 1,
    name: "Dr. Ayşe Yılmaz",
    specialty: "Estetik Diş Hekimi",
    university: "İstanbul Üniversitesi",
    graduationYear: 2010,
    experienceYears: 14,
    imageUrl: imageUrl,
    description: "Estetik diş hekimi",
    bio: "Dr. Ayşe Yılmaz, 2010 yılında İstanbul Üniversitesi Diş Hekimliği Fakültesi'nden mezun oldu. 14 yıldır estetik diş hekimliği alanında çalışmaktadır. Gülüş tasarımı, porselen lamina ve diş beyazlatma konularında uzmandır.",
  },
  {
    id: 2,
    name: "Dr. Mehmet Demir",
    specialty: "Ortodonti Uzmanı",
    university: "Hacettepe Üniversitesi",
    graduationYear: 2012,
    experienceYears: 12,
    imageUrl: imageUrl,
    description: "Ortodonti uzmanı",
    bio: "Dr. Mehmet Demir, Hacettepe Üniversitesi'nden 2012'de mezun oldu. Ortodonti alanında 12 yıllık deneyime sahip. Tel tedavisi ve şeffaf plak (Invisalign) uygulamaları yapmaktadır.",
  },
  {
    id: 3,
    name: "Dr. Elif Kaya",
    specialty: "Pedodonti Uzmanı",
    university: "Ege Üniversitesi",
    graduationYear: 2015,
    experienceYears: 9,
    imageUrl: imageUrl,
    description: "Pedodonti uzmanı",
    bio: "Dr. Elif Kaya, 2015 yılında Ege Üniversitesi'nden mezun oldu. Çocuk diş hekimliği alanında 9 yıldır çalışmaktadır. Çocuklarda diş çürüğü tedavisi, koruyucu uygulamalar ve davranış yönlendirme konularında deneyimlidir.",
  },
  {
    id: 4,
    name: "Dr. Ali Can",
    specialty: "Periodontoloji Uzmanı",
    university: "Ankara Üniversitesi",
    graduationYear: 2008,
    experienceYears: 16,
    imageUrl: imageUrl,
    description: "Periodontoloji uzmanı",
    bio: "Dr. Ali Can, 2008 yılında Ankara Üniversitesi'nden mezun oldu. 16 yıldır diş eti hastalıkları ve implantoloji alanında çalışmaktadır. Lazer destekli tedaviler ve greft uygulamaları konusunda uzmandır.",
  },
];


const AboutUs: FC = () => {
  const t = useTranslations("aboutUs");
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (doctor: typeof doctors[0]) => {
    setSelectedDoctor(doctor);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <Grid>
      {/* Grid container – justify content center ile yatayda ortala */}
      <Grid
        container
        spacing={2}
        sx={{
          padding: "7%",
          justifyContent: "center", // Yatayda ortalamak için
        }}
      >
        {doctors.map((doctor) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={doctor.id}
            sx={{
              display: "flex",
              justifyContent: "center", // İçindeki kartı ortala
            }}
          >
            <Box
              onClick={() => handleCardClick(doctor)}
              sx={{
                cursor: "pointer",
                width: "100%", // Kartın Grid hücresini kaplamasını sağla
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ProfileCard
                imageUrl={doctor.imageUrl}
                name={doctor.name}
                university={doctor.university}
                graduationYear={doctor.graduationYear}
                specialty={doctor.specialty}
                experienceYears={doctor.experienceYears}
                rating={4.5}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <WhyChooseUs />

      {/* Modal (aynı) */}
      <Dialog open={modalOpen} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        {selectedDoctor && (
          <>
            <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>
              {selectedDoctor.name}
            </DialogTitle>
            <DialogContent dividers>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", alignSelf: "center", alignItems: "center", gap: 2 }}>
                  <Avatar
                    src={selectedDoctor.imageUrl}
                    alt={selectedDoctor.name}
                    sx={{ width: 80, height: 80 }}
                  />
                  <Box>
                    <Typography variant="h6">{selectedDoctor.specialty}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedDoctor.university} ({selectedDoctor.graduationYear})
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedDoctor.experienceYears} yıl deneyim
                    </Typography>
                  </Box>
                </Box>
                <Divider />
                <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
                  {selectedDoctor.bio}
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button color="warning" sx={{ color: "white" }} onClick={handleCloseModal} variant="contained">
                Kapat
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Grid>
  );
};

export default AboutUs;