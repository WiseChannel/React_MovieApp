import React, { useState } from 'react'

//import Config
import {
        POPULAR_BASE_URL,
        SEARCH_BASE_URL,
        IMAGE_BASE_URL,
        POSTER_SIZE,
        BACKDROP_SIZE
} from "../Config/config";

// import Components
import HeroImage from "./Elements/HeroImage";
import SearchBar from "./Elements/SearchBar";
import Grid from "./Elements/Grid";
import MovieThumb from "./Elements/MovieThumb";
import LoadMoreBtn from "./Elements/LoadMore";
import Spinner from "./Elements/Spinner";

//import custom hook
import { useHomeFetch } from "./Hooks/useHomeFetch";

import NoImage from './images/no_image.jpg'

// Component of the House that stores the method of searching for films and downloading new films
const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [
        {
            state: {movies, currentPage, totalPages, heroImage},
            loading,
            error
        },
        fetchMovies] = useHomeFetch(searchTerm);

    //Movie search method
    const searchMovies = search => {
      const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

      setSearchTerm(search);
      fetchMovies(endpoint)
    }

    //Movie upload method
    const loadMoreMovies = () => {

      const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
      const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1 }`;

        const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

        fetchMovies(endpoint);
      }

    //checking for errors and movie availability
    if(error) return <div>New error in Home</div>;
    if(!movies[0]) return <Spinner/>;

    //component render
    return (
        <>
        {!searchTerm && (
          <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
        )}
          <SearchBar
            callback={searchMovies}
          />
          <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
            {movies.map(movie => (
              <MovieThumb
                key={movie.id}
                clickable
                image={
                  movie.poster_path
                    ? IMAGE_BASE_URL +POSTER_SIZE + movie.poster_path
                    : NoImage
                }
                movieId={movie.id}
                movieName={movie.original_title}
              />
            ))}
          </Grid>
          {loading && <Spinner />}
          {currentPage < totalPages && !loading && (
            <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
          )}
        </>
      );
};

export default Home
