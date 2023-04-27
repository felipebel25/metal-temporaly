import { fonts } from "@/themes/fonts";

export const styles = {
    main: {
        height: { xs: "75%", md: "28vh" },
        backgroundColor: 'primary.dark',
        padding: "1% 5%",
        paddingTop: "2%",
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
        width: "50%"
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
        border: "1px solid red",
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
        height: "30%",
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "center",
        flexDirection: { xs: "column-reverse", md: "row" },

    },
    containerIconsSocialLinks: {
        width: { xs: "100%", md: "10%" },
        height: { xs: "50%", md: "auto" },
        display: "flex",
        justifyContent: { xs: "center", md: "flex-end" },
        alignItems: "center",
    },
    iconSocialLink: {
        width: { xs: "30%", md: "25%" },
        height: { xs: "70%", md: "25%" },
        cursor: "pointer",
        margin: "0 2%",
        padding: "2%",
        mb: { xs: "2%" },
        '&:hover': {
            opacity: "0.5"
        }
    }
}