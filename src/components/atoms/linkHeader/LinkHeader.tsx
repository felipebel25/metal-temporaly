import NextLink from "next/link"
import { Typography } from "@mui/material"
import { useStyles } from "./stylesLinkHeader"

interface Props {
    href: string;
    text: string;
}

export const LinkHeader = ({ href = '', text = '' }: Props) => {
    const classes = useStyles()
    return (
        <Typography component='a' className={classes.links}>
            {text}
        </Typography>
    )
}
