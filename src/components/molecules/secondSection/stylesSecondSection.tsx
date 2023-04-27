
export const styles = {
    main: {
        backgroundColor: 'primary.main',
        width: "100%",
        height: { md: "90vh" },
        padding: { xs:"5% 1%", md: "2% 5%" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: { xs: "center", md: "flex-end" },
    },
    images: {
        width: { xs: "95%", md: "90%" },
        height: "80%",
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        justifyContent: "center",
        position: { md: "relative" },
        right: "30%",

    },
    container_card_white: {
        width: "85%",
        height: "85%",
        position: "relative",
        top: { md: "10%" }
    },
    container_card_black: {
        width: "85%",
        height: "85%",
        position: "relative",
        bottom: { md: "10.5%" },
        left: { md: "29%" },
        zIndex: 2
    },
    card_white: {
        width: { xs: "120%", md: "100%" },
        height: { xs: "60%", md: "100%" },
    },
    card_black: {
        width: { md: "100%" },
        height: { md: "100%" },
    },
    texts: {
        width: "98%",
        height: "70%",
        position: "relative",
        right: { md: "10%" },
        textAlign: { xs: "center", md: "left" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: { xs: "center", md: "flex-start" }
    },
    container: {
        width: { xs: "90%", md: "76.6%" },
        height: { xs: '80%', md: "80%" },
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column-reverse", md: "row" },
        backgroundColor: "info.main",
        boxShadow: '0px 0px 23px 5px rgba(0, 0, 0, 0.19)',
        padding: { xs: "4% 1%", md: "0" },
    },
    textBW: {
        fontSize: { xs: '1.8rem', md: '4rem' },
        fontWeight: 200,
    },
    options: {
        fontSize: { xs: "2.5rem", md: "5rem" },
        fontWeight: 400,
        margin: "2% 0"
    },
    description: {
        fontSize: { xs: "1.3rem", md: '1.6rem' },
        fontWeight: 400,
        maxWidth: { md: "85%" },
        marginBottom: "2%",
        mt: { xs: "2rem", md: "0" }
    },
    button: {
        width: { xs: "50%", md: "25%" }
    }
}