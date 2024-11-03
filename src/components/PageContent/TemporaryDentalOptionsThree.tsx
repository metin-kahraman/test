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

const TemporaryDentalOptionsThree = () => {
    const t = useTranslations("TemporaryDentalOptions");

    return (
        <Grid container spacing={2} size={{ xs: 12, md: 12 }} component="div">
            <Box p={2}>
                <Typography align="center" color="#388E3C" variant="h5" gutterBottom>
                    {t(`MainContent.item3.title`)}
                </Typography>
                <Typography gutterBottom>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`MainContent.item3.value`)}
                </Typography>

            </Box>

        </Grid>
    );
};

export default TemporaryDentalOptionsThree;
