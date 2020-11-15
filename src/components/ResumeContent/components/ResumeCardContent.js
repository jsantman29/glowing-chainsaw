import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const ResumeCardContent = ({bulletPoints = []}) => {

    ResumeCardContent.propTypes = {
        bulletPoints: PropTypes.arrayOf(PropTypes.string),
    };

    const generateListItems = () => {
        const list = bulletPoints;
        const listItems = [];
        list.forEach((content) => {
            listItems.push(<li>{content}</li>);
        });
        return listItems;
    };

    const renderCardContent = () => {
        return (
            <Typography variant="h6">
                <ul>
                    {generateListItems()}
                </ul>
            </Typography>
        );
    };

    return (
        <>
            {renderCardContent()}
        </>
    );

   
};

export default ResumeCardContent;