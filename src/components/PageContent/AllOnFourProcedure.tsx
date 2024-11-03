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

const AllOnFourProcedure = () => {
  const t = useTranslations("ALLONFOURPROCEDURE");

  return (
    <Box p={2}>
      <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
      {t(`MainContent.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item1`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item2`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item3`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item4`)}
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

export default AllOnFourProcedure;
