import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1A403C',
            dark: '#173936',
        },
        secondary: {
            light: '#4C647A',
            main: '#3D5062',
            dark: '#31404E',
        },
        tertiary: {
            light: '#7590a9',
            main: '#65839f',
        },
        text: {
            primary: '#F2F2F2',
        },
        background: {
            paper: '#1A403C',
            default: '#0C2621',
        },
    },
    typography: {
        fontFamily: '"Source Sans Pro", "Roboto", "Helvetica", "Arial", sans-serif',
        h2: {
            fontWeight: 200,
        },
        h3: {
            fontWeight: 200,
        },
        h5: {
            fontWeight: 400,
        },
        h6: {
            fontWeight: 300,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 820,
            md: 1000,
            lg: 1600,
            xl: 1920,
        },
    },
});

const responsiveFontTheme = responsiveFontSizes(theme);

export default responsiveFontTheme;