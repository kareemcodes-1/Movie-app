import { TMDBIMGSOURCE } from '../../../index';
import React from 'react'

const ResultsCard = ({result}) => {
  console.log(result);
  return (
      <a href={`/${result.media_type === 'tv' ? 'tv' : 'movie'}/${result.id}`} className='border w-full flex items-center gap-[1rem] rounded-[.5rem] cursor-pointer'>
           <img src={`${TMDBIMGSOURCE}${result.poster_path}`} alt={result.original_name} className='w-[10rem] h-full rounded-[.5rem]'/>

           <div className=''>
            <h1 className='font-bold text-[1.2rem] cursor-pointer hover:opacity-[.5] transition'>{result.original_name}</h1>
            <span>{new Date().getFullYear(result.first_air_date)}</span>
            <p>{result.overview}</p>
           </div>
      </a>
  )
}

export default ResultsCard