import React, { useState, useEffect } from 'react';
import { countCharacters, countWords } from './js/vocabulary_expander_library';
import makeStyles from '@material-ui/core/styles/makeStyles';
import InputBase from '@material-ui/core/InputBase';


function VocabularyExpanderTextBox({text, setText}) {

    const [ wordCount, setWordCount ] = useState(0);
    const [ characterCount, setCharacterCount ] = useState(0);

    useEffect( () => {
        setCharacterCount(countCharacters(text));
        setWordCount(countWords(text));
    }, [text]);

    const useTextBoxStyles = makeStyles((theme) => ({
        root: {
            borderRadius: '25px',
            background: theme.palette.primary.main,
            boxShadow: 'inset 5px 5px 10px #e3e3e3, inset -5px -5px 10px #ffffff',
            padding: theme.spacing(3),
        },
    }));

    const handleTextChange = (event) => {
        const string = event.target.value;
        setText(string);
    };

    const renderTextStats = () => {
        return (
            <body>
                Word Count: {wordCount}
                <br />
                Character Count: {characterCount}
            </body>
        );
    };

    const textBoxStyles = useTextBoxStyles();

    return (
        <InputBase
            classes={textBoxStyles}
            value={text || ''}
            multiline
            rows={10}
            label="Enter text here..."
            onChange={handleTextChange}
        />
    );

}

export default VocabularyExpanderTextBox;