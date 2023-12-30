import React from 'react'
import NavbarItem from './NavbarItem'

export default function NavBar() {
  return (
    <div className='flex justify-center space-x-10 dark:bg-gray-600 bg-amber-100 p-5 lg:text-lg'>
        <NavbarItem title="Trending" param="fetchTrending"  />
        <NavbarItem title="Top Rated" param="fetchTopRated"  />
    </div>
  )
}
