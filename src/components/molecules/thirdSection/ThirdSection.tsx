import { Box, Button, Typography } from "@mui/material"
import { styles } from "./stylesThirdSection"
import { CheckWhiteIcon } from "../../../../public/images/svg/components/Check"
import { BulletCheck } from "@/components/atoms/bulletCheck/BulletCheck"
import Image from "next/image"

export const ThirdSection = () => {
    return (
        <Box sx={styles.main}>
            <Box sx={styles.containerThirdSection}>
                <Box>
                    <Typography variant="h5" sx={styles.textCustomize}>Customize your new</Typography>
                    <Typography variant="h3" sx={styles.textMetalBusiness}>Metal Business Card</Typography>
                    <Box sx={styles.containerBulletChecks} >
                        <Box sx={{ width: "50%" }}>
                            <BulletCheck text="Name" />
                            <BulletCheck text="QR Code" />
                        </Box>
                        <Box sx={{ width: "50%" }}>
                            <BulletCheck text="Position" />
                            <BulletCheck text="Logo" />
                        </Box>
                    </Box>
                    <Button>Shop now</Button>
                </Box>
                <Box sx={styles.containerImages}>
                    <Box sx={styles.containerCardFront}>
                        <Image
                            alt="bussines card logo, smart cards, qr code, NFC technology"
                            quality={100}
                            style={styles.cards}
                            src='/images/home/card_black_front.png'
                            width={1080}
                            height={720}

                        />
                        <Box sx={styles.indications}>
                            <Box sx={styles.indicationsLogo} />
                            <Box sx={styles.indicationArrow} />
                            <Typography sx={styles.indicationArrowText}>Logo</Typography>
                        </Box>
                    </Box>
                    <Box sx={styles.containerCardBack}>
                        <Box sx={styles.indicationsNameContainer}>
                            <Typography sx={styles.indicationArrowText}>Name and Position</Typography>
                            <Box sx={styles.indicationArrow} />
                            <Box sx={styles.indicationsName} />
                        </Box>
                        <Image
                            alt="bussines card logo, smart cards, qr code, NFC technology"
                            quality={100}
                            style={styles.imgQr}
                            src='/images/home/card_black.png'
                            width={1080}
                            height={720}
                        />
                        <Box sx={styles.indicationsQrCard}>
                            <Box sx={styles.indicationsQrCardLogo} />
                            <Box sx={styles.indicationArrow} />
                            <Typography sx={styles.indicationArrowText}>QRCode</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>


        </Box>
    )
}