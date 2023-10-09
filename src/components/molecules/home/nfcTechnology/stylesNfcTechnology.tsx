export const styles = {
    main: {
        height: { xs: "auto", md: "auto" },
        width: "100%",
        backgroundSize: "cover",
        backgroundImage: "radial-gradient(circle, rgb(0 0 0 / 64%) 39%, rgb(0 0 0 / 60%) 45%),url(/images/home/background-metal.jpg)",
        // backgroundBlendMode: 'overlay',
        // mixBlendMode: 'overlay',
        // background: 'radial-gradient(circle, rgba(167,176,209,0.5284488795518207) 0%, rgba(87,94,118,0) 35%)',
        //  background: 'radial-gradient(circle, rgba(167,176,209,1) 0%, rgba(87,94,118,0) 15%)',
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        padding: "7% 5%",
        maxHeight: { md: "700px" }

    },
    containerSixthSection: {
        width: "100%",
        maxWidth: "1670px",
        height: "100%",
        margin: "0 auto",
        padding: {xs:"2% 5%",sm :"0", md:"2% 0%"},
        color: "white",
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: 'space-between' },
    },
    imgCard: {
        width: "70%",
        height: "70%",
    },
    imgNfc: {
        width: "100%",
        height: "100%",
    },
    nfcTitle: {
        fontSize: { xs: "2.5rem", md: "4rem" }
    },
    textSection: {
        width: { xs: "95%", md: "60%" },
        textAlign: { xs: "center", md: "left" }
    },
    containerImgSection: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: { xs: "100%", sm: "70%", md: "100%" },
        height: "32%",
        mr: { xs: "20%", md: "0" }
    },
    containerImages: {
        display: "flex",
        justifyContent: "flex-end",
        height: { xs: "80%", md: "100%" },
        width: { xs: "100%", md: "40%" },
        alignItems: "center",
    },
    title: {
    },
    description: {
        margin: { xs: "3rem 0", md: '2% 0' },
        fontSize: { xs: "1.3rem", md: "1.6rem" }
    },
    containerImageNfc: {
        width: { xs: "34%", md: "22%" },
        position: "relative",
        left: { xs: "19%", md: "11%" },
        display: "flex",
        alignItems: "center",
        maxWidth: "400px",
        maxHeight: "400px",

    }

}