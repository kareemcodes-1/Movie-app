import MovieCard from '@/components/MovieCard';
import Navbar from '@/components/Navbar';
import { useMovies } from '@/providers/movies-provider';
import React, { useEffect } from 'react'

const WatchList = () => {

  const {handleFilter, movies} = useMovies();


  useEffect(() => {
    handleFilter('trending/all/day?language=en-US');
  }, [])

  return (
    <>
    <Navbar />
    <div className='lg:grid flex items-center justify-center flex-col grid-cols-4  pt-[2rem] gap-[1rem] mx-[1.5rem]'>
    {movies.map((movie) => (
        <MovieCard movie={movie}/>
    ))}
    </div>
    </>
  )
}

export default WatchList;