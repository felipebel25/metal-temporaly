import { Typography } from "@mui/material"
import { styles } from "./stylesLinkHeader";
import { navigateToPublicUrl } from "@/utils/globalUtils";

interface Props {
    href: string;
    text: string;
}

export const LinkHeader = ({ href = '', text = '' }: Props) => {
    const onClickHover= () =>{
        navigateToPublicUrl(href)
    }
    return (
        <Typography onClick={onClickHover}  component='a' sx={text === 'Home' ? styles.linkActive : styles.links}>
            { text }
        </Typography >
    )
}
