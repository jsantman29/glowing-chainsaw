import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import pic from './common/sprout.png';
import ResumeDownloadButton from './ResumeDownloadButton';


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
        button: {
            display: 'flex',
            padding: theme.spacing(2),
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

    const generateLinks = (isMobile) => {
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
            <Box className={boxStyles.button}>
                <ResumeDownloadButton/>
            </Box>
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