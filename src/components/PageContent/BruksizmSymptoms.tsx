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

const BruksizmSymptoms = () => {
    const t = useTranslations("Burksizm");

    return (
        <Grid container spacing={2} size={{ xs: 12, md: 12 }}  sx={{p:10}} component="div">
            <Grid size={{ xs: 12, md: 12 }}>
                <Typography align="center" gutterBottom color="#388E3C" variant="h5">
                    {t(`item4.title`)}
                </Typography>
                <Typography gutterBottom>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item4.value`)}
                </Typography>
            </Grid>

            <Grid size={{ xs: 12, sm:6, md: 4 }}>
                <Box p={2}>

                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`item4.item1`)}
                    </Typography>
                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`item4.item2`)}                    </Typography>
                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`item4.item3`)}                    </Typography>
                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`item4.item4`)}                    </Typography>
                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`item4.item5`)}                    </Typography>
                </Box>

            </Grid>

            <Grid size={{ xs: 12, md: 4, sm:6 }}>
                <Box p={2}>

                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`item4.item6`)}
                    </Typography>
                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`item4.item7`)}                    </Typography>
                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`item4.item8`)}                    </Typography>
                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`item4.item9`)}                    </Typography>
                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`item4.item10`)}                    </Typography>
                </Box>

            </Grid>

            <Grid size={{ xs: 12, md: 4 , sm:6}}>
                <Box p={2}>

                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`item4.item11`)}
                    </Typography>
                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`item4.item12`)}                    </Typography>
                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`item4.item13`)}                    </Typography>
                    <Typography sx={{ pl: 3 }} gutterBottom >
                        &#x2022;&nbsp;{t(`item4.item14`)}                    </Typography>

                </Box>

            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
                <Typography align="center" gutterBottom color="#388E3C" variant="h5">
                    {t(`item5.title`)}
                </Typography>
                <Typography align="justify" gutterBottom>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(`item5.value`)}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default BruksizmSymptoms;
