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
  
  const WhatIsDentalImplantItem1 = () => {
    const t = useTranslations("Implants");
  
    return (
      <Box p={2}>
        <Typography align="center" color="green" variant="h5" gutterBottom>
        {t(`MainContent.item1.title`)}
        </Typography>

        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item1.value`)}
        </Typography>
        <Typography align="center" color="green" variant="h5" gutterBottom>
        {t(`MainContent.item2.title`)}
        </Typography>

        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item2.value`)}
        </Typography>

        <Typography align="center" color="green" variant="h5" gutterBottom>
        {t(`MainContent.item3.title`)}
        </Typography>

        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item3.value.title`)}
        </Typography>


        <Typography  color="green" variant="h6" gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item3.value.item1.title`)}
        </Typography>

        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item3.value.item1.value`)}
        </Typography>

        <Typography color="green" variant="h6" gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item3.value.item2.title`)}
        </Typography>

        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item3.value.item2.value`)}
        </Typography>

        <Typography color="green" variant="h6" gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item3.value.item3.title`)}
        </Typography>

        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item3.value.item3.value`)}
        </Typography>

        <Typography align="center" color="green" variant="h5" gutterBottom>
        {t(`MainContent.item4.title`)}
        </Typography>

        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item4.value.title`)}
        </Typography>
        <Typography display="inline" sx={{ fontWeight: 'bold', m: 1 }}  color="green" gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item4.value.item1.title`)}
        </Typography>
        <Typography display="inline" gutterBottom>
          {t(`MainContent.item4.value.item1.value`)}
        </Typography>
        <Typography gutterBottom>
        </Typography>
        <Typography display="inline" sx={{ fontWeight: 'bold', m: 1 }}  color="green" gutterBottom>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item4.value.item2.title`)}
        </Typography>
        <Typography display="inline" gutterBottom>
          {t(`MainContent.item4.value.item2.value`)}
        </Typography>
        <Typography gutterBottom>
        </Typography>
        <Typography display="inline" sx={{ fontWeight: 'bold', m: 1 }}  color="green" gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item4.value.item3.title`)}
        </Typography>
        <Typography display="inline" gutterBottom>
          {t(`MainContent.item4.value.item3.value`)}
        </Typography>
        <Typography gutterBottom>
        </Typography>
        <Typography display="inline" sx={{ fontWeight: 'bold', m: 1 }}  color="green" gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item4.value.item4.title`)}
        </Typography>
        <Typography display="inline" gutterBottom>
          {t(`MainContent.item4.value.item4.value`)}
        </Typography>
        <Typography gutterBottom>
        </Typography>
        <Typography display="inline" sx={{ fontWeight: 'bold', m: 1 }}  color="green" gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item4.value.item5.title`)}
        </Typography>
        <Typography display="inline" gutterBottom>
          {t(`MainContent.item4.value.item5.value`)}
        </Typography>
        <Typography gutterBottom>
        </Typography>
        <Typography display="inline" sx={{ fontWeight: 'bold', m: 1 }}  color="green" gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item4.value.item6.title`)}
        </Typography>
        <Typography display="inline" gutterBottom>
          {t(`MainContent.item4.value.item6.value`)}
        </Typography>
        <Typography gutterBottom>
        </Typography>
        <Typography display="inline" sx={{ fontWeight: 'bold', m: 1 }}  color="green" gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item4.value.item7.title`)}
        </Typography>
        <Typography display="inline" gutterBottom>
          {t(`MainContent.item4.value.item7.value`)}
        </Typography>
        <Typography gutterBottom>
        </Typography>
        <Typography display="inline" sx={{ fontWeight: 'bold', m: 1 }}  color="green" gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item4.value.item8.title`)}
        </Typography>
        <Typography display="inline" gutterBottom>
          {t(`MainContent.item4.value.item8.value`)}
        </Typography>

        <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item4.value.item9.value`)}
        </Typography>

        <Typography align="center" color="green" variant="h5" gutterBottom>
        {t(`MainContent.itemplus1.title`)}
        </Typography>

        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.itemplus1.value`)}
        </Typography>

        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.itemplus1.value2`)}
        </Typography>

        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.itemplus1.value3`)}
        </Typography>

        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.itemplus1.value4`)}
        </Typography>



      </Box>
    );
  };
  
  export default WhatIsDentalImplantItem1;
  