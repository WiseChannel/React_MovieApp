
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd4e9e87f14a720e32c310104fc6d3f6b';
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;        
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

//const API_KEYV4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGU5ZTg3ZjE0YTcyMGUzMmMzMTAxMDRmYzZkM2Y2YiIsInN1YiI6IjVlNmQzNWZhMTQyZWYxMDAxNzdmMmIwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VoEnnJLd2a59uCsg-siVhpX1YiqXK7w-Ea8P1TA4qW4'

const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w500';

export {
    API_KEY,
    API_URL,
    BACKDROP_SIZE,
    POSTER_SIZE,
    IMAGE_BASE_URL,
    SEARCH_BASE_URL,
    POPULAR_BASE_URL
}

