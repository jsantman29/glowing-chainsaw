import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';

const ResumeDrawerButton = ({buttonText, link}) => {

    const useButtonStyles = makeStyles((theme) => ({
        root: {
            flex: 1,
            width: '75%',
            backgroundColor: theme.palette.secondary.main,
            '&:hover': {
                backgroundColor: theme.palette.secondary.light,
            },
            borderRadius: '75px',
        },
    }));

    const buttonStyles = useButtonStyles();

    return (
        <Button 
            classes={buttonStyles}
            href={link}
            target="_self" 
            rel="noopener noreferrer">
            {buttonText}
        </Button>
    );
};

export default ResumeDrawerButton;