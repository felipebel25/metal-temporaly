export const styles = {
    main: {
        width: "100%",
        height: { xs: "auto", md: "60vh" },
        backgroundColor: 'primary.main',
        padding: "2% 5%",
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: 'flex-start',

    },
    sectionImage: {
        width: "50%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
    },
    sectionText: {
        width: { xs: "90%", md: "45%" },
        maxWidth: '800px',
        height: { xs: "90%", md: "auto" },
        marginRight: { xs: "0", md: "6%" },
        border: "1px solid transparent",
        textAlign: { xs: "center", md: "left" }
    },
    title: {
        fontWeight: 400,
        fontSize: { xs: "2.5rem", md: "4rem" },
        m: { xs: "6% 0", md: "0" },
        mb: { md: "2rem" }
    },
    description: {
        fontSize: { xs: "1.4rem", md: "1.6rem" },
        margin: "5% 0",
        mt: { xs: "15%", md: "0" }

    },
    strong: {
        fontWeight: 200
    },
    card: {
        width: "67%",
        height: "100%",
    },
    containerImg: {
        display: { xs: "none", md: "flex" },
        justifyContent: "center",

    },
    containerImgMobile: {
        display: { xs: "flex", md: "none" },
        justifyContent: "center",
        margin: "5% auto",
        padding: "5%",
        width: "100%",

    },
    button: {
        display: { xs: "none", md: "block" },


    }
}