import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';

import IconButton from '@material-ui/core/IconButton';
import DescriptionIcon from '@material-ui/icons/Description';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';

const ResumeDrawerIconButtons = () => {

    const useGridContainerStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: theme.palette.primary.dark,
        },
    }));

    const useGridItemStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            alignItems: 'center',
        },
    }));

    const useButtonStyles = makeStyles((theme) => ({
        root: {
            flex: 1,
            borderRadius: '50%',
            fontSize: '3rem',
            color: theme.palette.secondary.main,
            '&:hover': {
                color: theme.palette.secondary.light,
            },
        },
        label: {
            '& > svg': {
                fontSize: 'inherit',
            },
        },
    }));

    const buttonStyles = useButtonStyles();
    const gridItemStyles = useGridItemStyles();
    const gridContainerStyles = useGridContainerStyles();

    const buttonData = [
        {
            'text': 'Resume',
            'link': '/jdelossantos_resume.pdf',
            'icon': <DescriptionIcon/>,
        },
        {
            'text': 'Email',
            'link': 'mailto:nacljohn2@pm.me',
            'icon': <EmailIcon/>,
        },
        {
            'text': 'Github',
            'link': 'https://github.com/jsantman29',
            'icon': <GitHubIcon/>,
        },
        {
            'text': 'Source Code',
            'link': 'https://github.com/jsantman29/glowing-chainsaw',
            'icon': <CodeIcon/>,
        },
    ];

    const renderIconButton = (text, link, icon) => {
        return (
            <IconButton
                classes={buttonStyles}
                href={link}
                target="_self"
                rel="noopener noreferrer"
                aria-label={text}>
                {icon}
            </IconButton>
        );
    };

    const renderIconButtonContainer = () => {
        const buttons = [];
        buttonData.forEach((button) => {
            buttons.push(
                <Grid 
                    classes={gridItemStyles} 
                    item xs={3}>
                    {renderIconButton(button.text, button.link, button.icon)}
                </Grid>,
            );
        });

        return (
            <Grid
                classes={gridContainerStyles}
                container 
                spacing={0}>
                {buttons}
            </Grid>
        );
    };


    return (
        <>
            {renderIconButtonContainer()}
        </>
    );
};

export default ResumeDrawerIconButtons;