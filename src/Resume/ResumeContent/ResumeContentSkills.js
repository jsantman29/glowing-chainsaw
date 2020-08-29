import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';


const ResumeContentSkills = ({props}) => {
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

        const cards = [];
        cardContents.forEach((cardContent) => {
            cards.push(
                <Grid item className={props.gridItem} xs={12} s={4}>
                    <Card
                        elevation={props.elevation}
                        classes={props.card}>
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
                </Grid>);
        });
        return cards;
    };

    return (
        <>
            {renderSkills()}
        </>
    );
};

export default ResumeContentSkills;