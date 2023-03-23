import { fonts } from "@/themes/fonts";


export const styles = {
    main: {
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundImage: "radial-gradient(circle, rgb(0 0 0 / 55%) 0%, rgb(46 46 46) 5%),url(/images/home/background-metal.jpg)",
        backgroundBlendMode: 'overlay',
        mixBlendMode: 'overlay',
        // background: 'radial-gradient(circle, rgba(167,176,209,0.5284488795518207) 0%, rgba(87,94,118,0) 35%)',
        //  background: 'radial-gradient(circle, rgba(167,176,209,1) 0%, rgba(87,94,118,0) 15%)',
        backgroundRepeat: "no-repeat"
    },
    containerFirstSection: {
        height: "100%",
        width: "100%",
        // border: '1px solid red',
        padding: "2% 5%",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between'

    },
    containerTitles: {
        // border: '1px solid red',
    },
    title: {
        fontFamily: fonts.primary,
        fontSize: '5rem',
        fontWeight: 500
    },
    subtitle: {
        fontSize: '4rem',
        fontFamily: fonts.primary,
        fontWeight: 100,
        width: {lg:"90%" ,xl: "60%"},
        // border:'1px solid red',
    },
    containerImage: {
        width: "50%",
        height: "60%",
    },

}