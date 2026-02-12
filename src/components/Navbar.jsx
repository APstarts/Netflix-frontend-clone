import React from 'react'
import { CiSearch } from "react-icons/ci";
import Logo from '../assets/netflix_logo.png';

function Navbar() {
  return (
    // Fixed: Added top-0, w-full, and corrected gradient syntax for v3 (most common)
    // Added h-20 to give the gradient room to breathe
    <div className='fixed top-0 left-0 w-full flex justify-between items-center bg-linear-to-b from-black/80 to-transparent z-50 h-20 px-10'>
        <div className='font-bold text-white flex gap-2 items-center'>
        <img src={Logo} alt="Netflix Brand Logo" className='h-full w-20' />
            <ul className='flex list-none gap-8'>
                <li className='cursor-pointer hover:text-red-600 transition hover:scale-110'>Home</li>
                <li className='cursor-pointer hover:text-red-600 transition hover:scale-110'>Genres</li>
                <li className='cursor-pointer hover:text-red-600 transition hover:scale-110'>Movies</li>
            </ul>
        </div>

        <div className='flex items-center gap-2'>
          <form action="" className='flex items-center border-b border-white'>
            <input 
              className='bg-transparent p-1 outline-none font-bold text-white placeholder:text-gray-400' 
              type="search" 
              placeholder='Search shows...'
            />
            <button type="submit">
              <CiSearch className='text-white text-2xl' />
            </button>
          </form>
        </div>
    </div>
  )
}

export default Navbar