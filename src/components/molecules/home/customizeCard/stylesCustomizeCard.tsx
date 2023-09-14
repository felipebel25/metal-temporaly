export const styles = {
    main: {
        height: { xs: "60%", md: "80vh" },
        minHeight: "500px",
        width: "100%",
        backgroundSize: "cover",
        backgroundImage: "radial-gradient(circle, rgb(0 0 0 / 64%) 39%, rgb(0 0 0 / 60%) 45%),url(/images/home/background-metal.jpg)",
        //   backgroundBlendMode: 'overlay',
        //   mixBlendMode: 'overlay',
        backgroundRepeat: "no-repeat",
        boxShadow: 'inset 0px 10px 20px #161616, inset 0px -10px 20px #161616;',

    },
    containerThirdSection: {
        width: "100%",
        maxWidth: "2500px",
        height: '100%',
        margin: "0 auto",
        padding: { xs: "3% 0", md: "2% 5%" },
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: 'center', md: 'space-between' },
        flexDirection: { xs: 'column', md: "row" },
    },
    textCustomize: {
        fontSize: { xs: "1.8rem", md: "4rem" },
        fontWeight: 200
    },
    textMetalBusiness: {
        fontSize: { xs: "2.5rem", md: "4.7rem" },
    },
    containerBulletChecks: {
        display: { xs: "none", md: "flex" },
        flexWrap: "wrap",
        width: "70%",
        justifyContent: "space-between",
        margin: "4% 0"
    },
    containerImages: {
        width: { xs: "100%", md: "40%" },
        height: { xs: "70%", md: "85%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: { xs: "center", md: "flex-start" },
        // border: "1px solid red",
    },
    imgLogoMobile: {
        width: "25rem",
        height: "100%",
    },
    cards: {
        width: "100%",
        // border: '1px solid red',
        height: "100%",
        minWidth: "25rem",
        maxWidth: "60.875rem",

    },
    containerCardFront: {
        width: { xs: "100%", sm: "55%", md: "80%" },
        // border: "1px solid red",
        height: { xs: "50%", md: "45%" },
        margin: { md: "0 auto" },
        display: "flex",
        justifyContent: { xs: "center", sm: "flex-start", md: "flex-start" },
        position: { xs: "relative", sm: "relative", md: "inherit" },
        left: { xs: "0", sm: "8%", md: "0" },

    },
    containerCardBack: {
        width: { xs: "100%", md: "98%" },
        height: { xs: "40%", md: "36%" },
        display: "flex",
        margin: { md: "0 auto" },
        justifyContent: "flex-start",
        position: "relative",
        right: { xs: "", md: "6.8rem" },
        // border: "1px solid red"

    },
    containerText: {
        display: { xs: "flex", md: 'block' },
        flexDirection: "column",
        alignItems: { xs: 'center' },
        textAlign: { xs: "center", md: 'left' }
    },
    indications: {
        position: { xs: "absolute", sm: "relative" },
        display: "flex",
        width: '18rem',
        height: '30%',
        left: { xs: "65%", md: "-16%" },
        right: { xs: "0", md: "20%" },
        top: "35.5%",
        alignItems: 'center',

    },
    indicationsLogo: {
        border: "1px solid white",
        borderLeft: "none",
        width: { xs: "3rem", md: "4rem" },
        height: "60%"
    },
    indicationArrow: {
        border: "1px solid white",
        borderLeft: "none",
        width: { xs: "2rem", md: "6rem" },
        height: "1px",
        top: "15%"
    },
    indicationArrowText: {
        fontSize: { xs: "1.2rem", md: '1.7rem' },
        marginLeft: "4%"
    },
    indicationsQrCard: {
        position: { xs: "absolute", md: "relative" },
        display: "flex",
        width: { xs: "29%", md: '22rem' },
        height: '40%',
        right: { xs: "4.3%", sm: "10%", md: "10%" },
        top: "28%",
        alignItems: 'center',
        // border: '1px solid red'
    },
    indicationsQrCardLogo: {
        border: "1px solid white",
        borderLeft: "none",
        width: { xs: "3rem", md: "4rem" },
        height: "155%"
    },
    indicationsNameContainer: {
        position: { xs: "absolute", md: "relative" },
        display: "flex",
        width: { xs: "33%", md: '22rem' },
        height: '40%',
        left: { xs: "2%", sm: "17%", md: "7%" },
        top: "27%",
        alignItems: 'center',
        // border: "1px solid red"
    },
    containerImgQr: {
        margin: "0 auto",
        width: { xs: "100%", sm: "35%", md: "100%" },
        // border: "1px solid blue",
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
    },
    imgQr: {
        minWidth: '21rem',
        maxWidth: '45rem',
        width: '100%',
        height: "auto",
        // border: "1px solid red"
    },
    imgQrMobile: {
        width: '20rem',
        height: "auto",

        // border: "1px solid red"
    },
    indicationsName: {
        border: "1px solid white",
        borderRight: "none",
        width: "4rem",
        height: "125%",
    }


}