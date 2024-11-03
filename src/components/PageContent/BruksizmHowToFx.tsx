import {
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box,
    Paper,
  } from "@mui/material";
  import { useTranslations } from "next-intl";
  import { TreatmentsPageTranslations } from "@/types";
  
  const BruksizmHowToFx = () => {
    const t = useTranslations("Burksizm");
  
    return (
      <Box p={2}>
        <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`item7.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item7.value`)}
        </Typography>
        <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`item8.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item8.value`)}
        </Typography>
        <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`item9.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item9.value`)}
        </Typography>
      </Box>
    );
  };
  
  export default BruksizmHowToFx;
  