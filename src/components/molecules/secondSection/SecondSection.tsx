import { Box, Button, Typography, useMediaQuery } from "@mui/material"

import { PropsSection } from "@/interfaces/IDataStrapi"
import { _STRAPI } from "@/utils/constants"
import { useInView } from "react-hook-inview"

import { styles } from "./stylesSecondSection"

export const SecondSection = ({ data }: PropsSection) => {
    console.log(data);
    
    const [ref, inView] = useInView({ unobserveOnEnter: true})
    const size = useMediaQuery('(min-width:600px)')
    const validateAnimation = size && inView ? 'animate__animated animate__fadeInUp' : "animate__animated animate__fadeIn animate__slower"
    return (
        <Box component='main' sx={styles.main}>
            <Box ref={ref} className={validateAnimation} sx={styles.container}>
                <Box sx={styles.images} >
                    <video
                        autoPlay
                        loop
                        style={{ width: "100%" }}
                        muted
                    >
                        <source src={`${_STRAPI}${data.video!.data[0].attributes.url}` ?? "/videos/banner.mp4"} type="video/mp4" />
                    </video>
                </Box>
                <Box sx={styles.texts}>
                    <Typography variant="h5" sx={styles.textBW} >{data.title}</Typography>
                    <Typography variant="h3" sx={styles.options}>{data.subtitle}</Typography>
                    <Typography sx={styles.description} >{data.description}</Typography>
                    <Button target='_blank' href="https://shop.sam-green.com/shop/">{data.button_text!.text}</Button>
                </Box>
            </Box>
        </Box>
    )
}
