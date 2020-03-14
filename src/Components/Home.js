import React from 'react'

// import Components
import HeroImage from "./Elements/HeroImage";
import SearchBar from "./Elements/SearchBar";
import Grid from "./Elements/Grid";
import MovieThumb from "./Elements/MovieThumb";
import LoadMore from "./Elements/LoadMore";
import Spinner from "./Elements/Spinner";

const Home = () => (
    <>
        <HeroImage/>
        <SearchBar/>
        <Grid/>
        <MovieThumb/>
        <Spinner/>
        <LoadMore/>
    </>
)

export default Home
