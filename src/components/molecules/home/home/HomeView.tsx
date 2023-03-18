import { Box } from "@mui/material"
import { HeaderHome } from "../header/HeaderHome"
import { MainHome } from "../main/MainHome"

export const HomeView = () => {
    return (
        <Box sx={{height:"100vh"}}>
            <HeaderHome />
            <MainHome />
        </Box>
    )
}
