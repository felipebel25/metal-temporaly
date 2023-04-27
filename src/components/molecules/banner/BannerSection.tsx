import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import {  PropsSection, Section } from "@/interfaces/IDataStrapi"

import { _STRAPI } from "@/utils/constants"
import { styles } from "./stylesBannerSection"
import 'animate.css';


export const BannerSection = ({ data }: PropsSection) => {
    const size = useMediaQuery('(min-width:600px)')
    const validateAnimation = !size  ? 'animate__animated animate__fadeInDown' :  "animate__animated animate__fadeInLeft"

    return (
        <Box sx={styles.main} component='main' >
            <Box  sx={styles.containerFirstSection}>
                <Box className={validateAnimation} sx={styles.containerTitles}>
                    <Typography sx={styles.title} component='h1' variant="h1">{data.title}</Typography>
                    <Typography sx={styles.subtitle} component='h6' variant="h6">{data.description}</Typography>
                    <Button variant="outlined" target='_blank' href="https://shop.sam-green.com/shop/">{data.button_text!.text}</Button>
                </Box>
                <Box className='animate__animated animate__fadeIn' sx={styles.containerImage}>
                    <video
                        autoPlay
                        loop
                        style={{ width: "100%" }}
                        muted
                    >
                        <source src={`${_STRAPI}${data.video!.data[0].attributes.url}` || "/videos/banner.mp4"} type="video/mp4" />
                    </video>
                </Box>
            </Box>
        </Box>
    )
}
