import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid2 } from "@mui/material";
import { useTranslations } from "next-intl";


interface FrequentlyAskedQuestionsProps {
  translateKey: string;
  questionList: string[];
}

export default function FrequentlyAskedQuestions({
  translateKey,
  questionList,
}: FrequentlyAskedQuestionsProps) {
  const t = useTranslations(translateKey);

  return (
    <Grid2 size="grow">
      <Typography
        align="center"
        sx={{
          p: 3,
          backgroundcolor: "primary",
          backgroundImage:
            "-webkit-linear-gradient(rgba(222, 53, 76, 0.8), rgba(226, 123, 27, 0.8))",
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        variant="h5"
      >
        {t(`title`)}
      </Typography>
      {questionList?.map(function (data) {
        return (
          <Accordion sx={{ backgroundColor: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "rgb(255,87,51)" }} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography
                sx={{ width: "100%", color: "rgb(255,87,51)" }}
                variant="h6"
              >
                {t(`${data}.title`)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              {t(`${data}.value`)}

              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Grid2>
  );
}
