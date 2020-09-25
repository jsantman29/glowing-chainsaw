import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';


const ResumeContentSummary = ({props}) => {
    const renderSummary = () => {
        const summaryHeader = 'Summary';
        const summaryText = 'A full stack engineer with a broad skillset. My greatest strength is that I have a strong foundation across many different tools and languages, coupled with the fact that I learn extremely quickly - this allows me to jump in to any environment and immediately start adding value, well above what is expected of a junior level engineer. I seek out and conquer complex problems to apply what I know and to challenge myself so that I can always be improving.';
        return (
            <Grid item className={props.gridItem} xs={12}>
                <Card
                    elevation={props.elevation}
                    classes={props.card}>
                    <CardHeader
                        classes={props.cardHeader}
                        title={summaryHeader}
                        titleTypographyProps={props.cardHeaderTypography}/>
                    <CardContent>
                        <Typography variant="h6">
                            {summaryText}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    };

    return (
        <>
            {renderSummary()}
        </>
    );
};

export default ResumeContentSummary;