import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const ResumeContentEducation = ({props}) => {

    const renderEducation = () => {
        const header = 'Rutgers University';
        const subheader = 'Sept 2017 - May 2020';
        const content = <><b>Major:</b> Computer Science<br/>
            <b>GPA:</b> 3.635<br/>
            <b>Honors:</b> Cum Laude</>;
        return (
            <Grid item className={props.gridItem} xs={12}>
                <Card
                    elevation={props.elevation}
                    classes={props.card}>
                    <CardHeader
                        classes={props.cardHeader}
                        title={header}
                        titleTypographyProps={props.cardHeaderTypography}
                        subheader={subheader}
                        subheaderTypographyProps={props.cardSubheaderTypography}/>
                    <CardContent>
                        <Typography variant="h6">
                            {content}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    };

    return (
        <>
            {renderEducation()}
        </>
    );
};

export default ResumeContentEducation;