import {
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box,
    Paper,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useTranslations } from "next-intl";
import { TreatmentsPageTranslations } from "@/types";

const TemporaryDentalOptionsOne = () => {
    const t = useTranslations("TemporaryDentalOptions");

    return (
        <Grid container spacing={2} size={{ xs: 12, md: 12 }} component="div">
            <Box p={2}>
                <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
                    {t(`MainContent.item1.title`)}
                </Typography>
                <Typography gutterBottom>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item1.value`)}
                </Typography>

            </Box>
            <Grid size={{ xs: 12, md: 6 }}>
                <Box p={2}>
                    <Typography align="center" gutterBottom color="#388E3C" variant="h5">
                        {t(`MainContent.item1.positiveOps.title`)}
                    </Typography>
                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`MainContent.item1.positiveOps.item1`)}
                    </Typography>
                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`MainContent.item1.positiveOps.item2`)}
                    </Typography>
                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`MainContent.item1.positiveOps.item3`)}
                    </Typography>      <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`MainContent.item1.positiveOps.item4`)}
                    </Typography>      <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`MainContent.item1.positiveOps.item5`)}
                    </Typography>
                </Box>

            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Box p={2}>
                    <Typography align="center" gutterBottom color="#388E3C" variant="h5">
                        {t(`MainContent.item1.negativeOps.title`)}
                    </Typography>
                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`MainContent.item1.negativeOps.item1`)}
                    </Typography>
                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`MainContent.item1.negativeOps.item2`)}
                    </Typography>
                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`MainContent.item1.negativeOps.item3`)}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default TemporaryDentalOptionsOne;