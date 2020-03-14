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
    const [{state, loading, error}, fetchMovies] = useHomeFetch();
    console.log(state)

    return(
        <>
         <HeroImage/>
         <SearchBar/>
         <Grid/>
         <MovieThumb/>
         <Spinner/>
         <LoadMore/>
        </>
    )
};

export default Home
