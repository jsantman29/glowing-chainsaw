import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ResumeFadeContainer from './components/ResumeFadeContainer';
import ResumeCardContent from './components/ResumeCardContent';

const ResumeContentWorkExperience = ({props}) => {

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
            header: 'SarVia Group',
            subheader: 'August 2020 - Present',
            bulletPoints: [
                'Worked on an agile team as a contracted software engineer',
                'Developed a mobile app for a subscription based cigar business using React Native, Expo, Python, Flask, Postgres, Firebase and AWS',
                'Developed a web based application for a construction contracting conglomerate to manage data on different job sites using React, Node.js, Express, Cassandra, and AWS',
                'Managed the CI/CD and production deployments for both the mobile app and web app',
                'Wrote and reviewed technical documentation for both projects',
            ],
        },
    ];

    const renderCard = (cardContent) => {
        return (
            <Card
                elevation={props.elevation}
                classes={cardStyles}>
                <CardHeader
                    classes={props.cardHeader}
                    title={cardContent.header}
                    titleTypographyProps={props.cardHeaderTypography}
                    subheader={cardContent.subheader}
                    subheaderTypographyProps={props.cardSubheaderTypography}/>
                <ResumeCardContent bulletPoints={cardContent.bulletPoints}/>
            </Card>
        );
    };

    const renderWork = () => {
        return (
            <>  
                <Grid
                    item
                    className={props.gridItem}
                    lg={6}
                    xs={12}>
                    {renderCard(cardContents[0])}
                </Grid>
            </>
        );
    };

    return (
        <>
            <ResumeFadeContainer childComponent={renderWork()}/>
        </>
    );
};

export default ResumeContentWorkExperience;