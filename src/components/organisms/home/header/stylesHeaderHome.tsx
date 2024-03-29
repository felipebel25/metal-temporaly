export const styles = {
  header: {
    // width: { xs: "100%", md: "99.5%" },
    position: "absolute",
    left: 0,
    right: 0,
    margin: "auto",
    height: { xs: "10%",md:"10%", xl: "8%" },
    zIndex: 2,
    backgroundColor: 'primary.main',


  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: "100%",
    maxWidth: "1670px",
    margin:"0 auto",
  },
  headerScroll: {
    width: "100%",
    height: { xs: "10%", md: "8%" },
    position: "absolute",
    zIndex: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: { xs: "3%", md: "0 4%" },
    backgroundColor: "primary.main",

  },
  linksContainer: {
    display: { xs: 'none', md: "flex" },
    width: "60%",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  containerBurgerIcon: {
    display: { md: "none" }
  },
  burguerIcon: {
    width: "3.3rem",
    height: "3.3rem"
  },
  logoSg: {
    width: { xs: "40%", md: "auto" },
    maxWidth: { xs: "200px", md: "none" },

  },
  button: {
    ml: "3.5%"
  },
  menu: {

  },
  menuItem: {
    width: "100%",
    fontSize: "1.7rem"
  },
  affiliate: {
    display: "flex",
    alignItems: "center"
  },
  textAffiliate: {
    cursor: "pointer"
  }
}


