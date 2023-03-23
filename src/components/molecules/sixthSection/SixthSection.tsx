import { Box, Button, Typography } from "@mui/material"
import { styles } from "./stylesSixthSection"
import Image from "next/image"

export const SixthSection = () => {
    return (
        <Box sx={styles.main}>
            <Box sx={styles.containerSixthSection}>
                <Box sx={styles.textSection}>
                    <Typography variant="h2" component='h2'>NFC <strong style={{ fontWeight: 200 }}>Technology</strong></Typography>
                    <Typography sx={styles.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis</Typography>
                    <Button>Shop now</Button>
                </Box>
                <Box sx={styles.containerImgSection}>
                    <Box sx={styles.containerImageNfc}>
                        <Image
                            alt="NFC technology"
                            quality={100}
                            style={styles.imgNfc}
                            src='/images/home/nfc_chip.png'
                            width={848}
                            height={836}
                        />
                    </Box>
                    <Box sx={styles.containerImages}>
                        <Image
                            alt="QR Code, qrcode, qr, custom qr, qrcustom, codeqr"
                            quality={100}
                            style={styles.imgCard}
                            src='/images/home/card_fade.png'
                            width={848}
                            height={848}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}