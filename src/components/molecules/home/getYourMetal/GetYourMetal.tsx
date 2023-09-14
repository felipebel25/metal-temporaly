import { useInView } from "react-hook-inview"
import { Box, Button, Typography, useMediaQuery } from "@mui/material"

import { styles } from "./stylesGetYourMetal"

export const GetYourMetal = () => {
    const [ref, inView] = useInView({ unobserveOnEnter: true })
    const size = useMediaQuery('(min-width:600px)')
    const validateAnimation = size && inView ? 'animate__animated animate__fadeInDown' : "animate__animated animate__fadeIn animate__slower"
    return (
        <Box sx={styles.main} component='article'>
            <Box className={validateAnimation} sx={styles.container} component='section' >
                <Typography ref={ref} variant="h2" component='h2' sx={styles.textGet}>Get your</Typography>
                <Typography variant="h2" component='h2' sx={styles.textMetal} >Metal Business Card</Typography>
                <Typography sx={styles.description}>Your brand deserves the best, and our smart cards are the embodiment of excellence. Stand out from the crowd and make a bold statement.
                    <br />
                    Upgrade your business identity and unlock new opportunities with our Personal Smart Cards. Elevate your presence, enhance security, and make every interaction count. </Typography>
                <Button target='_blank' href="https://shop.sam-green.com/shop/">Shop now</Button>
            </Box>
        </Box>
    )
}
