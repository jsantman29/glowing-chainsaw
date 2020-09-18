import { get } from '../../common/js/http';

const API_ROOT = 'https://wordsapiv1.p.rapidapi.com/words';
const API_HOST = 'wordsapiv1.p.rapidapi.com';
const API_KEY = process.env.REACT_APP_WORDS_API_KEY;

/* Requesting from the API. */

export const buildRequest = (endpoint) => {
    const url = API_ROOT + endpoint;
    const headers = {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY,
    };
    return [url, headers];
};

export const getSynonyms = (word) => {
    const [url, headers] = buildRequest(`/${word}/synonyms`);
    //alert(url);
    //alert(JSON.stringify(headers));
    return get(url, headers);
};

/* Handling data from the API. */