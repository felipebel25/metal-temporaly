import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import { styles } from "./stylesSeventhSection"
import { useInView } from "react-hook-inview"

export const SeventhSection = () => {
    const [ref, inView] = useInView({ unobserveOnEnter: true })
    const size = useMediaQuery('(min-width:600px)')
    const validateAnimation = size && inView ? 'animate__animated animate__fadeInDown' : "animate__animated animate__fadeIn animate__slower"
    return (
        <Box sx={styles.main} component='article'>
            <Box className={validateAnimation} sx={styles.container} component='section' >
                <Typography ref={ref}  variant="h2" component='h2' sx={styles.textGet}>Get your</Typography>
                <Typography variant="h2" component='h2' sx={styles.textMetal} >Metal Business Card</Typography>
                <Typography sx={styles.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis </Typography>
                <Button  target='_blank' href="https://shop.sam-green.com/shop/">Shop now</Button>
            </Box>
        </Box>
    )
}
