import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

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
            description: <>Developed myself as a personal project. A web application that takes a text and returns word frequency to identify 
            commonly used words. It is integrated with a thesaurus API so that alternatives for overused words can be found.</>,
            technologies: 'HTML, CSS, React, REST API, AWS Lambda, Python.',
            codebase: 'https://github.com/jsantman29/vocab-expander',
            view: 'https://ve.jsantman29.me',
        },
        {
            name: 'Barebones Auction Site',
            description: <>Worked in a group with three other students to create a simple proof of concept for an auction website. 
            Led front and back end development by defining coding standards and system architecture.</>,
            technologies: 'HTML, CSS, Java, Javascript, JDBC, JSP, MySQL.',
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
                    titleTypographyProps={props.cardHeaderType}/>
                <CardContent>
                    <Typography variant="h6">
                        {project.description}
                    </Typography>
                    <br/>
                    <Typography variant="h6">
                        {project.technologies}
                    </Typography>
                </CardContent>
                
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

    const renderPage = () => {
        return (
            <Fade
                in={true}
                timeout={props.fadeTimeout}>
                <Grid
                    container
                    spacing={2}>
                    {renderProjects()}
                </Grid>
            </Fade>
        );
    };

    return (
        <>
            {renderPage()}
        </>
    );
};

export default ResumeContentProjects;
