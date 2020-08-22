import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#348f6E',
            main: '#02734A',
            dark: '#025939',
        },
        secondary: {
            main: '#8C6464',
        },
        tertiary: {
            main: '#F1F2F0',
        },
        text: {
            primary: '#F1F2F0',
        },
        background: {
            paper: '#414141',
            paperLight: '#535353',
            default: '#2d2d2d',
        },
    },
    typography: {
        fontFamily: 'Baloo Tamma 2',
        h2: {
            fontWeight: 300,
        },
        h3: {
            fontWeight: 300,
        },
    },
});

const responsiveFontTheme = responsiveFontSizes(theme);

export default responsiveFontTheme;