import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ResumeContentSummary from './ResumeContentSummary';
import ResumeContentEducation from './ResumeContentEducation';
import ResumeContentSkills from './ResumeContentSkills';
import ResumeContentProjects from './ResumeContentProjects';

const ResumeContent = ({drawerWidth, contentType, setPageType}) => {

    const useGridStyles = makeStyles((theme) => ({
        root: {
            [theme.breakpoints.up('md')]: {
                paddingLeft: drawerWidth + theme.spacing(20),
                padding: theme.spacing(16),
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '0px',
            },
            marginTop: '50px',
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
    };

    const renderResumeContent = () => {
        let content;
        switch(contentType) {
        case 'Summary':
            content = <ResumeContentSummary props={props}/>;
            break;
        case 'Education':
            content = <ResumeContentEducation props={props}/>;
            break;
        case 'Skills':
            content = <ResumeContentSkills props={props}/>;
            break;
        case 'Projects':
            content = <ResumeContentProjects props={props} setPageType={setPageType}/>;
            break;
        default:
            content = <ResumeContentSummary props={props}/>;
            break;
        }
        return (
            <Grid 
                className={gridStyles.root}
                container>
                {content}
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