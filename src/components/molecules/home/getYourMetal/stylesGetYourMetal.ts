export const styles = {
    main: {
        backgroundColor: 'primary.dark',
        width: "100%",
        height: { xs: "50rem", md: "70vh" },
        padding: { xs: "2% 5%", md: "2% 3%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        maxHeight:"850px",
        minHeight:{ md:"600px"}
    },
    container: {
        backgroundColor: "info.main",
        boxShadow: '0px 0px 23px 5px rgba(0, 0, 0, 0.19)',
        width: { xs: "90%", md: "75%" },
        maxWidth: "1700px",
        height: "75%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: { xs: "center", md: "left" },

    },
    textGet: {
        fontWeight: 200,
        fontSize: { xs: "2rem", md: "4rem" },
        marginBottom: "1.5%"
    },
    textMetal: {
        fontWeight: 400,
        fontSize: { xs: "2.3rem", md: "4.5rem" },

    },
    description: {
        width: "85%",
        maxWidth: "1000px",
        margin: "2% 0",
        marginTop: "4%",
        fontSize: { xs: "1.3rem", md: "1.7rem" },
        textAlign: { xs: "center", md: "center" }
    }
}