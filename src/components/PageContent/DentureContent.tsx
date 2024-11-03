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
  
  const DentureContent = () => {
    const t = useTranslations("DENTURE");
  
    return (
      <Box p={2}>
        <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`title`)}
        </Typography>
        <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`title2`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`value`)}
        </Typography>
        <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`typeOfDenture.item1.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`typeOfDenture.item1.value`)}
        </Typography>
        <Typography   color="#388E3C" variant="h6" gutterBottom>
        {t(`typeOfDenture.item1.item1.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`typeOfDenture.item1.item1.value`)}
        </Typography>
        <Typography   color="#388E3C" variant="h6" gutterBottom>
        {t(`typeOfDenture.item1.item2.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`typeOfDenture.item1.item2.value`)}
        </Typography>
        <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`typeOfDenture.item2.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`typeOfDenture.item2.value`)}
        </Typography>
        <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`typeOfDenture.item3.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`typeOfDenture.item3.value`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item5`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item6`)}
        </Typography>
      </Box>
    );
  };
  
  export default DentureContent;
  