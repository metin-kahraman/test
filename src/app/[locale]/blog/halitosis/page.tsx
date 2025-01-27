import {
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box,
    Paper,
} from "@mui/material";
import { FC } from "react";
import Grid from "@mui/material/Grid2"; // Doğru import
import SvgIcon from "@mui/material/SvgIcon";
import { useTranslations } from "next-intl";
import { TreatmentsPageTranslations } from "@/types";
import Divider from "@mui/material/Divider";
import Halitosis from "@/components/PageContent/Halitosis";
import ContentRightSlideMenu from "@/components/contentRightSlideMenu";


const HalitOsisBlogPage = () => {
    const t = useTranslations("Halitosis");

    return (
        <Grid container spacing={2} component="div">
            {/* Sol taraf (9 birim genişlik) */}
            <Grid size={{ xs: 12, md: 9 }}>
                <Paper sx={{ backgroundColor: "white" }}>
                <Halitosis />


                </Paper>
            </Grid>

            {/* Sağ taraf (3 birim genişlik) */}
            <Grid size={{ xs: 12, md: 3 }}>
            <ContentRightSlideMenu />
            </Grid>
        </Grid>
    );
};

export default HalitOsisBlogPage;

