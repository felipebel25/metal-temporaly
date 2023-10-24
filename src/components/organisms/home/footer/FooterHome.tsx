import { navigateToPublicUrl } from "@/utils/globalUtils"
import { Box, Typography } from "@mui/material"
import Image from "next/image"


import { styles } from "./stylesFooterHome"
import { Facebook, Instagram, LinkedIn, WhatsApp, YouTube } from "@mui/icons-material"

export const FooterHome = () => {
    const year = new Date()

    return (
        <Box component='footer' sx={styles.main}>
            <Box sx={styles.contactSection}>
                <Box sx={styles.contactSectionImage}>
                    <Image
                        alt="QR Code, qrcode, qr, custom qr, qrcustom, codeqr"
                        quality={100}
                        // style={styles.imgCard}
                        src='/images/svg/logo.svg'
                        width={172}
                        height={40}
                    />
                </Box>
                <Box sx={styles.containerContacts}>
                    <Box sx={styles.contactSectionContact}>
                        <Typography sx={styles.contactTitle}>Links</Typography>
                        <Typography sx={styles.contactLinks} onClick={() => navigateToPublicUrl('https://shop.sam-green.com/terms-of-service/')} >Terms of service</Typography>
                        <Typography sx={styles.contactLinks} onClick={() => navigateToPublicUrl('https://shop.sam-green.com/privacy-policies/')}>Privacy policies</Typography>
                    </Box>
                    <Box sx={styles.contactSectionContact}>
                        <Typography sx={styles.contactTitle}>Phone</Typography>
                        <Typography sx={styles.contactLinks} onClick={() => navigateToPublicUrl('tel:19294133080')} >+(1) 929 413 30 80</Typography>
                    </Box>
                    <Box sx={styles.contactSectionContact}>
                        <Typography sx={styles.contactTitle}>Email</Typography>
                        <Typography sx={styles.contactLinks} onClick={() => navigateToPublicUrl('https://outlook.office.com/mail/deeplink/compose?mailtouri=mailto%3Ainfo%40samgreen.com')} >info@samgreen.com</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.contactSocialLinks}>
                <Box>
                    <Typography>All rights reserved Samgreen® {year.getFullYear()}</Typography>
                </Box>
                <Box sx={styles.containerIconsSocialLinks}>
                    <LinkedIn onClick={() => navigateToPublicUrl('https://www.linkedin.com/company/samgreencorp/')} sx={styles.iconSocialLink} />
                    <Instagram onClick={() => navigateToPublicUrl('https://www.instagram.com/samgreencorp/')} sx={styles.iconSocialLink} />
                    <Facebook onClick={() => navigateToPublicUrl('https://www.facebook.com/samgreencorp')} sx={styles.iconSocialLink} />
                    <YouTube onClick={() => navigateToPublicUrl('https://www.youtube.com/channel/UCCQ0cEorHekmMoL1OXZXYlw')} sx={styles.iconSocialLink} />
                    <WhatsApp onClick={() => navigateToPublicUrl('https://api.whatsapp.com/send/?phone=19294133080&text&type=phone_number&app_absent=0')} sx={styles.iconSocialLink} />

                </Box>
            </Box>
        </Box>
    )
}
