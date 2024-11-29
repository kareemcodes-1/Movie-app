import { useMovies } from '@/providers/movies-provider';
import ResultsCard from '@/search/components/ResultsCard';
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

const SearchResults = () => {

    let [searchParams] = useSearchParams();
    const value = searchParams.get("query");
    const {handleFilter, movies} = useMovies();
    useEffect(() => {
        handleFilter(`search/tv?query=${value}&include_adult=false&language=en-US&page=1`);
    }, []);

    const results = movies.filter((movie) => {
        return movie.poster_path !== null;
    })

  return (
    <div className='flex flex-col gap-[1rem] w-[70%]'>
        {results.map((result) => (
              <ResultsCard result={result}/>
        ))}
    </div>
  )
}

export default SearchResults