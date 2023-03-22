import { Box, Button, Typography } from "@mui/material"
import { styles } from "./stylesSecondSection"
import Image from "next/image"

export const SecondSection = () => {


    return (
        <Box component='main' sx={styles.main}>
                <Box sx={styles.container}>
                    <Box sx={styles.images} >
                        <Box sx={styles.container_card_white}>
                            <Image
                                alt="bussines card, smart cards, qr code, NFC technology"
                                quality={100}
                                style={styles.card_black}
                                src='/images/home/card_white.png'
                                width={1080}
                                height={720}
                            />
                        </Box>
                        <Box sx={styles.container_card_black}>
                            <Image
                                alt="bussines card, smart cards, qr code, NFC technology"
                                quality={100}
                                style={styles.card_black}
                                src='/images/home/card_black.png'
                                width={1080}
                                height={720}
                            />
                        </Box>
                    </Box>
                    <Box sx={styles.texts}>
                        <Typography variant="h5" sx={styles.textBW} >Black and White</Typography>
                        <Typography variant="h3" sx={styles.options}>Options</Typography>
                        <Typography sx={styles.description} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis </Typography>
                        <Button>Shop now</Button>
                    </Box>
                </Box>
        </Box>
    )
}
