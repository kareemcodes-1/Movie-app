import React from 'react'

const Sidebar = () => {
  return (
      <div className='border p-[1rem] sticky top-0 w-[30%] rounded-[1rem]'>
           <h1>Search Results</h1>

           <div className='flex flex-col'>
                 <button type='button'>Movies</button>
                 <button type='button'>TV Shows</button>
                 <button type='button'></button>
                 <button type='button'></button>
           </div>
      </div>
  )
}

export default Sidebar