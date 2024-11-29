import { useMovies } from '@/providers/movies-provider';
import { Star } from 'lucide-react';
import React from 'react'

const MovieCard = ({movie}) => {

    const {loading} = useMovies();

  return (
    <>
    {loading ? <div className="skeleton h-[400px] overflow-hidden lg:w-auto w-full"></div> : 
          <a href={`/${movie.media_type === 'tv' ? 'tv' : 'movie'}/${movie.id}`} className='relative h-[400px] overflow-hidden lg:w-auto w-full' key={Math.random()}>
           <div className='flex items-center justify-between w-full'>
           <div className='absolute top-[.5rem] left-[1rem] flex items-center gap-[.3rem]  bg-purple-500 p-[.5rem] rounded-[.5rem] text-white'><Star className="!w-[19px]"/>{movie.vote_average.toString().slice(0, 3)}</div>
          <div className='absolute top-[.5rem] right-[1rem] bg-[#0000004f] border border-gray-400 backdrop-blur-sm  p-[.5rem] rounded-[.5rem] text-white capitalize'>{movie.media_type === 'tv' ? 'TV Show' : 'Movie'}</div>
           </div>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='object-cover rounded-[1rem]  w-full h-full' alt={movie.title} />
          <div className='absolute bottom-[0rem] bg-[#000] w-full h-[5rem] blur-[4rem] rounded-[.5rem]' />
          <div className='flex items-center justify-center mx-auto'>
          <div className='absolute bottom-[1.5rem]'>
          <h1 className='text-white text-[1.5rem] text-center flex items-center justify-center mx-auto'>{movie.media_type === 'tv' ? movie.name : movie.title}</h1>
          <span className='text-[#ffffffa6] text-[1rem] text-center flex items-center justify-center'>{new Date(movie.release_date).getFullYear()} .  4 Seasons . All Episodes</span>
          </div>
          </div>
       </a>
    }

    </>
  )
}

export default MovieCard;