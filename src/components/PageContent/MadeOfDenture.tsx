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
  
  const MadeOfDenture = () => {
    const t = useTranslations("DENTURE");
  
    return (
      <Box p={2}>
        
        <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`typeOfDenture.item4.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`typeOfDenture.item4.value`)}
        </Typography>
        <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`typeOfDenture.item4.item1.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`typeOfDenture.item4.item1.value`)}
        </Typography>
        <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`typeOfDenture.item4.item2.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`typeOfDenture.item4.item2.value`)}
        </Typography>
        <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`typeOfDenture.item4.item3.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`typeOfDenture.item4.item3.value`)}
        </Typography>
        <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`typeOfDenture.item4.item4.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`typeOfDenture.item4.item4.value`)}
        </Typography>
        <Typography   color="#388E3C" variant="h6" gutterBottom>
        {t(`typeOfDenture.item1.item1.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`typeOfDenture.item1.item1.value`)}
        </Typography>


      </Box>
    );
  };
  
  export default MadeOfDenture;
  