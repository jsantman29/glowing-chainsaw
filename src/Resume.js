import React, { useState } from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';
import ResumeAppBar from './components/ResumeAppBar';
import ResumeDrawer from './components/ResumeDrawer';
import ResumeContent from './components/ResumeContent/ResumeContent';

const Resume = ({setPageType}) => {

    const [ contentType, setContentType ] = useState('Home');
    const [ mobileOpen, setMobileOpen ] = useState(false);

    const drawerWidth = 320;
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const renderResume = () => {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <ResumeAppBar
                    handleDrawerToggle={handleDrawerToggle}
                />
                    
                <ResumeDrawer
                    drawerWidth={drawerWidth}
                    contentType={contentType}
                    setContentType={setContentType}
                    mobileOpen={mobileOpen}
                    handleDrawerToggle={handleDrawerToggle}
                />
                <ResumeContent
                    drawerWidth={drawerWidth}
                    contentType={contentType}
                    setPageType={setPageType}
                />
            </ThemeProvider>       
        );
    };

    return (
        <>
            {renderResume()}
        </>
    );
};

export default Resume;