import { Box, Button, Link } from "@mui/material"
import { useStyles } from "./stylesHeaderHome"
import Image from "next/image"
import { LinkHeader } from "@/components/atoms/linkHeader/LinkHeader"


export const HeaderHome = () => {
    const classes = useStyles()
    return (
        <Box component={'header'} className={classes.header} >
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
            <Box className={classes.linksContainer} >
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
