import { useState, useEffect, useCallback } from 'react';

import { API_URL, API_KEY } from "../../Config/config";

//Component for searching movies by id
export const useMovieFetch = movieId => {

    //local state states download, date and errors
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //Returns a memoized callback.
    const fetchData = useCallback(async () => {
        setError(false);
        setLoading(true);

        //request
        try {
            const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
            const result = await (await fetch(endpoint)).json();

            const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
            const creditsResult = await (await fetch(creditsEndpoint)).json();
            const directors = creditsResult.crew.filter(
                member => member.job === 'Director'
            );

            //put the new result in a state
            setState({
                ...result,
                actors: creditsResult.cast,
                directors,
            })

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }, [movieId])

    //calls the component fetch date in case of new changes
    useEffect(() => {
        fetchData();
    }, [fetchData])
    return [state, loading, error];
};
