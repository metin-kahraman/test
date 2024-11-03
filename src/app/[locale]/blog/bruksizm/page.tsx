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
import Bruksizm from "@/components/PageContent/Bruksizm";
import BruksizmDnN from "@/components/PageContent/BruksizmDnN";
import BruksizmSymptoms from "@/components/PageContent/BruksizmSymptoms";
import SleepApnea from "@/components/PageContent/SleepApnea";
import BruksizmHowToFx from "@/components/PageContent/BruksizmHowToFx";
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


const TemporaryDentalOptionsPage = () => {
    const t = useTranslations("Implants");
    const tt = useTranslations("TreatmentsPage.titles") as (
        key: keyof TreatmentsPageTranslations["titles"]
    ) => string;

    return (
        <Grid container spacing={2} component="div">
            {/* Sol taraf (9 birim genişlik) */}
            <Grid size={{ xs: 12, md: 9 }}>
                <Paper sx={{ backgroundColor: "white" }}>
                <Bruksizm />
                <BruksizmDnN />
                <BruksizmSymptoms />
                <SleepApnea />
                <BruksizmHowToFx />

                </Paper>
            </Grid>

            {/* Sağ taraf (3 birim genişlik) */}
            <Grid size={{ xs: 12, md: 3 }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Paper sx={{ backgroundColor: "white" }}>
                        {/* Logo 
                  <Image 
            src="/img.jpeg" // Logonun dosya yolunu ayarla
            alt="Logo"
            width={24}
            height={24}
          />
          */}

                        {/* Başlık */}
                        <Typography align="center" sx={{ pt: 2 }} variant="h5" gutterBottom>
                            Tedaviler
                        </Typography>
                        {/* Liste */}

                        <List>
                            {treatments.map((item, index) => (
                                <ListItem>
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontFamily: "oswald",
                                            align: "center",
                                            fontWeight: "400",
                                        }}
                                        primary={tt(item.title)}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Box>
            </Grid>
        </Grid>
    );
};

export default TemporaryDentalOptionsPage;

