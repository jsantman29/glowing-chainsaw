import { get } from '../../common/js/http';

const API_ROOT = process.env.REACT_APP_TEXT_API_ROOT;
const API_KEY = process.env.REACT_APP_TEXT_API_KEY;

/* Requesting from the API. */

export const buildRequest = () => {
    const url = API_ROOT;
    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
    };
    return [url, headers];
};

export const postFilteredText = (text) => {
    const [url, headers] = buildRequest();
    
    return fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            text: text,
        }),
    });
};

/* Handling data from the API. */