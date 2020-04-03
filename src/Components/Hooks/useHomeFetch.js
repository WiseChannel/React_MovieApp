import {useEffect, useState} from 'react'
import {POPULAR_BASE_URL} from "../../Config/config";

// Component for asynchronously requesting data to the server
export const useHomeFetch = searchTerm => {

    //states for storage, loading, and errors
    const [state, setState] = useState({movies: []});
    const [loading, setLoading] = useState(false );
    const [error, setError] = useState(false);

    //movie request method
    const fetchMovies = async endpoint => {
        setError(false);
        setLoading(true);

        const isLoadMore = endpoint.search('page');

        //try/catch - wrapper for easy debugging
        try {
            //variable in which the request fetch occurs
            const result = await (await fetch(endpoint)).json();
            //transfer data to state
            setState(prev => ({
              ...prev,
              movies:
                isLoadMore !== -1
              ? [...prev.movies, ...result.results]
              : [...result.results],
              heroImage: prev.heroImage || result.results[0],
              currentPage: result.page,
              totalPages: result.total_pages
            }))
          //catches and shows errors
        } catch (e) {
            setError(true);
            console.error('Error from Home: ' + e);
        }
        setLoading(false)
    };

    //local storage check
    useEffect(() => {
        if (sessionStorage.homeState) {
            setState(JSON.parse(sessionStorage.homeState));
            setLoading(false);
        } else {
            fetchMovies(POPULAR_BASE_URL);
        }
    }, []);
    //input parameter check
    useEffect(() => {
        if (!searchTerm) {
            sessionStorage.setItem('homeState', JSON.stringify(state));
        }
    }, [searchTerm, state]);

    return[{state, loading, error}, fetchMovies]
};
