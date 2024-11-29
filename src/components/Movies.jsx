import React from 'react'
import MovieCard from './MovieCard'
import { useMovies } from '@/providers/movies-provider'

const Movies = () => {
    const {movies} = useMovies();

  return (
    <div className='lg:grid flex items-center justify-center flex-col grid-cols-4  pt-[2rem] gap-[1rem] mx-[1.5rem]'>
        {movies.map((movie) => (
            <MovieCard movie={movie}/>
        ))}
    </div>
  )
}

export default Movies