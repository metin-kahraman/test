"use client";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Paper,
} from "@mui/material";
import Image from "next/image"; // Logo için Next.js Image component'ini kullanıyoruz
import { FC } from "react";
import Grid from "@mui/material/Grid2"; // Doğru import
import { useTranslations } from "next-intl";
import { Merienda } from 'next/font/google';
 import ProfileCard from "@/components/ProfilCard";
import { usePathname, useRouter, useParams } from "next/navigation";

import { MenuItemTranslations } from "@/types/menu";
const handlee = Merienda({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

const AboutUs: FC = () => {
  const t = useTranslations("aboutUs");
  //const tt = useTranslations('TreatmentsPage.titles') as (key: keyof TreatmentsPageTranslations['titles']) => string;
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const { locale } = params;


  return (
    <Grid
    container
      spacing={2}
      sx={{
        padding: "7%",
      }}
    >

          <Grid size={{ xs: 12, md: 6 }} sx={{mt:5 , p:5}}>
       <Typography variant="body1" sx={{ fontFamily: handlee.style.fontFamily, fontSize: 60,fontWeight: "bold",fontStyle: "italic" ,textAlign: "justify", mt: 13, ml:-3 }}>
        Gülüşünüz,
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: handlee.style.fontFamily, fontSize: 60,fontWeight: "bold", fontStyle: "italic", mt: 2, ml:-3 }}>
        En Değerli İmzamızdır…
        </Typography>
        
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{mt:5 }}>
          <img
        style={{
          borderRadius: 8,
          width: "100%",
          display: "block",
          maxHeight: "600px",
          //marginLeft: "-10%",
          //marginRight: "10%",
          paddingTop: '5%',
          alignItems: 'right',
        }}
        srcSet={`/images/aboutUs/desk3.jpeg`}
        src={`/images/aboutUs/desk3.jpeg`}
        loading="lazy"
      />

          </Grid>

      <Typography
        sx={{
          fontSize: 40,
          display: "flex",
          
          justifyContent: "center",
          textAlign: "center",
          pl:5
        }}
        
      >
        {t("title")}
      </Typography>






        <Typography  variant="body1" sx={{ fontSize: 20, textAlign: "justify", mt: 2  }}>
       &nbsp;&nbsp;&nbsp;Orange Dent Klinik olarak, modern diş hekimliği uygulamalarını samimi ve huzurlu bir atmosferde sizlerle buluşturmak için yola çıktık. 2018 yılından bu yana Antalya’nın Kemer bölgesinde, sağlığınızı ve estetik beklentilerinizi en üst düzeyde tutmayı amaç edindik.

        </Typography>

                     <Typography variant="body1" sx={{ fontSize: 20, textAlign: "justify", mt: 2 }}>
     &nbsp;&nbsp;&nbsp;Uzman hekim kadromuz; implantolojiden estetik gülüş tasarımına, ortodontiden çocuk diş hekimliğine kadar geniş bir yelpazede kişiye özel tedavi protokolleri sunmaktadır. Deneyimli diş hekimleri ve uzmanlardan oluşan multidisipliner ekibimiz, karmaşık vakalarda dahi en doğru teşhis ve tedavi planını oluşturur. 

        </Typography>

                             <Typography variant="body1" sx={{ fontSize: 20, textAlign: "justify", mt: 2 }}>
&nbsp;&nbsp;&nbsp;Kliniğimizde, tedavi korkunuzu kapıda bırakmanızı sağlayacak konforlu bir ortam ve en son teknolojiye sahip ekipmanlar  (örneğin; 3D tomografi, dijital tarayıcılar, blok kazıyıcılar, ortodontik şeffaf plak) kullanılmaktadır. Teknolojik gelişmeleri yakından takip ediyor ve dijital diş hekimliği çözümlerini kliniğimizin merkezine koyuyoruz.
        </Typography>


                     <Typography variant="body1" sx={{ fontSize: 20, textAlign: "justify", mt: 2 }}>
&nbsp;&nbsp;&nbsp;Bizim için her hasta, ailemizin yeni bir üyesidir. Kliniğimizde geçirdiğiniz her dakikanın, sağlığınıza yapılan değerli bir yatırım olduğuna inanıyoruz. Amacımız sadece diş problemlerinizi çözmek değil, aynı zamanda kliniğimizden güvenle ve mutlu gülümseyerek ayrılmanızı sağlamaktır.
        </Typography>


    </Grid>
  );
};

export default AboutUs;
/*


      <Typography variant="body1" sx={{ fontSize: 20, textAlign: "justify", mt: 2 }}>
        {t("content")}
      </Typography>
      


      <Grid size={{ xs: 12, md: 6 }}>
        <SyledCard
          variant="outlined"
          tabIndex={0}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            image={cardData[0].img}
            aspect-ratio="16 / 9"
            sx={{
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          />
          <SyledCardContent>

            <Typography gutterBottom variant="h6" component="div">
              {cardData[0].title}
            </Typography>
            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
              {cardData[0].description}
            </StyledTypography>
          </SyledCardContent>
        </SyledCard>
      </Grid>

      */
