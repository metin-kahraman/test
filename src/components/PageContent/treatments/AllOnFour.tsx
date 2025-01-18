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
  
  const TreatmansAllOnFor = () => {
    const t = useTranslations("Treatmans.ALLONFOUR");
  
    return (
      <Box p={2}>
        <img
        style={{
          borderRadius: 20,
          width: '100%',
        }}
        srcSet={`/images/treatmentsPage/allon4tedaviler.jpeg`}
        src={`/images/treatmentsPage/allon4tedaviler.jpeg`}
        loading="lazy"
      />
        <Typography align="center" variant="h5" gutterBottom>
        {t(`item1.subTitle`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item1.value`)}
        </Typography>
        <Typography align="center" variant="h6" gutterBottom>
        {t(`item2.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value2`)}
        </Typography>
        <Typography align="center" variant="h6" gutterBottom>
        {t(`item3.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item3.value`)}
        </Typography>
        <Typography align="center" variant="h6" gutterBottom>
        {t(`item4.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item4.value`)}
        </Typography>

        <Typography align="center" variant="h6" gutterBottom>
        {t(`item5.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value`)}
        </Typography>

        <Typography align="center" variant="h6" gutterBottom>
        {t(`item6.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item6.value`)}
        </Typography>
        <Typography align="center" variant="h6" gutterBottom>
        {t(`item7.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item7.value`)}
        </Typography>
        <Typography align="center" variant="h6" gutterBottom>
        {t(`item8.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item8.value`)}
        </Typography>
        <Typography align="center" variant="h6" gutterBottom>
        {t(`item9.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item9.value`)}
        </Typography>
        <Typography align="center" variant="h6" gutterBottom>
        {t(`item10.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item10.value`)}
        </Typography>
        <Typography align="center" variant="h6" gutterBottom>
        {t(`item11.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item11.value`)}
        </Typography>
        <Typography align="center" variant="h6" gutterBottom>
        {t(`item12.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item12.value`)}
        </Typography>
        <Typography align="center" variant="h6" gutterBottom>
        {t(`item13.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item13.value`)}
        </Typography>
        <Typography align="center" variant="h6" gutterBottom>
        {t(`item14.title`)}
        </Typography>
        <Typography gutterBottom>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item14.value`)}
        </Typography>
      </Box>
    );
  };
  
  export default TreatmansAllOnFor;
  