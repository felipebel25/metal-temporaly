import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import { BulletCheck } from "@/components/atoms/bulletCheck/BulletCheck"
import Image from "next/image"

import { styles } from "./stylesThirdSection"
import { useInView } from "react-hook-inview"

export const ThirdSection = () => {
    const [ref, inView] = useInView({ unobserveOnEnter: true })
    const validateAnimation = inView ? 'animate__animated animate__fadeInLeft' : ""
    const validateAnimationRight = inView ? 'animate__animated animate__fadeInRight' : ""
    const size = useMediaQuery('(min-width:600px)')

    return (
        <Box sx={styles.main}>
            <Box sx={styles.containerThirdSection}>
                <Box className={validateAnimation} sx={styles.containerText}>
                    <Typography variant="h5" sx={styles.textCustomize}>Customize your new</Typography>
                    <Typography variant="h3" sx={styles.textMetalBusiness}>Metal Business Card</Typography>
                    <Box sx={styles.containerBulletChecks} >
                        <Box sx={{ width: "50%" }}>
                            <BulletCheck text="Name" />
                            <BulletCheck text="QR Code" />
                        </Box>
                        <Box sx={{ width: "50%" }}>
                            <BulletCheck text="Position" />
                            <BulletCheck text="Logo" />
                        </Box>
                    </Box>
                    <Button target='_blank' href="https://shop.sam-green.com/shop/">Shop now</Button>
                </Box>
                <Box ref={ref} sx={styles.containerImages} className={validateAnimationRight}>
                    <Box sx={styles.containerCardFront}>
                        <Image
                            alt="bussines card logo, smart cards, qr code, NFC technology"
                            quality={100}
                            style={size ? styles.cards : styles.imgLogoMobile}
                            src='/images/home/card_black_front.png'
                            width={1080}
                            height={720}

                        />
                        <Box sx={styles.indications}>
                            <Box sx={styles.indicationsLogo} />
                            <Box sx={styles.indicationArrow} />
                            <Typography sx={styles.indicationArrowText}>Logo</Typography>
                        </Box>
                    </Box>
                    <Box sx={styles.containerCardBack}>
                        <Box sx={styles.indicationsNameContainer}>
                            <Typography sx={styles.indicationArrowText}>Name and Position</Typography>
                            <Box sx={styles.indicationArrow} />
                            <Box sx={styles.indicationsName} />
                        </Box>
                        <Box sx={styles.containerImgQr}>
                            <Image
                                alt="bussines card logo, smart cards, qr code, NFC technology"
                                quality={100}
                                style={size ? styles.imgQr : styles.imgQrMobile}

                                src='/images/home/card_black.png'
                                width={1080}
                                height={720}
                            />
                        </Box>
                        <Box sx={styles.indicationsQrCard}>
                            <Box sx={styles.indicationsQrCardLogo} />
                            <Box sx={styles.indicationArrow} />
                            <Typography sx={styles.indicationArrowText}>QRCode</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>


        </Box>
    )
}