import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ResumeCardContent from './components/ResumeCardContent';
import ResumeFadeContainer from './components/ResumeFadeContainer';

const ResumeContentProjects = ({props, setPageType}) => {

    const useCardStyles = makeStyles((theme) => ({
        root: {
            flex: 1,
            padding: theme.spacing(4),
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
    }));

    const useCardActionStyles = makeStyles((theme) => ({
        root: {
            justifyContent: 'space-evenly',
            marginTop: 'auto',
        },
    }));

    const useButtonStyles = makeStyles((theme) => ({
        root: {
            flex: 1,
            backgroundColor: theme.palette.secondary.main,
            '&:hover': {
                backgroundColor: theme.palette.secondary.light,
            },
            maxWidth: '25%',
            borderRadius: '5px',
        },
    }));

    const cardStyles = useCardStyles();
    const cardActionStyles = useCardActionStyles();
    const buttonStyles = useButtonStyles();

    const projects = [
        {
            name: 'Vocabulary Expander',
            bulletPoints: [
                'Created a web application that takes a text and returns word frequency to identify commonly used words using HTML, CSS, and React',
                'Implemented text filtering and thesaurus functionality using a REST API deployed in Amazon API Gateway with a backend built using AWS Lambdas and Python',
            ],
            codebase: 'https://github.com/jsantman29/vocab-expander',
            view: 'https://ve.jsantman29.me',
        },
        {
            name: 'Barebones Auction Site',
            bulletPoints: [
                'Worked in a group with three other students to create a simple auction website',
                'Guided development by defining coding standards and system architecture using MVC',
                'Designed and implemented the front end using HTML, CSS, Javascript, and JSP with tag files for easy templating',
                'Implemented the back end using Java, JDBC, and MySQL',
            ],
            codebase: 'https://github.com/jsantman29/purple-shovel',
            view: null,
        },
    ];

    const renderProjectCardActions = (project) => {
        const buttons = [];
        
        buttons.push(
            <Button 
                size="large"
                classes={buttonStyles} 
                href={project.codebase}
                target="_self" 
                rel="noopener noreferrer">
                    Code
            </Button>);

        if (project.view !== null) {
            buttons.push(
                <Button
                    size="large"
                    classes={buttonStyles} 
                    href={project.view}
                    target="_self" 
                    rel="noopener noreferrer">
                        View
                </Button>);
        }

        return (
            <CardActions classes={cardActionStyles}>
                {buttons}
            </CardActions>
        );
    };

    const renderProjectCard = (project) => {
        return (
            <Card
                elevation={props.elevation}
                classes={cardStyles}>
                <CardHeader
                    classes={props.cardHeader}
                    title={project.name}
                    titleTypographyProps={props.cardHeaderTypography}/>
                <ResumeCardContent bulletPoints={project.bulletPoints}/>
                {renderProjectCardActions(project)}
            </Card>
        );
    };

    const renderProjects = () => {
        return (
            <>
                <Grid item xs={12} lg={6}>
                    {renderProjectCard(projects[0])}
                </Grid>
                <Grid item xs={12} lg={6}>
                    {renderProjectCard(projects[1])}
                </Grid>
            </>
            
        );
    };

    return (
        <>
            <ResumeFadeContainer childComponent={renderProjects()}/>
        </>
    );
};

export default ResumeContentProjects;
