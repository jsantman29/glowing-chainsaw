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

    const renderSkills = () => {
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
                        <Card
                            elevation={props.elevation}
                            classes={cardStyles}>
                            <CardHeader
                                classes={props.cardHeader}
                                title={cardContents[0].header}
                                titleTypographyProps={props.cardHeaderTypography}/>
                            <CardContent>
                                <Typography variant="h6">
                                    {cardContents[0].content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid
                        item
                        xs={12}>
                        <Card
                            elevation={props.elevation}
                            classes={cardStyles}>
                            <CardHeader
                                classes={props.cardHeader}
                                title={cardContents[1].header}
                                titleTypographyProps={props.cardHeaderTypography}/>
                            <CardContent>
                                <Typography variant="h6">
                                    {cardContents[1].content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>  
                </Grid>
                <Grid
                    item
                    container
                    className={props.gridItem}
                    lg={6}>
                    <Card
                        elevation={props.elevation}
                        classes={cardStyles}>
                        <CardHeader
                            classes={props.cardHeader}
                            title={cardContents[2].header}
                            titleTypographyProps={props.cardHeaderTypography}/>
                        <CardContent>
                            <Typography variant="h6">
                                {cardContents[2].content}
                            </Typography>
                        </CardContent>
                    </Card>
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