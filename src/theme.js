import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5F736F',
            light: '#798C87',
            dark: '#1A403C',
        },
        secondary: {
            main: '#535353',
            light: '#7f7f7f',
        },
        tertiary: {
            main: '#F2F2F2',
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
            sm: 770,
            md: 960,
            lg: 1400,
            xl: 1920,
        },
    },
});

const responsiveFontTheme = responsiveFontSizes(theme);

export default responsiveFontTheme;