import { Box, Button, Typography } from "@mui/material"
import { styles } from "./stylesFourthSection"
import Image from "next/image"

export const FourthSection = () => {
  return (
    <Box sx={styles.main} component='article'>
      <Box component='section' sx={styles.sectionImage}>
        <Box sx={styles.containerImg}>
          <Image
            alt="bussines card, smart cards, qr code, NFC technology"
            quality={100}
            style={styles.card}
            src='/images/home/laser_img.png'
            width={1732}
            height={988}
          />
        </Box>
      </Box>
      <Box component='section' sx={styles.sectionText} >
        <Typography variant="h2" component='h2' sx={styles.title}>Laser <strong style={{ fontWeight: 200 }}>Engraving</strong></Typography>
        <Typography sx={styles.description}>Aquí iría una fracción de video donde las letras se están grabando con laser (Si es posible con fondo transparente para que tome el color de la landing) Y sustituir este texto por texto real.</Typography>
        <Button>Shop now</Button>
      </Box>
    </Box>
  )
}
