import { Box, Typography } from "@mui/material"
import { styles } from "./stylesBulletCheck"
import { CheckWhiteIcon } from "../../../../public/images/svg/components/Check"

interface Props {
    text: string
}

export const BulletCheck = ({ text = 'Name' }: Props) => {
    return (
        <Box sx={styles.bulletChecks}>
            <CheckWhiteIcon sx={styles.bulletIcon} />
            <Typography sx={styles.bulletText}>{text}</Typography>
        </Box>
    )
}
