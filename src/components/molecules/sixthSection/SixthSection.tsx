import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"
import { styles } from "./stylesSixthSection"
import { useInView } from "react-hook-inview"

export const SixthSection = () => {

    const [ref, inView] = useInView({ unobserveOnEnter: true })

    const validateAnimationLeft = inView ? 'animate__animated animate__fadeInLeft' : ""
    const validateAnimationRight = inView ? 'animate__animated animate__fadeInRight animate__slow' : ""
    return (
        <Box sx={styles.main}>
            <Box sx={styles.containerSixthSection}>
                <Box className={validateAnimationLeft} sx={styles.textSection}>
                    <Typography ref={ref} variant="h2" component='h2' sx={styles.nfcTitle}>NFC <strong style={{ fontWeight: 200 }}>Technology</strong></Typography>
                    <Typography sx={styles.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis</Typography>
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
