import React from 'react'

//Components
import Navigation from "./Elements/Navigation";
import MovieInfo from "./Elements/MovieInfo";
import MovieInfoBar from "./Elements/MovieInfoBar";
import Actor from "./Elements/Actor";
import Grid from "./Elements/Grid";
import Spinner from "./Elements/Spinner";

import { useMovieFetch } from "./Hooks/useMovieFetch";

const Movie = ({ movieId }) => {

    const [movie, loading, error] = useMovieFetch(movieId);
    console.log(movie)

    if (error) return <div>Something went to wrong :(</div>;
    if (loading) return <Spinner/>

    return(
        <>
            <Navigation movie={movie.original_title}/>
            <MovieInfo movie={movie}/>
            <MovieInfoBar/>
            <Grid>
                <Actor/>
            </Grid>
            <Spinner/>
        </>
    )
};

export default Movie
