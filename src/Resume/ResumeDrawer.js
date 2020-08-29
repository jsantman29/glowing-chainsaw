import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import pic from './common/sprout.png';



const ResumeDrawer = ({drawerWidth, contentType, setContentType, mobileOpen, handleDrawerToggle}) => {

    const useStyles = makeStyles((theme) => ({
        image: {
            borderRadius: '50%',
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
            paddingLeft: theme.spacing(10),
            paddingRight: theme.spacing(10),
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(2.5),
        },
        linksContainer: {
            padding: theme.spacing(2),
        },
        link: {
            textAlign: 'center',
        },
    }));
  
    const useLinkStyles = makeStyles((theme) => ({
        root: {
            color: theme.palette.text.primary,
            '&:hover': {
                color: theme.palette.secondary.main,
            },
        },
        selected: {
            color: theme.palette.secondary.main,
            textDecoration: 'underline',
            '&:hover': {
                color: theme.palette.primary.main,
            },
        },
    }));

    const classes = useStyles();
    const boxStyles = useBoxStyles();
    const linkStyles = useLinkStyles();

    const name = 'JohnRobert Delos Santos';
    const title = 'Full Stack Engineer';
    const categories = [
        'Summary',
        'Education',
        'Skills',
        'Projects',
    ];

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

    const generateLinks = () => {
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
                  handleDrawerToggle();
              }}>
              {category}
          </Link>
      </Box>;
            
            links.push(link);
        });
        return links;
    };

    const renderNavigationBox = () => {
        const links = generateLinks();
        return (
            <Box className={boxStyles.linksContainer}>
                {links}
            </Box>
        );
    };

    const drawer = (
        <div>
            {renderTitleBox()}
            <Divider />
            {renderNavigationBox()}
            <Divider />
            <Box className={boxStyles.root}>
                <Link
                    href="#">
            Download Link Placeholder
                </Link>
            </Box>
        </div>
    );

    const drawerPaperProps = {elevation: 4};

    return (
        <>
            <Hidden smUp implementation="js">
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
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="js">
                <Drawer
                    classes={{
                        paperAnchorDockedLeft: classes.test,
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    PaperProps={drawerPaperProps}
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </>
    );
};

export default ResumeDrawer;
