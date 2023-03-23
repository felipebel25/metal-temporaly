import { createTheme } from '@mui/material/styles';
import { fonts } from './fonts';


export const lightTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#141414'
    },
    secondary: {
      main: '#ffff'
    },
    info: {
      main: '#181818'
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          height: 60
        },
      }
    },

    MuiTypography: {
      styleOverrides: {
        root:{
          color: 'white',
          fontFamily: fonts.primary,
          fontSize:"1.6rem",
        }, 
        h1: {
          fontSize: 30,
          fontWeight: 600
        },
        h2: {
          fontSize: 40,
          fontWeight: 400
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600
        },
        
      }
    },

    MuiButton: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
        disableElevation: true,
        color: 'info'
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: fonts.secondary,
          fontWeight: 600,
          fontSize: "1.4rem",
          boxShadow: 'none',
          color: "white",
          borderRadius: 0,
          padding: "0.8rem 1.5rem",
          margin: "1.25rem 0",
          border: "1px solid white",
          ":hover": {
          border: "1px solid white",
            transition: 'all 0.3s ease-in-out',
            opacity: "0.5"
          }
        }
      }
    },
    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        }
      }
    },

  }
});