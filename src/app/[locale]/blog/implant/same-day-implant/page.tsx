import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Paper,
} from "@mui/material";
import { FC } from "react";
import Grid from "@mui/material/Grid2"; // Doğru import
import SvgIcon from "@mui/material/SvgIcon";
import { useTranslations } from "next-intl";
import { TreatmentsPageTranslations } from "@/types";
import Divider from "@mui/material/Divider";
import SameDayImplantsItem1 from "@/components/PageContent/Same-dayDentalImplantsItem1";
import SameDayImplantsItem2 from "@/components/PageContent/Same-dayDentalImplantsItem2";
import SameDayImplantsItem3 from "@/components/PageContent/Same-dayDentalImplantsItem3";
import SameDayImplantsItem4 from "@/components/PageContent/Same-dayDentalImplantsItem4";
import SameDayImplantsItem5 from "@/components/PageContent/Same-dayDentalImplantsItem5";
import SameDayImplantsItem6 from "@/components/PageContent/Same-dayDentalImplantsItem6";
import SameDayImplantsItem7 from "@/components/PageContent/Same-dayDentalImplantsItem7";
import ContentRightSlideMenu from "@/components/contentRightSlideMenu";
const treatments = [
  { img: "https://picsum.photos/800/450?random=1", title: "T1" },
  { img: "https://picsum.photos/800/450?random=2", title: "T2" },
  { img: "https://picsum.photos/800/450?random=3", title: "T3" },
  { img: "https://picsum.photos/800/450?random=4", title: "T4" },
  { img: "https://picsum.photos/800/450?random=5", title: "T5" },
  { img: "https://picsum.photos/800/450?random=6", title: "T6" },
  { img: "https://picsum.photos/800/450?random=7", title: "T7" },
  { img: "https://picsum.photos/800/450?random=8", title: "T8" },
  { img: "https://picsum.photos/800/450?random=9", title: "T9" },
  { img: "https://picsum.photos/800/450?random=10", title: "T10" },
  { img: "https://picsum.photos/800/450?random=11", title: "T11" },
];

const TemporaryDentalOptionsPage = () => {
  const t = useTranslations("Implants");
  const tt = useTranslations("TreatmentsPage.titles") as (
    key: keyof TreatmentsPageTranslations["titles"]
  ) => string;

  return (
    <Grid container spacing={2} component="div">
      {/* Sol taraf (9 birim genişlik) */}
      <Grid size={{ xs: 12, md: 9 }}>
        <Paper sx={{ backgroundColor: "white" }}>
          <SameDayImplantsItem1 />
          <img
        style={{
          borderRadius: 8,
          width: "80%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        srcSet={`/images/treatmentsPage/implant.jpg`}
        src={`/images/treatmentsPage/implant.jpg`}
        loading="lazy"
      />
          <SameDayImplantsItem2 />
          <SameDayImplantsItem3 />
          <SameDayImplantsItem4 />
          <SameDayImplantsItem5 />
          <SameDayImplantsItem6 />
          <SameDayImplantsItem7 />
        </Paper>
      </Grid>

      {/* Sağ taraf (3 birim genişlik) */}
      <Grid size={{ xs: 12, md: 3 }}>
      <ContentRightSlideMenu />

      </Grid>
    </Grid>
  );
};

export default TemporaryDentalOptionsPage;
