// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = 'https://api.themoviedb.org/3/'; // Base URL for the TMDB API
const API_KEY = process.env.REACT_APP_API_KEY; // API key obtained from environment variables

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`; // Base URL for movie search
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`; // Base URL for popular movies

// For login and voting
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`; // URL to request a new token
const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`; // URL to validate token with login credentials
const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`; // URL to obtain a new session ID

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/'; // Base URL for movie images
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280'; // Size for backdrop images
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780'; // Size for poster images

// Exported configuration variables
export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
};
