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
        width: {xs:"100%", md:"90%"},
        padding: { md: "2% 5%", lg: "0", xl: "2% 0%" },
        color: "white",
        minHeight: "450px",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: 'row' },
        justifyContent: 'center',
        alignItems: "center",
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
        width: { xs: "162vw", sm:"120vw", md: "50%" },
        height: {xs:"auto", sm:"100%"},
        position:{xs:"relative", md: "inherit"},
        maxwidth: "1400px",

        mr:{xs:"2rem", md:"0"},
        display: "flex",
        alignItems: "center",
        mt: { xs: '-6.5%', sm:"0" },



    },

}