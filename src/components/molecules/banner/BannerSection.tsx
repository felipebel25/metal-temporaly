import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"

import { styles } from "./stylesBannerSection"

export const BannerSection = () => {
    return (
        <Box sx={styles.main} component='main' >
            <Box sx={styles.containerFirstSection}>
                <Box sx={styles.containerTitles}>
                    <Typography sx={styles.title} component='h1' variant="h1">Metal Business Card</Typography>
                    <Typography sx={styles.subtitle} component='h6' variant="h6">The technology you
                        were looking for</Typography>
                    <Button variant="outlined">Shop Now</Button>
                </Box>
                <Box sx={styles.containerImage}>
                    <Image
                        alt="bussines card, smart cards, qr code, NFC technology"
                        quality={100}
                        style={{ width: "100%", height: "100%" }}
                        src='/images/home/banner.png'
                        width={1080}
                        height={720}
                        layout="responsive"
                    />
                </Box>
            </Box>
        </Box>
    )
}
