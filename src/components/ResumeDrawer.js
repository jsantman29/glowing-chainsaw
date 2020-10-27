import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';

import pic from '../common/resumePfp.png';
import ResumeDrawerIconButtons from './ResumeDrawerIconButtons';

const ResumeDrawer = ({drawerWidth, contentType, setContentType, mobileOpen, handleDrawerToggle}) => {

    const name = 'JohnRobert Delos Santos';
    const title = 'Full Stack Engineer';

    const [ selectedIndex, setSelectedIndex ] = useState(0);

    const useStyles = makeStyles((theme) => ({
        image: {
            borderRadius: '50% !important',
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
        docked: {
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
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        iconButtonsContainer: {
            display: 'flex',
            justifyContent: 'flex-start',
            backgroundColor: theme.palette.primary.dark,
            width: '100%',
            flex: '1',
        },
    }));
  
    const useSectionLinkStyles = makeStyles((theme) => ({
        root: {
            textAlign: 'center',
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.text.primary,
            marginBottom: '1px',
            WebkitBoxShadow: '0 4px 6px -6px #222',
            MozBoxShadow: '0 4px 6px -6px #222',
            boxShadow: '0 4px 6px -6px #222',
            '&:hover': {
                backgroundColor: theme.palette.secondary.light,
            },
        },
        selected: {
            '&.Mui-selected': {
                backgroundColor: theme.palette.secondary.dark,
                '&:hover': {
                    backgroundColor: theme.palette.secondary.dark,
                },
            },
        },
        customList: {
            paddingBottom: '0px',
        },
    }));

    const classes = useStyles();
    const boxStyles = useBoxStyles();
    const sectionLinkStyles = useSectionLinkStyles();
    const sectionLinkTypographyProps = {variant: 'h6'};
    const drawerPaperProps = {elevation: 6};

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

    const handleListItemClick = (event, category, index, isMobile) => {
        setSelectedIndex(index);
        setContentType(category);
        if (isMobile) {
            handleDrawerToggle();
        }
    };

    const generateSectionLinks = (isMobile) => {

        const categories = [
            'Home',
            'Skills',
            'Projects',
        ];

        const links = [];
        let link;
        categories.forEach((category, index) => {
            link = 
                <ListItem
                    button
                    classes={sectionLinkStyles}
                    selected={selectedIndex === index}
                    onClick={(event) => handleListItemClick(event, category, index, isMobile)}>
                    <ListItemText
                        primaryTypographyProps={sectionLinkTypographyProps}>
                        {category}
                    </ListItemText>
                </ListItem>;
            
            links.push(link);
        });
        return links;
    };

    const renderSectionNavigation = (isMobile) => {
        const links = generateSectionLinks(isMobile);
        return (
            <List
                className={sectionLinkStyles.customList}>
                {links}
            </List>
        );
    };

    const renderIconButtonsContainer = () => {
        return (
            <Box
                className={boxStyles.iconButtonsContainer}>
                    <ResumeDrawerIconButtons/>
            </Box>
        );
    };

    const buildDrawer = (isMobile) => {
        return ( 
            <>
                {renderTitleBox()}
                {renderSectionNavigation(isMobile)}
                {renderIconButtonsContainer()}
            </> 
        );
    };

    const renderDrawer = () => {
        return (
            <Hidden smDown implementation="js">
                <Drawer
                    classes={{
                        paperAnchorDockedLeft: classes.docked,
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    PaperProps={drawerPaperProps}
                    open
                >
                    {buildDrawer(false)}
                </Drawer>
            </Hidden>
        );
    };

    const renderMobileDrawer = () => {
        return (
            <Hidden mdUp implementation="js">
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paperAnchorDockedLeft: classes.docked,
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    {buildDrawer(true)}
                </Drawer>
            </Hidden>
        );
    };


    return (
        <>
            {renderMobileDrawer()}
            {renderDrawer()}
        </>
    );
};

export default ResumeDrawer;
