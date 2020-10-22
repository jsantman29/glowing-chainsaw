import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import pic from '../common/resumePic.png';
import ResumeDrawerButton from './ResumeDrawerButton';
import { render } from '@testing-library/react';


const ResumeDrawer = ({drawerWidth, contentType, setContentType, mobileOpen, handleDrawerToggle}) => {

    const name = 'JohnRobert Delos Santos';
    const title = 'Full Stack Engineer';

    const useStyles = makeStyles((theme) => ({
        image: {
            borderRadius: '25px',
            width: '100%',
            height: 'auto',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        drawerPaper: {
            width: drawerWidth,
        },
        test: {
            borderRight: '0px',
        },
        padded: {
            padding: theme.spacing(3),
        },
    }));
  
    const useBoxStyles = makeStyles((theme) => ({
        root: {
            textAlign: 'center',
        },
        image: {
            paddingLeft: theme.spacing(7),
            paddingRight: theme.spacing(7),
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(2.5),
        },
        linksContainer: {
            padding: theme.spacing(2),
        },
        link: {
            textAlign: 'center',
        },
        button: {
            display: 'flex',
            padding: theme.spacing(1),
            alignItems: 'center',
        },
    }));
  
    const useLinkStyles = makeStyles((theme) => ({
        root: {
            color: theme.palette.text.primary,
            '&:hover': {
                color: theme.palette.primary.light,
            },
        },
        selected: {
            color: theme.palette.primary.light,
            textDecoration: 'underline',
            '&:hover': {
                color: theme.palette.primary.main,
            },
        },
    }));

    const useDividerStyles = makeStyles((theme) => ({
        root: {
            height: '2px',
        },
    }));

    const classes = useStyles();
    const boxStyles = useBoxStyles();
    const linkStyles = useLinkStyles();
    const dividerStyles = useDividerStyles();

    const renderTitleBox = () => {
        return (
            <Box className={boxStyles.root}>
                <Box className={boxStyles.image}>
                    <img src={pic} className={classes.image} alt="Profile"/>
                </Box>
                <Box className={boxStyles.root}>
                    <Typography
                        variant="h5"
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant="h6"
                    >
                        {title}
                    </Typography>
                </Box>
            </Box>
        );
    };

    const generateLinks = (isMobile) => {

        const categories = [
            'Home',
            'Skills',
            'Projects',
        ];

        const links = [];
        let link;
        categories.forEach(category => {
            link = 
                <Box className={boxStyles.link}>
                    <Link 
                        className={contentType === category ? linkStyles.selected : linkStyles.root}
                        component="button"
                        variant="h6"
                        onClick={() => {
                            setContentType(category);
                            if( isMobile ) {
                                handleDrawerToggle();
                            }
                        }}>
                        {category}
                    </Link>
                </Box>;
            
            links.push(link);
        });
        return links;
    };

    const renderButtons = () => {

        const renderedButtons = [];

        const buttonData = [
            {
                'text': 'Github',
                'link': 'https://github.com/jsantman29',
            },
            {
                'text': 'Resume',
                'link': '/jdelossantos_resume.pdf',
            },
            {
                'text': 'Email',
                'link': 'mailto:nacljohn2@pm.me',
            },
        ];

        buttonData.forEach((button) => {
            renderedButtons.push(
                <Box className={boxStyles.button}>
                    <ResumeDrawerButton
                        buttonText={button.text}
                        link={button.link}
                    />
                </Box>,
            );
        });

        return renderedButtons;
    };

    const renderNavigationBox = (isMobile) => {
        const links = generateLinks(isMobile);
        return (
            <Box className={boxStyles.linksContainer}>
                {links}
            </Box>
        );
    };

    const buildDrawer = (isMobile) => {
        return ( <div>
            {renderTitleBox()}
            <Divider classes={dividerStyles} />
            {renderNavigationBox(isMobile)}
            <Divider classes={dividerStyles} />
            {renderButtons()}
        </div> );
    };

    const drawerPaperProps = {elevation: 6};

    return (
        <>
            <Hidden mdUp implementation="js">
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paperAnchorDockedLeft: classes.test,
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    {buildDrawer(true)}
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="js">
                <Drawer
                    classes={{
                        paperAnchorDockedLeft: classes.test,
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    PaperProps={drawerPaperProps}
                    open
                >
                    {buildDrawer(false)}
                </Drawer>
            </Hidden>
        </>
    );
};

export default ResumeDrawer;
