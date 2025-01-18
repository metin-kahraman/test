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
  const TreatmansAESTHETICDENTISTRY = () => {
    const t = useTranslations("Treatmans.AESTHETICDENTISTRY");

    return (
      <Box p={2}>

        <img
        style={{
          borderRadius: 20,
          width: '100%',
        }}
        srcSet={`/images/treatmentsPage/estetik.jpeg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`/images/treatmentsPage/estetik.jpeg?w=164&h=164&fit=crop&auto=format`}
        loading="lazy"
      />
        <Typography align="center" sx={{pt:3}} variant="h5" gutterBottom>
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
        <FrequentlyAskedQuestions translateKey={"Treatmans.AESTHETICDENTISTRY.FREQUENTLYASKEDQUESTIONS"} questionList={questionList}/>

      </Box>
    );
  };
  
  export default TreatmansAESTHETICDENTISTRY;
  