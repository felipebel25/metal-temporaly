import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material"
import Image from "next/image"

import { LinkHeader } from "@/components/atoms/linkHeader/LinkHeader"

import { MenuOutlined } from "@mui/icons-material"
import { styles } from "./stylesHeaderHome"
import { useRouter } from "next/router"
import { MouseEvent, useState } from "react"
import { navigateToPublicUrl } from "@/utils/globalUtils"



export const HeaderHome = () => {

    const { push } = useRouter()
    // listener para saber si el navbar o header hizo scroll y cambiar su estilo
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (url: string) => {
        setAnchorEl(null);
        navigateToPublicUrl(url)
    };
    
    return (
        <Box component={'header'} sx={{ ...styles.header }} >
            {/* ----------------Logo Icon----------------- */}
            <Box sx={styles.logoSg}>
                <Image
                    onClick={() => push('/')}
                    width={170}
                    height={40}
                    style={{ width: "100%", height: "100%", cursor: "pointer" }}
                    alt='logo samgreencorp, bussines smart cards'
                    src='/images/svg/logo.svg'
                />
            </Box>
            {/* -------------------Links------------------ */}
            <Box sx={styles.linksContainer} >
                <LinkHeader text="Home" href='/' />
                <LinkHeader text="Shop" href='https://shop.sam-green.com/shop/' />
                {/* <LinkHeader text="Products line" href='' /> */}
                {/* <LinkHeader text="Referral  link" href='' /> */}
                <LinkHeader text="About" href='https://shop.sam-green.com/afilliate/' />
                <LinkHeader text="FAQ" href='https://shop.sam-green.com/faq/' />
                <LinkHeader text="Contact" href='https://shop.sam-green.com/contact/' />
                <LinkHeader text="Login" href='https://profiles.sam-green.com/auth/login' />
                <Button variant="outlined" sx={styles.button} target='_blank' href="https://shop.sam-green.com/shop/">Shop Now</Button>
            </Box>
            {/* --------------------BurguerIcon---------------- */}
            <IconButton sx={styles.containerBurgerIcon} onClick={handleClick}>
                <MenuOutlined sx={styles.burguerIcon} />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem sx={styles.menuItem} onClick={() => {
                    setAnchorEl(null)
                    push('/')
                }}>Home</MenuItem>
                <MenuItem sx={styles.menuItem} onClick={() => handleClose('https://shop.sam-green.com/shop/')}>Shop</MenuItem>
                <MenuItem sx={styles.menuItem} onClick={() => handleClose('https://shop.sam-green.com/afilliate/')}>About</MenuItem>
                <MenuItem sx={styles.menuItem} onClick={() => handleClose('https://shop.sam-green.com/faq/')}>FAQ</MenuItem>
                <MenuItem sx={styles.menuItem} onClick={() => handleClose('https://shop.sam-green.com/contact/')}>Contact</MenuItem>
                <MenuItem sx={styles.menuItem} onClick={() => handleClose('https://profiles.sam-green.com/auth/login')}>Login</MenuItem>
            </Menu>
        </Box>
    )
}
