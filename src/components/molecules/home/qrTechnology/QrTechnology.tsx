import { Box, Button, Typography } from "@mui/material"
import { useInView } from "react-hook-inview"

import { styles } from "./stylesQrTechnology"

export const QrTechnology = () => {
    const [ref, inView] = useInView({ unobserveOnEnter: true })
    const validateAnimation = inView ? 'animate__animated animate__fadeInDown' : ""

    return (
        <Box sx={styles.main}>
            <Typography className={validateAnimation} sx={styles.title} ref={ref} variant="h2" component='h2'><strong style={{ fontWeight: 400 }}>QR</strong> Code Technology</Typography>
            <Typography className={validateAnimation} sx={styles.description}>Unlock a World of Possibilities with QR-Code Equipped Smart Cards!
                <br />
                Effortlessly share your contact details, social media profiles, or business websites with new acquaintances, ensuring you stay connected and memorable.
            </Typography>
            <Box sx={styles.imgQrCode} className={validateAnimation}>
                <video
                    autoPlay
                    loop
                    style={{ width: "100%" }}
                    muted
                    controls={false}
                    playsInline={true}
                    src="/videos/section4.mp4"
                />
            </Box>
            <Button className={validateAnimation} target='_blank' href="https://shop.sam-green.com/shop/">Shop now</Button>
        </Box>
    )
}