import React from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

const ResumeFadeContainer = ({childComponent}) => {
    
    const FadeProps = {
        fadeTimeout: {
            enter: 1000,
            exit: 1000,
        },
    };

    const renderFadeContainer = () => {
        return (
            <Fade
                in={true}
                timeout={FadeProps.fadeTimeout}>
                <Grid
                    container
                    style={{justifyContent: 'center'}}
                    spacing={2}>
                    {childComponent}
                </Grid>
            </Fade>
        );
    };

    return (
        <>
            {renderFadeContainer()}
        </>
    );
};

export default ResumeFadeContainer;
