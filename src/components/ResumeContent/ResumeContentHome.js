import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ResumeFadeContainer from './components/ResumeFadeContainer';

const ResumeContentHome = ({props}) => {

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
            header: 'Introduction',
            subheader: '',
            content: <>I'm John, a full stack engineer with a broad skillset. My greatest strength is that I have a strong foundation across many different tools and languages, coupled with the fact that I learn extremely quickly - this allows me to jump in to any environment and immediately start adding value. I seek out and conquer complex problems to apply what I know and to challenge myself so that I can always be improving. I enjoy learning from my peers and I am always excited to pick up new skills.</>, 
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
                <CardContent>
                    <Typography variant="h6" align="center">
                        {cardContent.content}
                    </Typography>
                </CardContent>
            </Card>
        );
    };

    const renderSummary = () => {
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
            <ResumeFadeContainer childComponent={renderSummary()}/>
        </>
    );
};

export default ResumeContentHome;