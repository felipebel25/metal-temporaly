import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import { useInView } from "react-hook-inview"

import { PropsSection } from "@/interfaces/IDataStrapi"

import { styles } from "./stylesSeventhSection"

export const SeventhSection = ({ data }: PropsSection) => {
    console.log(data);
    
    const [ref, inView] = useInView({ unobserveOnEnter: true })
    const size = useMediaQuery('(min-width:600px)')
    const validateAnimation = size && inView ? 'animate__animated animate__fadeInDown' : "animate__animated animate__fadeIn animate__slower"

    return (
        <Box sx={styles.main} component='article'>
            <Box  className={validateAnimation} sx={styles.container} component='section' >
                <Typography ref={ref} variant="h2" component='h2' sx={styles.textGet}>{data.title}</Typography>
                <Typography variant="h2" component='h2' sx={styles.textMetal} >{data.subtitle}</Typography>
                <Typography sx={styles.description}>{data.description}</Typography>
                <Button target='_blank' href="https://shop.sam-green.com/shop/">{data.button_text!.text}</Button>
            </Box>
        </Box>
    )
}
