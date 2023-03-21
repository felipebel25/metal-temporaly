import { fonts } from "@/themes/fonts";

export const styles = {
    main: {
        backgroundColor: 'primary.main',
        width:"100%",
        height: "100vh",
        padding: "2% 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    images: {
        width: "70%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        right: "30%",

    },
    container_card_white: {
        width: "85%",
        height: "85%",
        position: "relative",
        top: "10%"
    },
    container_card_black: {
        width: "85%",
        height: "85%",
        position: "relative",
        bottom: "10.5%",
        left: "29%",
        zIndex: 2
    },
    card_white: {
        width: "100%",
        height: "100%",
    },
    card_black: {
        width: "100%",
        height: "100%",
    },
    texts: {
        width: "98%",
        height: "70%",
        position: "relative",
        right: "10%",
    },
    container: {
        width: "76.6%",
        height: "70%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "info.main",
        boxShadow: '0px 0px 23px 5px rgba(0, 0, 0, 0.19)',
    },
    textBW: {
        fontSize: "6rem",
        fontWeight: 200,
    },
    options: {
        fontSize: "7rem",
        fontWeight: 400,
        margin:"2% 0"
    },
    description: {
        fontSize: '2rem',
        fontWeight: 400,
        maxWidth:"80%",
        marginBottom:"2%"
    }
}