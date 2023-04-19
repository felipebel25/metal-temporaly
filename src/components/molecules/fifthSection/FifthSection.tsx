import { Box, Button, Typography } from "@mui/material"
import { styles } from "./stylesFifthSection"
import Image from "next/image"

export const FifthSection = () => {
    return (
        <Box sx={styles.main}>
            <Typography sx={styles.title} variant="h2" component='h2'><strong style={{ fontWeight: 400 }}>QR</strong> Code Technology</Typography>
            <Typography sx={styles.description}>Sería ideal que el siguiente QR se muestre como en el video que se está armando y pasa desde colores azules hasta blanco con fondo transparente. Y sustituir este texto.</Typography>
            <Box sx={styles.imgQrCode}>
                <video
                    autoPlay
                    loop
                    style={{ width: "100%" }}
                    muted
                >
                    <source src="/videos/section4.mp4" type="video/mp4" />
                </video>
            </Box>
            <Button  target='_blank' href="https://shop.sam-green.com/shop/">Shop now</Button>
        </Box>
    )
}