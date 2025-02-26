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
import AllOnFourProcedure from "@/components/PageContent/AllOnFourProcedure";
import AllOnFourHealingProcess from "@/components/PageContent/AllOnFourHealingProcess";
import AllOnFourGeneralProblems from "@/components/PageContent/AllOnFourGeneralProblems";
import ContentRightSlideMenu from "@/components/contentRightSlideMenu";
const treatments = [
    { img: "https://picsum.photos/800/450?random=1", title: "T1" },
    { img: "https://picsum.photos/800/450?random=2", title: "T2" },
    { img: "https://picsum.photos/800/450?random=3", title: "T3" },
    { img: "https://picsum.photos/800/450?random=4", title: "T4" },
    { img: "https://picsum.photos/800/450?random=5", title: "T5" },
    { img: "https://picsum.photos/800/450?random=6", title: "T6" },
    { img: "https://picsum.photos/800/450?random=7", title: "T7" },
    { img: "https://picsum.photos/800/450?random=8", title: "T8" },
    { img: "https://picsum.photos/800/450?random=9", title: "T9" },
    { img: "https://picsum.photos/800/450?random=10", title: "T10" },
    { img: "https://picsum.photos/800/450?random=11", title: "T11" },
];

const typofImplants = ["item1", "item2", "item3", "item4"];

const keys = ["item1", "item2", "item3", "item4", "item5", "item6", "item7","item8","item9","item10"] as const;
const keysSub = {
    item3: ["item1", "item2", "item3"],
    item4: ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9"],
    item5: ["item1", "item2"],
    item7: ["item1", "item2", "item3"]
} as const;


const AllOnFour = () => {
    const t = useTranslations("Implants");
    const tt = useTranslations("TreatmentsPage.titles") as (
        key: keyof TreatmentsPageTranslations["titles"]
    ) => string;

    return (
        <Grid container spacing={2} component="div">
            {/* Sol taraf (9 birim genişlik) */}
            <Grid size={{ xs: 12, md: 9 }}>
                <Paper sx={{ backgroundColor: "white" }}>
                <AllOnFourProcedure />
                <img
        style={{
          borderRadius: 8,
          width: '80%',
          display:'block',
          marginLeft:'auto',
          marginRight:'auto',
        }}
        srcSet={`/images/blog/all-on-four.png`}
        src={`/images/blog/all-on-four.png`}
        loading="lazy"
      />
                <AllOnFourHealingProcess />
                <AllOnFourGeneralProblems />

                </Paper>
            </Grid>

            {/* Sağ taraf (3 birim genişlik) */}
            <Grid size={{ xs: 12, md: 3 }}>
            <ContentRightSlideMenu />

            </Grid>
        </Grid>
    );
};

export default AllOnFour;

