import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Box from '@material-ui/core/Box';
import './VocabularyExpander.css';
import { makeStyles } from '@material-ui/core/styles';
import { getWordFrequencies, getWords } from './js/vocabulary_expander_library';
import { postFilteredText } from './js/textAPI_library';

function VocabularyExpanderButtonContainer({text, setWordFrequencies, handleClear}) {

    const useButtonStyles = makeStyles((theme) => ({
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center',
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
        submitButton: {
            background: theme.palette.primary.main,
            boxShadow: '-3px 3px 5px #dcdcdc, 3px -3px 5px #ffffff',
        },
        clearButton: {
            background: theme.palette.primary.main,
            boxShadow: '-3px 3px 5px #dcdcdc, 3px -3px 5px #ffffff',
        },
    }));

    const generateWordFrequencies = () => {
        const words = getWords(text);
        setWordFrequencies(getWordFrequencies(words));
        // postFilteredText(text)
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then(responseJson => {
        //         words = responseJson.body;
        //         alert(words);
        //         //setWordFrequencies(getWordFrequencies(words));
        //     });
    };

    const buttonStyles = useButtonStyles();

    return (
        <Box className={buttonStyles.buttonContainer}>
            <div className="textButtons">
                <div className='veButtonCell'>
                    <Button 
                        size='large' 
                        className={buttonStyles.submitButton}
                        onClick={generateWordFrequencies}
                    >
                        Process
                    </Button>
                </div>
                <div className='veButtonCell'>
                    <Button 
                        size='large' 
                        className={buttonStyles.clearButton}
                        onClick={handleClear}
                    >
                        <DeleteRoundedIcon/>
                    </Button>
                </div>
            </div>
        </Box>
    );
}

export default VocabularyExpanderButtonContainer;