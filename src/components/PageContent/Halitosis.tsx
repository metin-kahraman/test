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
const questionList: string[] = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
];

const Halitosis = () => {
  const t = useTranslations("Halitosis");

  return (
    <Box p={2}>
      <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`item1.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item1.value`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item1.value2`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item1.value3`)}
      </Typography>

      <img
        style={{
          borderRadius: 8,
          width: "80%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        srcSet={`/images/blog/Halitosis.jpg`}
        src={`/images/blog/Halitosis.jpg`}
        loading="lazy"
      />
      <Typography
        align="center"
        color="#388E3C"
        sx={{ pt: 3 }}
        variant="h5"
        gutterBottom
      >
        {t(`item2.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value`)}
      </Typography>
      <Typography
        align="center"
        color="#388E3C"
        sx={{ pt: 3 }}
        variant="h5"
        gutterBottom
      >
        {t(`item3.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item3.value`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item3.value2`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item3.value3`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item3.value4`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item3.value5`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item3.value6`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item3.value7`)}
      </Typography>
    </Box>
  );
};

export default Halitosis;
