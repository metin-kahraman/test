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
  
  const TemporaryDentalOptions = () => {
    const t = useTranslations("TemporaryDentalOptions");
  
    return (
      <Box p={2}>
        <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`MainContent.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.value`)}
        </Typography>

      </Box>
    );
  };
  
  export default TemporaryDentalOptions;
  