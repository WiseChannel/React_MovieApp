import React from 'react'

//Components
import Navigation from "./Elements/Navigation";
import MovieInfo from "./Elements/MovieInfo";
import MovieInfoBar from "./Elements/MovieInfoBar";
import Actor from "./Elements/Actor";
import Grid from "./Elements/Grid";
import Spinner from "./Elements/Spinner";

//import custom hook
import { useMovieFetch } from "./Hooks/useMovieFetch";

//component that accepts the movie’s ID and returns information about actors, budget, lead time and revenue
const Movie = ({ movieId }) => {

    //pulls out movies, loading and errors from the component useMovieFetch
    const [movie, loading, error] = useMovieFetch(movieId);

    //checking for errors and loading
    if (error) return <div>Something went to wrong :(</div>;
    if (loading) return <Spinner/>

    //return new markup from key components
    return (
        <>
            <Navigation movie={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid header="Actors">
                {movie.actors.map(actor => (
                    <Actor key={actor.credit_id} actor={actor} />
                ))}
            </Grid>
        </>
    )
};

export default Movie

