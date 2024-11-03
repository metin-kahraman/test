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

const AllOnFourGeneralProblems = () => {
  const t = useTranslations("ALLONFOURGENERALPROBLEMS");

  return (
    <Box p={2}>
      <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`MainContent.title`)}
      </Typography>
      <Typography gutterBottom variant="h6" color="orange">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item1.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item1.value`)}
      </Typography>
      <Typography gutterBottom variant="h6" color="orange">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item2.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item2.value`)}
      </Typography>
      <Typography gutterBottom variant="h6" color="orange">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item3.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item3.value`)}
      </Typography>
      <Typography gutterBottom variant="h6" color="orange">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item4.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item4.value`)}
      </Typography>
      <Typography gutterBottom variant="h6" color="orange">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item5.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item5.value`)}
      </Typography>
      <Typography gutterBottom variant="h6" color="orange">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item6.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item6.value`)}
      </Typography>
      <Typography gutterBottom variant="h6" color="orange">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item7.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item7.value`)}
      </Typography>
      <Typography gutterBottom variant="h6" color="orange">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item8.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item8.value`)}
      </Typography>{" "}
      <Typography gutterBottom variant="h6" color="orange">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item9.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item9.value`)}
      </Typography>{" "}
      <Typography gutterBottom variant="h6" color="orange">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item10.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item10.value`)}
      </Typography>{" "}
      <Typography gutterBottom variant="h6" color="orange">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item11.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item11.value`)}
      </Typography>{" "}
      <Typography gutterBottom variant="h6" color="orange">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item12.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item12.value`)}
      </Typography>
      <Typography gutterBottom variant="h6" color="orange">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item13.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item13.value`)}
      </Typography>
      <Typography gutterBottom variant="h6" color="orange">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item14.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t(`MainContent.item14.value`)}
      </Typography>
    </Box>
  );
};

export default AllOnFourGeneralProblems;
