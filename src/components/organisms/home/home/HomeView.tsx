import { Box } from "@mui/material"
import { FooterHome } from "../footer/FooterHome"
import { HeaderHome } from "../header/HeaderHome"
import { MainHome } from "../main/MainHome"

import { PropsPage } from "@/interfaces/IDataStrapi"



export const HomeView = ({ data }: PropsPage) => {

    return (
        <Box sx={{ height: "100vh" }}>
            <HeaderHome />
            <MainHome data={data} />
            <FooterHome />
        </Box>
    )
}
