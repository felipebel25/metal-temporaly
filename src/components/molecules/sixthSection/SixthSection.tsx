import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"

import { _STRAPI } from "@/utils/constants"
import { PropsSection } from "@/interfaces/IDataStrapi"

import { styles } from "./stylesSixthSection"
import { useInView } from "react-hook-inview"

export const SixthSection = ({ data }: PropsSection) => {

    const [ref, inView] = useInView({ unobserveOnEnter: true })

    const validateAnimationLeft = inView ? 'animate__animated animate__fadeInLeft' : ""
    const validateAnimationRight = inView ? 'animate__animated animate__fadeInRight animate__slow' : ""

    return (
        <Box sx={styles.main}>
            <Box sx={styles.containerSixthSection}>
                <Box className={validateAnimationLeft}  sx={styles.textSection}>
                    <Typography ref={ref} variant="h2" component='h2' sx={styles.nfcTitle}>{data.title}</Typography>
                    <Typography sx={styles.description}>{data.description}</Typography>
                    <Button target='_blank' href="https://shop.sam-green.com/shop/">{data.button_text!.text}</Button>
                </Box>
                <Box className={validateAnimationRight} sx={styles.containerImgSection}>
                    <Box sx={styles.containerImageNfc}>
                        <Image
                            alt="NFC technology"
                            quality={100}
                            style={styles.imgNfc}
                            src={`${_STRAPI}${data.images.data[0].attributes.formats.medium.url || '/images/home/card_black_front.png'}`}
                            width={848}
                            height={836}
                        />
                    </Box>
                    <Box sx={styles.containerImages}>
                        <Image
                            alt="QR Code, qrcode, qr, custom qr, qrcustom, codeqr"
                            quality={100}
                            style={{ width: "100%", height: "100%" }}
                            src={`${_STRAPI}${data.images.data[1].attributes.formats.large.url || '/images/home/nfc_chip.png'}`}
                            width={848}
                            height={848}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
