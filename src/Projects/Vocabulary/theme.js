import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#798C87',
            main: '#F2F2F2',
            dark: '#F0F0F0',
        },
        secondary: {
            main: '#F2F2F2',
        },
        tertiary: {
            main: '#F2F2F2',
        },
        text: {
            primary: '#0d0d0d',
        },
        background: {
            paper: '#1A403C',
            paperLight: '#535353',
            default: '#F2F2F2',
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
            sm: 770,
            md: 960,
            lg: 1400,
            xl: 1920,
        },
    },
});

const responsiveFontTheme = responsiveFontSizes(theme);

export default responsiveFontTheme;