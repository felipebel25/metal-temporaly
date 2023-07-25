import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import { styles } from "./stylesBlackWhite"
import { useInView } from "react-hook-inview"

export const BlackWhite = () => {
    const [ref, inView] = useInView({ unobserveOnEnter: true })
    const size = useMediaQuery('(min-width:600px)')
    const validateAnimation = size && inView ? 'animate__animated animate__fadeInUp' : "animate__animated animate__fadeInUp animate__slow"
    return (
        <Box component='main' sx={styles.main}>
            <Box ref={ref} className={validateAnimation} sx={styles.container}>
                <Box sx={styles.images} >
                    {/* <Box sx={styles.container_card_white}>
                        <Image
                            alt="bussines card, smart cards, qr code, NFC technology"
                            quality={100}
                            style={{ width: "100%", height: "100%" }}
                            src='/images/home/card_white.png'
                            width={1080}
                            height={720}
                        />
                    </Box>
                    <Box sx={styles.container_card_black}>
                        <Image
                            alt="bussines card, smart cards, qr code, NFC technology"
                            quality={100}
                            style={{ width: "100%", height: "100%" }}
                            src='/images/home/card_black.png'
                            width={1080}
                            height={720}
                        />
                    </Box> */}
                    <video
                        autoPlay
                        loop
                        style={{ width: "100%", height: "100%" }}
                        muted
                        playsInline={true}
                        controls={false}
                        src="/videos/section2.mp4"
                    />
                </Box>
                <Box sx={styles.texts}>
                    <Typography variant="h5" sx={styles.textBW} >Black and White</Typography>
                    <Typography variant="h3" sx={styles.options}>Options</Typography>
                    <Typography sx={styles.description} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis </Typography>
                    <Button target='_blank' href="https://shop.sam-green.com/shop/">Shop now</Button>
                </Box>
            </Box>
        </Box>
    )
}
