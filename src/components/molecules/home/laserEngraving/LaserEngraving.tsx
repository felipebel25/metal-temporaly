import { Box, Button, Typography } from "@mui/material"
import { styles } from "./stylesLaserEngraving"
import { useInView } from "react-hook-inview"

export const LaserEngraving = () => {
  const [ref, inView] = useInView({ unobserveOnEnter: true })
  const validateAnimationLeft = inView ? 'animate__animated animate__fadeInLeft' : ""
  const validateAnimationRight = inView ? 'animate__animated animate__fadeInRight' : ""

  return (
    <Box sx={styles.main} component='article'>
      <Box sx={styles.container}>
        <Box component='section' className={validateAnimationLeft} sx={styles.sectionImage} ref={ref}>
          <Box sx={styles.containerImg}>
            <video
              autoPlay
              loop
              style={{ width: "85%" }}
              muted
              controls={false}
            >
              <source src="/videos/section3.mp4" type="video/mp4" />
            </video>
          </Box>
        </Box>
        <Box component='section' className={validateAnimationRight} sx={styles.sectionText} >
          <Typography variant="h2" component='h2' sx={styles.title}>Laser <strong style={{ fontWeight: 200 }}>Engraving</strong></Typography>
          <Box sx={styles.containerImgMobile}>
            <video
              autoPlay
              loop
              muted
              controls={false}
              style={{ width: "100%", height: "100%" }}
              playsInline={true}
              src='/videos/section3.mp4'
            />
          </Box>
          <Typography sx={styles.description}> Laser engraving offers unparalleled precision, ensuring that every detail on your smart card is crisp and clear. Your information is etched flawlessly, creating a lasting impression.</Typography>
          <Button target='_blank' href="https://shop.sam-green.com/shop/">Shop now</Button>
        </Box>
      </Box>
    </Box >
  )
}
