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
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";

const questionList: string[] = ["item1", "item2"];

const TreatmansOrto = () => {
  const t = useTranslations("Treatmans.ORTHODONTIC");

  return (
    <Box p={2}>
      <img
        style={{
          borderRadius: 8,
          width: "100%",
        }}
        srcSet={`/images/treatmentsPage/teltedavisi.jpeg`}
        src={`/images/treatmentsPage/teltedavisi.jpeg`}
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
      <FrequentlyAskedQuestions
        translateKey={"Treatmans.ORTHODONTIC.FREQUENTLYASKEDQUESTIONS"}
        questionList={questionList}
      />
    </Box>
  );
};

export default TreatmansOrto;
