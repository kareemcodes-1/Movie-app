import { useMovies } from '@/providers/movies-provider';
import { TMDBIMGBACKDROP, TMDBIMGSOURCE } from '../../../index';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SwiperCard from './components/SwiperCard';
import { ArrowLeft } from 'lucide-react';

const TVPage = () => {

    const {id} = useParams();
    const {handleFilter, result} = useMovies();
    const [episodes, setEpisodes] = useState([]);
    const [currentSeason, setCurrentSeason] = useState(1);

    useEffect(() => {
      handleFilter(`tv/${id}?language=en-US`);
      fetch(`https://api.themoviedb.org/3/tv/${id}/season/${currentSeason}?language=en-US`, {
          method: "GET",
          headers: {
              accept: "application/json",
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGRkMjZiMzI3MjBjMWI4ZmNhY2ZiZDE2ZTBmMzE2ZiIsIm5iZiI6MTczMjYxMjc0MC4wNDc3MTA3LCJzdWIiOiI2NDFjY2MzZWUxZmFlZDAwN2JlMzkzZGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9dlcpQfkBt_Ucw6REshoG8UAFGBxqc6OmEnQkvD2FGA',
          }
      }).then((res) => res.json())
      .then((data) => setEpisodes(data.episodes));
    }, [currentSeason]);
    console.log(episodes);
    console.log(result);

  return (
    <>
      <div className='relative'>
        <a href='/' className='absolute left-[2rem] top-[2rem]'>
            <ArrowLeft className='text-white h-[27px] w-[27px]'/>
        </a>
        <img src={`${TMDBIMGBACKDROP}${result.backdrop_path}`} className='h-[80vh] w-full object-cover' alt={result.original_name} />
        <div className='absolute bottom-[2rem] left-[2rem]'>
          <div className='flex items-start gap-[2rem]'>
          <div className='w-[50%]'>
               <img src={`${TMDBIMGSOURCE}${result.poster_path}`} alt="" className='h-[20rem] w-[15rem] object-cover rounded-[.5rem]' />
          </div>

           <div className='flex flex-col gap-[1rem]'>
           <div>
           <h2 className='text-[4rem] text-white'>{result.original_name}</h2>
            <p className='text-white w-[400px]'>{result.overview}</p>
           </div>

            <div className='flex items-center gap-[1rem] w-full'>
                  {result.genres?.map((genre) => (
                    <div className='bg-[#0000006b] rounded-[.5rem] text-white backdrop-blur-sm py-[.8rem] px-[1rem]'>
                        {genre.name}
                    </div>
                  ))}
            </div>

            <div className='flex items-center gap-[1rem]'>
                 {result.networks?.map((network) => (
                     <img src={`https://media.themoviedb.org/t/p/h30/${network.logo_path}`} alt={network.name} />
                 ))}
            </div>
           </div>

          </div>
        </div>
    </div>

    <div className='mx-[2rem] mt-[1rem]'>
        <div className='flex items-center gap-[1rem] mb-[1rem]'>
             <h2 className='text-[1.5rem] font-bold'>Episodes</h2>
             
             <div className='font-bold'>|</div>

             <div className="dropdown">
             <div tabIndex={0} role="button" className="m-1 font-bold ">Season {currentSeason}</div>
             <ul tabIndex={0} className="dropdown-content  menu bg-base-100 rounded-box z-[100] p-[1rem] flex flex-col gap-[.5rem] w-[8rem] shadow">
                 {result?.seasons?.map((season) => (
                          <button  type='button' onClick={() => setCurrentSeason(season.season_number)} className='text-[1rem] font-bold'>Season {season.season_number}</button>
                 ))}
              </ul>
             </div>
        </div>

        <div>
             <SwiperCard episodes={episodes}/>
        </div>
    </div>
    </>
  )
}

export default TVPage;