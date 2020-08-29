import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ResumeContentSummary from './ResumeContentSummary';
import ResumeContentEducation from './ResumeContentEducation';
import ResumeContentSkills from './ResumeContentSkills';

const ResumeContent = ({drawerWidth, contentType, setPageType}) => {

    const useGridStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            [theme.breakpoints.up('sm')]: {
                paddingLeft: drawerWidth + theme.spacing(20),
                padding: theme.spacing(20),
            },
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(6),
        },
        item: {
            display: 'flex',
            flex: '1',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(2),
        },
    }));

    const useCardStyles = makeStyles((theme) => ({
        root: {
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
            break;
        default:
            content = <ResumeContentSkills props={props}/>;
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