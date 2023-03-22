import { Box, Button, Typography } from "@mui/material"
import { styles } from "./stylesFifthSection"
import Image from "next/image"

export const FifthSection = () => {
    return (
        <Box sx={styles.main}>
            <Typography sx={styles.title} variant="h2" component='h2'><strong style={{ fontWeight: 400 }}>QR</strong> Code Technology</Typography>
            <Typography sx={styles.description}>Sería ideal que el siguiente QR se muestre como en el video que se está armando y pasa desde colores azules hasta blanco con fondo transparente. Y sustituir este texto.</Typography>
            <Image
                alt="QR Code, qrcode, qr, custom qr, qrcustom, codeqr"
                quality={100}
                style={styles.imgQrCode}
                src='/images/home/qrCode.png'
                width={848}
                height={848}
            />
            <Button>Shop now</Button>
        </Box>
    )
}