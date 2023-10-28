import React from 'react'

import Image from 'next/image'

import{
  SearchIcon,
} from "@heroicons/react/outline"
function Header() {
  return (
    <div>
      <div className='flex justify-between -z-30'>
        {/* {LOGO} */}
      <div className='relative h-24 w-24 m-5 ml-8 pr-14 mt-2 INSTA'>
        <Image
        src={'https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png'} layout='fill' objectFit='contain'/>
      </div>
      <div className='relative w-10 h-10 lg:hidden flex-shrink-0 m-5 mt-2 IN'>
        <Image
        src={'https://i.pinimg.com/736x/21/d6/7f/21d67f1d6b3be5bb2e39395311c77fc6.jpg'} layout='fill' objectFit='contain'/>
      </div>
{/* Search bar */}
     <div className='max-w-xs Search'>
     <div className='relative mt-1 p-3 rounded-md'>
        <div className='absolute inset-y-0 pl-3 flex mt-4 pointer-events-none'>
          <SearchIcon className='h-5 w-5 text-gray-500'/>
        </div>
        <input type='text' placeholder='Search' className='bg-transparent block w-full pl-10'/>
      </div>
     </div>
      </div>

    </div>

  )
}

export default Header