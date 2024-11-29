import { createContext, useContext, useEffect, useState } from "react"


const MovieContext = createContext();

export function MoviesProvider ({children}){

    const [type, setType] = useState('trending/all/day');
    const [movies, setMovies] = useState([]);
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.themoviedb.org/3/${type}`, {
            method: "GET",
            headers: {
                accept: 'application/json',
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGRkMjZiMzI3MjBjMWI4ZmNhY2ZiZDE2ZTBmMzE2ZiIsIm5iZiI6MTczMjYxMjcyNy44OTQ2NjI5LCJzdWIiOiI2NDFjY2MzZWUxZmFlZDAwN2JlMzkzZGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Cth0AbhO1OC63JeWLy233Vi8aDekEdfrDMJF5_i8h8I"
            }
        }) .then((res) => res.json())
        .then((data) => {
            setMovies(data.results);
            setResult(data);
        })
        .catch((err) => {
            console.error("Fetch error:", err);
        }).finally(() => setTimeout(() => setLoading(false), 1000)); 
    }, [type]);

    function handleFilter(type){
        setType(type);
    }

    return (
        <MovieContext.Provider value={{type, handleFilter, movies, loading, result}}>
        {children}
        </MovieContext.Provider>
    )
}

export const useMovies = () => useContext(MovieContext);