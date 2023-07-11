import { Box, Button, Typography } from "@mui/material"
import { styles } from "./stylesBannerSection"
import 'animate.css';


export const BannerSection = () => {
    return (
        <Box sx={styles.main} component='main' >
            <Box sx={styles.containerFirstSection}>
                <Box className='animate__animated animate__fadeInLeft' sx={styles.containerTitles}>
                    <Typography sx={styles.title} component='h1' variant="h1">Metal Business Card</Typography>
                    <Typography sx={styles.subtitle} component='h6' variant="h6">The technology you
                        were looking for</Typography>
                    <Button variant="outlined" target='_blank' href="https://shop.sam-green.com/shop/">Shop Now</Button>
                </Box>
                <Box sx={styles.containerImage}>
                    <video
                        autoPlay
                        loop
                        muted
                        controls={false}
                        style={{ width: "100%", height: "100%" }}
                    >
                        <source src="/videos/banner.mp4" type="video/mp4" />
                    </video>
                </Box>
            </Box>
        </Box>
    )
}
