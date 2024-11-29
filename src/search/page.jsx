import Navbar from '@/components/Navbar'
import SearchResults from '@/components/SearchResults';
import Sidebar from '@/components/Sidebar';
import React from 'react'

const SearchPage = () => {



  return (
    <>
      <Navbar />

      <div className='flex items-start gap-[1rem] p-[1rem]'>
           <Sidebar />

           <SearchResults />
      </div>
    </>
  )
}

export default SearchPage;