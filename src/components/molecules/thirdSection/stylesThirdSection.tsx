export const styles = {
    main: {
        height: { xs: "60%", md: "80vh" },
        minHeight: "500px",
        width: "100%",
        backgroundSize: "cover",
        backgroundImage: "radial-gradient(circle, rgb(0 0 0 / 55%) 0%, #161616 55%),url(/images/home/background-metal.jpg)",
        backgroundBlendMode: 'overlay',
        mixBlendMode: 'overlay',
        // background: 'radial-gradient(circle, rgba(167,176,209,0.5284488795518207) 0%, rgba(87,94,118,0) 35%)',
        //   background: 'radial-gradient(circle, rgba(167,176,209,1) 0%, rgba(87,94,118,0) 15%)',
        backgroundRepeat: "no-repeat",
         boxShadow: 'inset 0px 10px 20px #161616, inset 0px -10px 20px #161616;'
    },
    containerThirdSection: {
        width: "100%",
        maxWidth: "2500px",
        height: '100%',
        margin:"0 auto",
        padding: "2% 5%",
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
        width: { xs: "80%", md: "40%" },
        height: { xs: "60%", md: "85%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

    },
    cards: {
        width: "100%",
        height: "100%"
    },
    containerCardFront: {
        width: "75%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "flex-start"

    },
    containerCardBack: {
        width: "60%",
        display: "flex",
        margin: "0 auto",
        justifyContent: "flex-start",
        position: "relative",
        right: { xs: "11rem", md: "17rem" }

    },
    containerText: {
        display: { xs: "flex", md: 'block' },
        flexDirection: "column",
        alignItems: { xs: 'center' },
        textAlign: { xs: "center", md: 'left' }
    },
    indications: {
        position: "relative",
        display: "flex",
        width: '18rem',
        height: '30%',
        right: "23%",
        top: "35.5%",
        alignItems: 'center'
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
        position: "relative",
        display: "flex",
        width: '22rem',
        height: '40%',
        right: "15%",
        top: "28%",
        alignItems: 'center',
    },
    indicationsQrCardLogo: {
        border: "1px solid white",
        borderLeft: "none",
        width: { xs: "3rem", md: "4rem" },
        height: "155%"
    },
    indicationsNameContainer: {
        position: "relative",
        display: "flex",
        width: '22rem',
        height: '40%',
        left: "15%",
        top: "27%",
        alignItems: 'center',
    },
    imgQr: {
        width: "100%",
        height: "100%"
    },
    indicationsName: {
        border: "1px solid white",
        borderRight: "none",
        width: "4rem",
        height: "125%",
    }




}