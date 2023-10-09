import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"
import { styles } from "./stylesNfcTechnology"
import { useInView } from "react-hook-inview"

export const NfcTechnology = () => {

    const [ref, inView] = useInView({ unobserveOnEnter: true })

    const validateAnimationLeft = inView ? 'animate__animated animate__fadeInLeft' : ""
    const validateAnimationRight = inView ? 'animate__animated animate__fadeInRight animate__slow' : ""
    return (
        <Box sx={styles.main}>
            <Box sx={styles.containerSixthSection}>
                <Box className={validateAnimationLeft} sx={styles.textSection}>
                    <Typography  variant="h2" component='h2' sx={styles.nfcTitle}>NFC <strong style={{ fontWeight: 200 }}>Technology</strong></Typography>
                    <Typography sx={styles.description}>Unlock Limitless Possibilities with NFC-Enabled Smart Cards!<br /> Exchange contact information, website links, and more effortlessly by tapping your card to a compatible device. Networking has never been this convenient.</Typography>
                    <Button target='_blank' href="https://shop.sam-green.com/shop/">Shop now</Button>
                </Box>
                <Box className={validateAnimationRight}  sx={styles.containerImgSection}>
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
                            style={{ width: "100%", height: "100%" }}
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
