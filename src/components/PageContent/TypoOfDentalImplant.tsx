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
  
  const TypeOfDentalImplant = () => {
    const t = useTranslations("Implants.MainContent");
  
    return (
      <Box p={2}>
        
        <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`item5.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value.title`)}
        </Typography>
        <Typography display="inline" sx={{ fontWeight: 'bold', m: 1 }} color="#388E3C" gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value.item1.title`)}
        </Typography>
        <Typography display="inline" gutterBottom>
          {t(`item5.value.item1.value`)}
        </Typography>
        <Typography></Typography>
        <Typography display="inline" sx={{ fontWeight: 'bold', m: 1 }} color="#388E3C" gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value.item2.title`)}
        </Typography>
        <Typography display="inline" gutterBottom>
          {t(`item5.value.item2.value`)}
        </Typography>
        <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`item6.title`)}
        </Typography>
        <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item6.value`)}
        </Typography>
        <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`item7.title`)}
        </Typography>
        <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item7.value.title`)}
        </Typography>
        <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item7.value.subTitle`)}
        </Typography>
        <Typography display="inline" sx={{ fontWeight: 'bold', m: 1 }} color="#388E3C" gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item7.value.item1.title`)}
        </Typography>
        <Typography display="inline" gutterBottom>
          {t(`item7.value.item1.value`)}
        </Typography>
        <Typography></Typography>
        <Typography display="inline" sx={{ fontWeight: 'bold', m: 1 }} color="#388E3C" gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item7.value.item2.title`)}
        </Typography>
        <Typography display="inline" gutterBottom>
          {t(`item7.value.item2.value`)}
        </Typography>
        <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`item8.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item8.value`)}
        </Typography>
        <Typography  color="#388E3C" variant="h6" gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item9.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item9.value`)}
        </Typography>
        <Typography  color="#388E3C" variant="h6" gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item10.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item10.value`)}
        </Typography>
      </Box>
    );
  };
  
  export default TypeOfDentalImplant;
  