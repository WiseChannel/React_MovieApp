import React from 'react'

//Components
import Navigation from "./Elements/Navigation";
import MovieInfo from "./Elements/MovieInfo";
import MovieInfoBar from "./Elements/MovieInfoBar";
import Actor from "./Elements/Actor";
import Grid from "./Elements/Grid";
import Spinner from "./Elements/Spinner";

const Movie = ({ movieId }) => (
    <>
        <Navigation/>
        <MovieInfo/>
        <MovieInfoBar/>
        <Grid>
            <Actor/>
        </Grid>
        <Spinner/>
    </>
);

export default Movie

