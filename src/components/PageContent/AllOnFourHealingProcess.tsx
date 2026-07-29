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

const AllOnFourHealingProcess = () => {
  const t = useTranslations("Blog.ALLONFOURHEALINGPROCESS");

  return (
    <Box p={2}>
      <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
      {t(`MainContent.title`)}
      </Typography>
      <Typography gutterBottom>
        {t(`MainContent.value`)}
      </Typography>
      <Typography gutterBottom variant="h6" color="orange">
                {t(`MainContent.item1.title`)}
      </Typography>
      <Typography gutterBottom>
                {t(`MainContent.item1.item1`)}
      </Typography>
      <Typography gutterBottom>
                {t(`MainContent.item1.item2`)}
      </Typography>
      <Typography gutterBottom>
                {t(`MainContent.item1.item3`)}
      </Typography>
      <Typography gutterBottom variant="h6" color="orange">
                {t(`MainContent.item2.title`)}
      </Typography>
      <Typography gutterBottom>
                {t(`MainContent.item2.item1`)}
      </Typography>
      <Typography gutterBottom>
                {t(`MainContent.item2.item2`)}
      </Typography>
      <Typography gutterBottom>
                {t(`MainContent.item2.item3`)}
      </Typography>
    </Box>
  );
};

export default AllOnFourHealingProcess;
