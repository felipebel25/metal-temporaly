import { fonts } from '@/themes/fonts';

export const styles = {
    links: {
        color: '#FFFFFF',
        opacity: '0.6',
        margin: "0 1.25rem",
        fontFamily: fonts.secondary,
        fontSize: "1.6rem",
        fontWeight: 500,
        position: 'relative',
        textDecoration: 'none',
        cursor: "pointer",
        '&:hover': {
            opacity: "1",

            '&::after': {
                width: '100%',
                transition: 'width 0.3s ease-in-out',
            },
        },

        // '&:before': {
        //     content: "''",
        //     position: 'absolute',
        //     width: '0',
        //     height: '2px',
        //     bottom: '-3px',
        //     left: '50%',
        //     transform: 'translate(-50%,0%)',
        //     backgroundColor: 'blue',
        //     visibility: 'hidden',
        //     transition: 'all 0.3s ease-in-out',
        //   },
        //   '&:hover:before': {
        //     visibility: 'visible',
        //     width: '100%',
        //   },
        // '&:hover::before': {
        //     width: '100%'
        // },
        '&::before': {
            content: "''",
            position: 'absolute',
            display: 'block',
            width: '100%',
            height: '2px',
            bottom: 0,
            left: 0,
            backgroundColor: 'white',
            transform: 'scaleX(0)',
            transformOrigin: 'top right',
            transition: 'transform 0.3s ease',
        },
        '&:hover::before': {
            visibility: 'visible',
            transform: 'scaleX(1)',
        },
    }


}
