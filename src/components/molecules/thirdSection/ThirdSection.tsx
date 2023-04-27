import { Box, Button, Typography } from "@mui/material"
import { BulletCheck } from "@/components/atoms/bulletCheck/BulletCheck"

import Image from "next/image"
import { PropsSection } from "@/interfaces/IDataStrapi"

import { _STRAPI } from "@/utils/constants"

import { styles } from "./stylesThirdSection"
import { useInView } from "react-hook-inview"

export const ThirdSection = ({ data }: PropsSection) => {
    console.log(data);
    const [ref, inView] = useInView({ unobserveOnEnter: true })
    const validateAnimation = inView ? 'animate__animated animate__fadeInLeft' : ""

    return (
        <Box ref={ref} sx={styles.main}>
            <Box sx={styles.containerThirdSection}>
                <Box sx={styles.containerText} className={validateAnimation}>
                    <Typography variant="h5" sx={styles.textCustomize}>{data.subtitle}</Typography>
                    <Typography variant="h3" sx={styles.textMetalBusiness}>{data.title}</Typography>
                    <Box sx={styles.containerBulletChecks} >
                        <Box sx={{ width: "50%" }}>
                            <BulletCheck text={data.array_strings![0]} />
                            <BulletCheck text={data.array_strings![1]} />
                        </Box>
                        <Box sx={{ width: "50%" }}>
                            <BulletCheck text={data.array_strings![2]} />
                            <BulletCheck text={data.array_strings![3]} />
                        </Box>
                    </Box>
                    <Button target='_blank' href="https://shop.sam-green.com/shop/">{data.button_text!.text}</Button>
                </Box>
                <Box sx={styles.containerImages} className={validateAnimation}>
                    <Box sx={styles.containerCardFront}>
                        <Image
                            alt="bussines card logo, smart cards, qr code, NFC technology"
                            quality={100}
                            style={styles.cards}
                            src={`${_STRAPI}${data.images.data[1].attributes.formats.large.url ?? '/images/home/card_black_front.png'}`}
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
                        <Image
                            alt="bussines card logo, smart cards, qr code, NFC technology"
                            quality={100}
                            style={styles.imgQr}
                            src={`${_STRAPI}${data.images?.data[0]?.attributes.formats.large.url }` || '/images/home/card_black.png'}
                            width={1080}
                            height={720}
                        />
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