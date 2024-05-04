import {useEffect, useState} from "react";

export function useMovies(query) {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(function () {

        //callback?.();

        const controller = new AbortController();

        async function fetchMovies() {
            try {
                setIsLoading(true);
                setError("");
                const res = await fetch(`http://www.omdbapi.com/?apiKey=f84fc31d&s=${query}`, {signal: controller.signal});
                if (!res.ok) throw new Error("Failed to fetchMovies");
                const data = await res.json();
                if (data.Response === 'False') throw new Error("Movie Not Found");
                setMovies(data.Search);
            } catch (error) {
                console.log(error.message);
                if (error.name !== "AbortError") {
                    setError(error.message)
                }
            } finally {
                setIsLoading(false);
            }
        }

        if (query.length < 3) {
            setMovies([]);
            setError('')
            return
        }

        //handleCloseMovie();
        fetchMovies();

        return function () {
            controller.abort();
        }
    }, [query]);

    return {movies, isLoading, error};
}