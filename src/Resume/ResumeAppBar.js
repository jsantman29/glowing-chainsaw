import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useAppBarStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    menuButton: {
        color: theme.palette.background,
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const ResumeAppBar = ({mobileOpen, handleDrawerToggle}) => {
    const appBarStyles = useAppBarStyles();

    const renderAppBar = () => {
        return (
            <AppBar
                className={appBarStyles.root}
                position="static"
            >
                <div position="fixed">
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={appBarStyles.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
            </AppBar>
        );
    };

    return (
        <>
            {renderAppBar()}
        </>
    );
};

export default ResumeAppBar;