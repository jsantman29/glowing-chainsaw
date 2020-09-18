/* A generic library for making HTTP requests. */

export const get = (url, headers) => {
    return fetch(url, {
        method: 'GET',
        headers: headers,
    });
};