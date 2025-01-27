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
import FrequentlyAskedQuestions from "../FrequentlyAskedQuestions";
const questionList: string[] = ["item1", "item2","item3","item4","item5","item6"];


const DentalBridgeTypes = () => {
  const t = useTranslations("DentalBridge");

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
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item1.value4`)}
      </Typography>
      <img
        style={{
          borderRadius: 8,
          width: '80%',
          display:'block',
          marginLeft:'auto',
          marginRight:'auto',
        }}
        srcSet={`/images/blog/dental-bridge.png`}
        src={`/images/blog/dental-bridge.png`}
        loading="lazy"
      />  
      <Typography align="center" color="#388E3C" sx={{pt:3}}variant="h5" gutterBottom>
        {t(`item2.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value`)}
      </Typography>
      <Typography color="#ed6c02" sx={{ fontWeight: "bold" }} gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value2`)}
      </Typography>

      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value3`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value4`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value5`)}
      </Typography>
      <Typography color="#ed6c02" sx={{ fontWeight: "bold" }} gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value6`)}
      </Typography>

      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value7`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value8`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value9`)}
      </Typography>

      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value10`)}
      </Typography>

      <Typography color="#ed6c02" sx={{ fontWeight: "bold" }} gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value11`)}
      </Typography>

      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value12`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value13`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value14`)}
      </Typography>
      <Typography color="#ed6c02" sx={{ fontWeight: "bold" }} gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value15`)}
      </Typography>

      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value16`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value17`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value18`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item2.value19`)}
      </Typography>
      <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
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
      <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`item4.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item4.value`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item4.value2`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item4.value3`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item4.value4`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item4.value5`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item4.value6`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item4.value7`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item4.value8`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item4.value9`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item4.value10`)}
      </Typography>
      <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`item5.title`)}
      </Typography>
      <Typography color="#ed6c02" sx={{ fontWeight: "bold" }} gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value2`)}
      </Typography>
      <Typography color="#ed6c02" sx={{ fontWeight: "bold" }} gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value3`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value4`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value5`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value6`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value7`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value8`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value9`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value10`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value11`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value12`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value13`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value14`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value15`)}
      </Typography>
      <Typography color="#ed6c02" sx={{ fontWeight: "bold" }} gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value16`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value17`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value18`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value19`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value20`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value21`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value22`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value23`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value24`)}
      </Typography>
      <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
        {t(`item6.title`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item6.value`)}
      </Typography>
      <Typography gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item6.value2`)}
      </Typography>
          <FrequentlyAskedQuestions
              translateKey={"DentalBridge.FREQUENTLYASKEDQUESTIONS"}
              questionList={questionList}
            />
      
    </Box>
  );
};

export default DentalBridgeTypes;
