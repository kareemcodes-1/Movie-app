import { useMovies } from '@/providers/movies-provider'
import React from 'react'

const Hero = () => {

   const {handleFilter, type} = useMovies();
  return (
    <div className='flex items-center justify-center flex-col pt-[2rem]'>
        <h1 className='lg:text-[4rem] text-[2rem] py-[1rem] text-center font-bold'>Discover Unlimited Content</h1>

        <div className='border flex items-center justify-center rounded-[.5rem] overflow-hidden'>
        <button type="button" className={`p-[.5rem] ${type === 'trending/all/day' && 'bg-purple-500 text-white'} transition`} onClick={() => handleFilter('trending/all/day')}>Trending</button>
            <button type="button" className={`p-[.5rem] ${type === 'movie/popular' && 'bg-purple-500 text-white'} transition`} onClick={() => handleFilter('movie/popular')}>Popular</button>
            <button type="button" className={`p-[.5rem] ${type === 'movie/top_rated' && 'bg-purple-500 text-white'} transition`} onClick={() => handleFilter('movie/top_rated')}>Top Rated</button>
            <button type="button" className={`p-[.5rem] ${type === 'movie/upcoming' && 'bg-purple-500 text-white'}  transition`} onClick={() => handleFilter('movie/upcoming')}>Recommended</button>
        </div>
    </div>
  )
}

export default Hero