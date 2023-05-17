/**************************
 * App helpers.
 *************************/

/**
 * Api URL.
 * @type {string}
 */
const apiUrl = `https://www.omdbapi.com/?apiKey=${process.env.REACT_APP_API_KEY}`;

/**
 * Default search needle.
 * @type {string}
 */
const defaultSearchNeedle = 'Simpsons';

/**
 * Project repository
 * @type {string}
 */
const repo = 'https://github.com/vodolserge/react-tiny-app-movies/tree/release_23.3';

/**
 * React library link.
 * @type {string}
 */
const reactLibrary = 'https://react.dev/';

export {apiUrl, defaultSearchNeedle, repo, reactLibrary};
