import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import { styles } from "./stylesSecondSection"
import { useInView } from "react-hook-inview"

export const SecondSection = () => {
    const sizeImage = useMediaQuery('(min-width:600px)');
    const [ref, isVisible] = useInView({unobserveOnEnter:false})
    const animation = sizeImage && isVisible 
    const animationLeft = animation ? 'animate_animated animationLeft' : 'animate_animated animate_fadeIn'

    return (
        <Box component='main' sx={styles.main}>
            <Box ref={ref}  sx={styles.container}>
                <Box className={animationLeft} sx={styles.images} >
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
                      style={{width:"100%"}}
                      muted
                    >
                        <source src="/videos/section2.mp4" type="video/mp4" />
                    </video>
                </Box>
                <Box sx={styles.texts}>
                    <Typography variant="h5" sx={styles.textBW} >Black and White</Typography>
                    <Typography variant="h3" sx={styles.options}>Options</Typography>
                    <Typography sx={styles.description} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis </Typography>
                    <Button  target='_blank' href="https://shop.sam-green.com/shop/">Shop now</Button>
                </Box>
            </Box>
        </Box>
    )
}
