/**
 * App helpers.
 */

/**
 * Api URL.
 * @type {string}
 */
const apiUrl = `http://www.omdbapi.com/?apiKey=${process.env.REACT_APP_API_KEY}`;

/**
 * Default search needle.
 * @type {string}
 */
const defaultSearchNeedle = 'Simpsons';

export {apiUrl, defaultSearchNeedle};
