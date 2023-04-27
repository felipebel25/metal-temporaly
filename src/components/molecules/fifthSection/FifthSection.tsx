import { Box, Button, Typography } from "@mui/material"
import { styles } from "./stylesFifthSection"
import { useInView } from "react-hook-inview"

export const FifthSection = () => {
    const [ref, inView] = useInView({ unobserveOnEnter: true })
    const validateAnimation = inView ? 'animate__animated animate__fadeInDown' : ""

    return (
        <Box sx={styles.main}>
            <Typography className={validateAnimation} sx={styles.title} ref={ref}  variant="h2" component='h2'><strong style={{ fontWeight: 400 }}>QR</strong> Code Technology</Typography>
            <Typography className={validateAnimation} sx={styles.description}>Sería ideal que el siguiente QR se muestre como en el video que se está armando y pasa desde colores azules hasta blanco con fondo transparente. Y sustituir este texto.</Typography>
            <Box sx={styles.imgQrCode} className={validateAnimation}>
                <video
                    autoPlay
                    loop
                    style={{ width: "100%" }}
                    muted
                >
                    <source src="/videos/section4.mp4" type="video/mp4" />
                </video>
            </Box>
            <Button className={validateAnimation}  target='_blank' href="https://shop.sam-green.com/shop/">Shop now</Button>
        </Box>
    )
}