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

const BruksizmDnN = () => {
  const t = useTranslations("Burksizm");

  return (
    <Box p={2}>
      <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`item1.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item1.value`)}
      </Typography>
      <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`item2.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value`)}
      </Typography>{" "}
      <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`item3.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item3.value`)}
      </Typography>
    </Box>
  );
};

export default BruksizmDnN;
