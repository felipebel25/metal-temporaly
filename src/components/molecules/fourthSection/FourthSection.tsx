import { Box, Button, Typography } from "@mui/material"
import { _STRAPI } from "@/utils/constants"

import { PropsSection } from "@/interfaces/IDataStrapi"
import { useInView } from "react-hook-inview"
import { styles } from "./stylesFourthSection"

export const FourthSection = ({ data }: PropsSection) => {
  console.log(data);
  
  const [ref, inView] = useInView({ unobserveOnEnter: true })
  const validateAnimationLeft = inView ? 'animate__animated animate__fadeInLeft' : ""
  const validateAnimationRight = inView ? 'animate__animated animate__fadeInRight' : ""

  return (
    <Box sx={styles.main}  component='article'>
      <Box component='section' className={validateAnimationLeft} ref={ref} sx={styles.sectionImage}>
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
      <Box component='section' className={validateAnimationRight} sx={styles.sectionText} >
        <Typography variant="h2" component='h2' sx={styles.title}>{data.title}</Typography>
        <Box sx={styles.containerImgMobile}>
          <video
            autoPlay
            loop
            style={{ width: "100%" }}
            muted
          >
            <source src={`${_STRAPI}${data.video!.data[0].attributes.url}` ?? "/videos/section3.mp4"} type="video/mp4" />
          </video>
        </Box>
        <Typography sx={styles.description}>{data.description}</Typography>
        <Button target='_blank' href="https://shop.sam-green.com/shop/">{data.button_text!.text}</Button>
      </Box>
    </Box >
  )
}
