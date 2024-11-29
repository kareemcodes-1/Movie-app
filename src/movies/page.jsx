import MovieCard from '@/components/MovieCard';
import Navbar from '@/components/Navbar';
import { useMovies } from '@/providers/movies-provider'
import React, { useEffect } from 'react'

const AllMovies = () => {

  const {handleFilter, movies} = useMovies();


  useEffect(() => {
    handleFilter('discover/movie');
    console.log(movies);
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

export default AllMovies;