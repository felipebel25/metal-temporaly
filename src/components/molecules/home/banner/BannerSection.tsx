import { Box, Button, Typography } from "@mui/material"
import { styles } from "./stylesBannerSection"
import 'animate.css';


export const BannerSection = () => {
    return (
        <Box sx={styles.main} component='main' >
            <Box sx={styles.containerFirstSection}>
                <Box className='animate__animated animate__fadeInLeft' sx={styles.containerTitles}>
                    <Typography sx={styles.title} component='h1' variant="h1">Metal Business Card</Typography>
                    <Typography sx={styles.subtitle} component='h6' variant="h6">The technology and elegance you were looking for</Typography>
                    <Button variant="outlined" target='_blank' href="https://shop.sam-green.com/shop/">Shop Now</Button>
                </Box>
                <Box sx={styles.containerImage}>
                    <video
                        autoPlay
                        loop
                        style={{ width: "100%" }}
                        muted
                        playsInline={true}
                        controls={false}
                        src="/videos/banner.mp4"
                    />
                </Box>
            </Box>
        </Box>
    )
}
