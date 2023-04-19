import { Box, Button, Typography } from "@mui/material"
import { styles } from "./stylesSeventhSection"

export const SeventhSection = () => {
    return (
        <Box sx={styles.main} component='article'>
            <Box sx={styles.container} component='section' >
                <Typography variant="h2" component='h2' sx={styles.textGet}>Get your</Typography>
                <Typography variant="h2" component='h2' sx={styles.textMetal} >Metal Business Card</Typography>
                <Typography sx={styles.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis </Typography>
                <Button  target='_blank' href="https://shop.sam-green.com/shop/">Shop now</Button>
            </Box>
        </Box>
    )
}
