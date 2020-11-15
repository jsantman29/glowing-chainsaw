import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ResumeContentSkills from './ResumeContentSkills';
import ResumeContentProjects from './ResumeContentProjects';
import ResumeContentHome from './ResumeContentHome';
import ResumeContentWorkExperience from './ResumeContentWorkExperience';

const ResumeContent = ({drawerWidth, contentType, setPageType}) => {
    
    const useGridStyles = makeStyles((theme) => ({
        root: {
            [theme.breakpoints.up('sm', 'xl')]: {
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            },
            [theme.breakpoints.up('md')]: {
                paddingLeft: drawerWidth + theme.spacing(20),
                padding: theme.spacing(16),
            },
            [theme.breakpoints.only('sm')]: {
                paddingLeft: drawerWidth + theme.spacing(4),
                padding: theme.spacing(4),
            },
            padding: '24px',
        },
        item: {
            display: 'flex',
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
        cardHeaderTypography: {variant: 'h5'},
        cardSubheaderTypography: {color: 'textPrimary'},
        gridItem: gridStyles.item,
    };

    const renderResumeContent = () => {
        let content;
        switch(contentType) {
        case 'Home':
            content = <ResumeContentHome props={props}/>;
            break;
        case 'Work Experience':
            content = <ResumeContentWorkExperience props={props} setPageType={setPageType}/>;
            break;
        case 'Projects':
            content = <ResumeContentProjects props={props} setPageType={setPageType}/>;
            break;
        case 'Skills':
            content = <ResumeContentSkills props={props}/>;
            break;
        default:
            content = <ResumeContentHome props={props}/>;
            break;
        }
        return (
            <Grid 
                className={gridStyles.root}
                container>
                <Grid
                    container
                    spacing={2}>
                    {content}
                </Grid>

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