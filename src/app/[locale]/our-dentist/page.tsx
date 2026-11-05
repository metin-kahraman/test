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
    name: "Dt. Mehmet Sıtkı Tuncay",
    specialty: "Genel Diş Hekimi",
    university: "Hacettepe Üniversitesi",
    graduationYear: 2002,
    //experienceYears: 14,
    imageUrl: `${window.location.origin}/images/dentist/mehmet-sitki-tuncay.jpeg`,
    description: "Genel diş hekimi",
    bio: "Mehmet Sıtkı Tuncay, 2002 yılında Hacettepe Üniversitesi Diş Hekimliği Fakültesi’nden mezun olmuştur. Mezuniyetinin ardından mesleki çalışmalarını aralıksız sürdürerek, Dijital diş hekimliği uygulamalarını yakından takip etmektedir.Mesleki deneyimi doğrultusunda özellikle cerrahi diş hekimliği ve implant uygulamaları alanlarında çalışmalarını sürdürmekte; hastalarına güvenli, özenli ve kişiye özel tedavi yaklaşımları sunmaktadır.",
  },
  {
    id: 2,
    name: "Dt. Sibel Zeynep Arslan",
    specialty: "Genel Diş Hekimi",
    university: "İstanbul Okan Üniversitesi ",
    graduationYear: 2013,
    //experienceYears: 12,
    imageUrl: `${window.location.origin}/images/dentist/sibel-zeynep-arslan.jpeg`,
    description: "Genel diş hekimi",
    bio: "Dt. Sibel Zeynep Arslan, 2023 yılında İstanbul Okan Üniversitesi Diş Hekimliği Fakültesi’nden mezun oldu. Mesleki çalışmalarını genel diş hekimliği alanında sürdürmekte olup; estetik diş hekimliği, restoratif tedaviler, protetik diş tedavileri, periodontal tedaviler, diş beyazlatma ve gülüş tasarımı başta olmak üzere ağız ve diş sağlığı uygulamalarıyla ilgilenmektedir. Hastalarına güncel tedavi yaklaşımları doğrultusunda, estetik ve fonksiyonu bir arada gözeten tedaviler sunmaktadır."
  },
  {
    id: 3,
    name: "Dt. Huriye Sude Avcı",
    specialty: "Genel Diş Hekimi",
    university: "İstanbul Kent Üniversitesi",
    graduationYear: 2024,
    //experienceYears: 9,
    imageUrl: `${window.location.origin}/images/dentist/huriye-sude-avci.jpeg`,
    description: "Genel diş hekimi",
    bio: "Dt. Huriye Sude Avcı, 2024 yılında İstanbul Kent Üniversitesi Diş Hekimliği Fakültesi’nden mezun olmuştur. Genel diş hekimliği pratiği kapsamında; restoratif ve estetik diş hekimliği, endodonti, ağız hijyeni, koruyucu diş hekimliği ile teşhis ve tedavi uygulamaları alanlarında hizmet vermektedir.",
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