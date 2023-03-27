import { Box, Button, Typography } from "@mui/material"
import { styles } from "./stylesFourthSection"

export const FourthSection = () => {
  return (
    <Box sx={styles.main} component='article'>
      <Box component='section' sx={styles.sectionImage}>
        <Box sx={styles.containerImg}>
          <video
            autoPlay
            loop
            style={{ width: "85%" }}
            muted
          >
            <source src="/videos/section3.mp4" type="video/mp4" />
          </video>
        </Box>
      </Box>
      <Box component='section' sx={styles.sectionText} >
        <Typography variant="h2" component='h2' sx={styles.title}>Laser <strong style={{ fontWeight: 200 }}>Engraving</strong></Typography>
        <Box sx={styles.containerImgMobile}>
          <video
            autoPlay
            loop
            style={{ width: "100%" }}
            muted
          >
            <source src="/videos/section3.mp4" type="video/mp4" />
          </video>
        </Box>
        <Typography sx={styles.description}>Aquí iría una fracción de video donde las letras se están grabando con laser (Si es posible con fondo transparente para que tome el color de la landing) Y sustituir este texto por texto real.</Typography>
        <Button  target='_blank' href="https://shop.sam-green.com/shop/">Shop now</Button>
      </Box>
    </Box >
  )
}
