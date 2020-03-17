import React, { useState, useEffect } from 'react'
import {
        API_URL,
        API_KEY,
        IMAGE_BASE_URL,
        POSTER_SIZE,
        BACKDROP_SIZE
} from "../Config/config";

// import Components
import HeroImage from "./Elements/HeroImage";
import SearchBar from "./Elements/SearchBar";
import Grid from "./Elements/Grid";
import MovieThumb from "./Elements/MovieThumb";
import LoadMore from "./Elements/LoadMore";
import Spinner from "./Elements/Spinner";

//import custom hook
import { useHomeFetch } from "./Hooks/useHomeFetch";

const Home = () => {
    const [{ state, loading, error }, fetchMovies] = useHomeFetch();
    console.log(state)

    if(error) return <div>New error in Home</div>

    if(!state.movies[0]) return <Spinner/>

    return(
        <>
         <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
            title={state.heroImage.original_title}
            text={state.heroImage.overview}
         />
         <SearchBar/>
         <Grid/>
         <MovieThumb/>
         <Spinner/>
         <LoadMore/>
        </>
    )
};

export default Home
