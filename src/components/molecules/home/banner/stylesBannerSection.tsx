import { fonts } from "@/themes/fonts";


export const styles = {
    main: {
        width: "100%",
        height: { xs: "auto", md: "75vh" },
        minHeight: "450px",
        maxHeight: "800px",
        backgroundColor: "primary.main",

    },
    containerFirstSection: {
        height: "100%",
        width: "90%",
        // border: '1px solid red',
        padding: { md: "2% 5%", lg: "0", xl: "2% 0%" },
        color: "white",
        display: "flex",
        minHeight: "450px",
        flexDirection: { xs: "column", md: 'row' },
        alignItems: "center",
        justifyContent: 'center',
        textAlign: { xs: "center", md: "left" },
        pt: { xs: "22%", md: "5%" },
        paddingBottom:'0',
        maxWidth: "1900px",
        margin: "0 auto",

    },
    containerTitles: {
        //  border: '1px solid red',
    },
    title: {
        fontFamily: fonts.primary,
        fontSize: { xs: "2.5rem", md: '5rem' },
        fontWeight: 500
    },
    subtitle: {
        width: { lg: "90%", xl: "60%" },
        fontSize: { xs: '1.8rem', md: '4rem' },
        fontFamily: fonts.primary,
        fontWeight: 100,
        margin: { xs: "1% 0" }
        // border:'1px solid red',
    },
    containerImage: {
        width: { xs: "100%", md: "50%" },
        height: "100%",
        maxwidth: "1400px",
        display: "flex",
        alignItems: "center",
        mt: { xs: '0' },


    },

}