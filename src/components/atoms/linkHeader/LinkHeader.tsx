import { Typography } from "@mui/material"
import { styles } from "./stylesLinkHeader";

interface Props {
    href: string;
    text: string;
}

export const LinkHeader = ({ href = '', text = '' }: Props) => {
    return (
        <Typography component='a' sx={text === 'Home' ? styles.linkActive : styles.links}>
            { text }
        </Typography >
    )
}
