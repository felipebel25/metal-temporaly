import { Box, Button } from "@mui/material"

import Image from "next/image"
import { LinkHeader } from "@/components/atoms/linkHeader/LinkHeader"
import { styles } from "./stylesHeaderHome"



export const HeaderHome = () => {
    return (
        <Box component={'header'} sx={styles.header} >
            {/* ----------------Logo Icon----------------- */}
            <Box>
                <Image
                    width={170}
                    height={40}
                    alt='logo samgreencorp, bussines smart cards'
                    src='/images/svg/logo.svg'
                />
            </Box>
            {/* -------------------Links------------------ */}
            <Box sx={styles.linksContainer} >
                <LinkHeader text="Home" href='' />
                <LinkHeader text="Shop" href='' />
                <LinkHeader text="Products line" href='' />
                <LinkHeader text="Referral  link" href='' />
                <LinkHeader text="FAQ" href='' />
                <LinkHeader text="Contact" href='' />
                <Button variant="outlined">
                    Shop now
                </Button>
            </Box>
        </Box>
    )
}
