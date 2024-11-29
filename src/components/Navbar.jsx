import { Search, X } from 'lucide-react'
import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Navbar = () => {

  const [openSearch, setOpenSearch] = useState(false);
  
  const {pathname} = useLocation();

  const [inputValue, setInputValue] = useState('');


  return (
    <header className='flex items-center justify-between p-[1rem]'>
        <div className='nav-logo text-[1.2rem] font-bold'>Movix</div>

        <nav className=''>
            <ul className='flex items-center gap-[2rem]'>
                <li><a href="/" className={pathname === '/' ? 'text-purple-500' : ''}>Home</a></li>
                <li><a href="/movies" className={pathname === '/movies' ? 'text-purple-500' : ''}>Movies</a></li>
                <li><a href="/tv-shows" className={pathname === '/tv-shows' ? 'text-purple-500' : ''}>TV Shows</a></li>
                <li><a href="/watchlist" className={pathname === '/watchlist' ? 'text-purple-500' : ''}>WatchList</a></li>
            </ul>
        </nav>

        <div className='flex items-center gap-[1rem]'>
        {
          openSearch && 
          <div className='fixed top-0 left-0 right-0 bottom-0 z-[1000] w-full h-screen'>
                <div className='bg-[#00000038] fixed top-0 w-full h-screen z-[-1] backdrop-blur-sm' onClick={() => setOpenSearch(false)} />
                 <div className='flex items-center justify-center z-[1000] mt-[15rem] bg-[#fff] rounded-[1rem] w-[70%] mx-auto'>
                  <div className='border p-[.5rem] rounded-[1rem] w-full'><input type="text" onChange={(e) => setInputValue(e.target.value)}  className='outline-none !border-none bg-transparent w-full' placeholder='Search Movies, TV Series and more..'/></div>
                  <a href={`search?query=${inputValue}`}><Search className={`text-[2rem] cursor-pointer`} /></a>
                 </div>
          </div>
        }
            {/* <X className={`text-[2rem] cursor-pointer ${openSearch ? 'block' : 'hidden'}`} onClick={() => setOpenSearch(false)} /> */}
            <Search className={`text-[2rem] cursor-pointer`} onClick={() => setOpenSearch(true)}/>
        </div>
    </header>
  )
}

export default Navbar