import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import theme from './theme';

const App = () => {
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            Butt
        </ThemeProvider>
    );
};

export default App;

