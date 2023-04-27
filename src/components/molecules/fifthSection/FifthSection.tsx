import { Box, Button, Typography } from "@mui/material"
import { PropsSection } from "@/interfaces/IDataStrapi"
import { _STRAPI } from "@/utils/constants"
import { styles } from "./stylesFifthSection"
import { useInView } from "react-hook-inview"

export const FifthSection = ({ data }: PropsSection) => {

    const [ref, inView] = useInView({ unobserveOnEnter: true })
    const validateAnimation = inView ? 'animate__animated animate__fadeInDown' : ""

    return (
        <Box sx={styles.main}>
            <Typography className={validateAnimation}  sx={styles.title} ref={ref} variant="h2" component='h2'>{data.title}</Typography>
            <Typography className={validateAnimation} sx={styles.description}>{data.description}</Typography>
            <Box sx={styles.imgQrCode} className={validateAnimation}>
                <video
                    autoPlay
                    loop
                    style={{ width: "100%" }}
                    muted
                >
                    <source src={`${_STRAPI}${data.video!.data[0].attributes.url}` ?? "/videos/banner.mp4"} type="video/mp4" />
                </video>
            </Box>
            <Button className={validateAnimation} target='_blank' href="https://shop.sam-green.com/shop/">{data.button_text!.text}</Button>
        </Box>
    )
}