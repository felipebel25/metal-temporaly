import { fonts } from "@/themes/fonts";

export const styles = {
    main: {
        height: { xs: "60rem", sm: "80rem", md: "28vh" },
        backgroundColor: 'primary.dark',
        padding: "1% 5%",
        paddingTop: "2%",
        maxWidth: "2000px",
        margin: "0 auto",
        paddingBottom: { xs: "20%", sm: "10%", md: "0" },

    },
    contactSection: {
        borderBottom: "0.5px solid #FFFFFF",
        height: "70%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "" },
        alignItems: { xs: "center", md: "" },

    },
    contactSectionImage: {
        width: "50%",
        display: "flex",
        mb: { xs: "3%", md: "0" },
        justifyContent: { xs: "center", md: "flex-start" }
    },
    contactSectionContact: {
        width: "50%"
    },
    contactTitle: {
        fontSize: "1.6rem",
        fontWeight: 500,
        marginBottom: '5%'

    },
    contactLinks: {
        fontSize: "1.4rem",
        fontWeight: 400,
        fontFamily: fonts.secondary,
        marginBottom: { xs: "5.5%", md: "3%" },
        width: { md: "fit-content" },
        cursor: "pointer",
        '&:hover': {
            opacity: "0.8"
        }

    },
    optionContactLink: {
        width: 'auto',
    },
    containerContacts: {
        width: { xs: "90%", md: "50%" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "flex-start" },
        textAlign: { xs: "center", md: "left" }

    },
    contactSocialLinks: {
        display: "flex",
        width: "100%",
        height: { md: "30%" },
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "center",
        flexDirection: { xs: "column-reverse", md: "row" },

    },
    containerIconsSocialLinks: {
        width: { xs: "75%", md: "10%" },
        height: { xs: "auto", md: "auto" },
        display: "flex",
        m:{xs:"2rem", md:"0"},
        justifyContent: { xs: "center", md: "flex-end" },
        alignItems: "center",
        flexWrap: { xs: "wrap", md: "nowrap" },
    },
    iconSocialLink: {
        width: { xs: "6rem", md: "25%" },
        height: { xs: "auto", md: "25%" },
        cursor: "pointer",
        margin: "0 2%",
        padding: "2%",
        mb: { xs: "2%" },
        '&:hover': {
            opacity: "0.5"
        }
    }
}