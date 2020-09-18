import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import makeStyles from '@material-ui/core/styles/makeStyles';


const ResumeContentSkills = ({props}) => {

    const useCardStyles = makeStyles((theme) => ({
        root: {
            flex: 1,
            padding: theme.spacing(4),
            height: '100%',
        },
    }));

    const cardStyles = useCardStyles();

    const cardContents = [
        {   
            header: 'Languages',
            content: <><b>Proficient:</b> Java, Python, Javascript, HTML, CSS.<br/>
                <b>Capable:</b> SQL and Bash.</>, 
        },
        {   
            header: 'Software',
            content: <><b>Operating Systems:</b> Windows 10, Linux. <br/>
                <b>Libraries and Frameworks:</b> React, Jest, Material UI, Node, Express, Flask. <br/>
                <b>Tools:</b> Postgres, Webpack, AWS (Lambdas, API Gateway, RDS, EC2), Git. </>,
        },
        {
            header: 'General Knowledge',
            content: <ul>
                <li>Agile Project Management</li>
                <li>Production Deployment and Monitoring</li>
                <li>Object Oriented Programming</li>
                <li>Database Administration</li>
                <li>Full Stack Development</li>
                <li>Microservice and serverless architecture</li>
            </ul>  ,
        },
    ];

    const renderSkillsCard = (cardContent) => {
        return (
            <Card
                elevation={props.elevation}
                classes={cardStyles}>
                <CardHeader
                    classes={props.cardHeader}
                    title={cardContent.header}
                    titleTypographyProps={props.cardHeaderTypography}/>
                <CardContent>
                    <Typography variant="h6">
                        {cardContent.content}
                    </Typography>
                </CardContent>
            </Card>
        );
    };

    const renderSkills = () => {
        return (
            <Grid
                container
                spacing={2}>
                <Grid 
                    item 
                    container
                    spacing={2}
                    lg={6}>
                    <Grid
                        item
                        xs={12}>
                        {renderSkillsCard(cardContents[0])}
                    </Grid>
                    <Grid
                        item
                        xs={12}>
                        {renderSkillsCard(cardContents[1])}
                    </Grid>  
                </Grid>
                <Grid
                    item
                    container
                    className={props.gridItem}
                    lg={6}>
                    {renderSkillsCard(cardContents[2])}
                </Grid>
            </Grid>); 
    };

    return (
        <>
            {renderSkills()}
        </>
    );
};

export default ResumeContentSkills;