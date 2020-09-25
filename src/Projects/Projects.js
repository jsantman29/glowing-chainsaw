import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import VocabularyExpander from './Vocabulary/VocabularyExpander';

const Projects = ({pageType, setPageType}) => {

    const useBoxStyles = makeStyles((theme) => ({
        root: {
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }));

    const boxStyles = useBoxStyles();

    const renderProjects = () => {
        switch(pageType) {
        case'VocabularyExpander':
            return <VocabularyExpander setPageType={setPageType}/>;
        default:
            return ( 
                <Box className={boxStyles.root}>
                        Error.
                </Box>
            );
        }
    };

    return (
        <>
            {renderProjects()}
        </>
    );
};

export default Projects;