
export const styles = {
    main: {
        backgroundColor: 'primary.main',
        width: "100%",
        height: { md: "90vh" },
        maxHeight: "1000px",
        padding: { xs: "5% 1%", md: "2% 4.5%" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: 'center',
        margin: "0 auto",
        pt: { xl: "0" }
    },
    container: {
        width: { xs: "90%", md: "100%" },
        maxWidth: "1700px",
        height: { xs: '80%', md: "70%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column-reverse", md: "row" },
        backgroundColor: "primary.main",
        boxShadow: '0px 0px 23px 15px rgba(0, 0, 0, 0.19)',
        padding: { xs: "4% 1%", md: "0" }
    },
    images: {
        width: { xs: "95%", sm: "70%", md: "40%" },
        height: "100%",
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        justifyContent: "center",
        position: { md: "relative" },
        right: "0%",
        padding: "1%"

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
        width: { xs: "90%", md: "50%" },
        height: "70%",
        position: "relative",
        textAlign: { xs: "center", md: "left" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: { xs: "center", md: "flex-start" },
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
        width: "100%",
        maxWidth: { xs: "100%", md: "85%" },
        marginBottom: "2%",
        mt: { xs: "2rem", md: "0" }
    },
    button: {
        width: { xs: "50%", md: "25%" }
    }
}