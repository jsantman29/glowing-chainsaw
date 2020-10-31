import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

import ResumeContentSkills from './ResumeContentSkills';
import ResumeContentProjects from './ResumeContentProjects';
import ResumeContentHome from './ResumeContentHome';

const ResumeContent = ({drawerWidth, contentType, setPageType}) => {
    
    const useGridStyles = makeStyles((theme) => ({
        root: {
            [theme.breakpoints.up('md')]: {
                paddingLeft: drawerWidth + theme.spacing(20),
                padding: theme.spacing(16),
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            },
            padding: theme.spacing(2),
        },
        item: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }));

    const useCardStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            padding: theme.spacing(4),
            maxWidth: '760px',
        },
    }));

    const useCardHeaderStyles = makeStyles((theme) => ({
        root: {
            padding: theme.spacing(0),
        },
        title: {
            textAlign: 'center',
        },
        content: {
            textAlign: 'center',
        },
    }));

    const gridStyles = useGridStyles();

    const props = {
        card: useCardStyles(),
        elevation: 6,
        cardHeader: useCardHeaderStyles(),
        cardHeaderTypography: {variant: 'h4'},
        cardSubheaderTypography: {color: 'textPrimary'},
        gridItem: gridStyles.item,
        fadeTimeout: {
            enter: 1000,
            exit: 1000,
        },
    };

    const renderResumeContent = () => {
        let content;
        switch(contentType) {
        case 'Home':
            content = <ResumeContentHome props={props}/>;
            break;
        case 'Skills':
            content = <ResumeContentSkills props={props}/>;
            break;
        case 'Projects':
            content = <ResumeContentProjects props={props} setPageType={setPageType}/>;
            break;
        default:
            content = <ResumeContentHome props={props}/>;
            break;
        }
        return (
            <Grid 
                className={gridStyles.root}
                container>
                <Fade in={true} timeout={{enter: 2000, exit: 2000}}>

                    <Grid
                        container
                        spacing={2}>
                        {content}
                    </Grid>
                </Fade>

            </Grid>
        );
    };

    return (
        <>
            {renderResumeContent()}
        </>
    );
};

export default ResumeContent;