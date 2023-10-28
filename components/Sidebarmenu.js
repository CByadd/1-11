import React from 'react'

function Sidebar() {
  return (
    <div className='h-11 w-11 ml-14 mt-0 absolute top-0 hidden md:block'><div></div>
        <button className='p-2 pr-16'>Home</button>
        <button className='p-2 pr-16 mt-3'>Search</button>
        <button className='p-2 pr-16 mt-3'>Explore</button>
        <button className='p-2 pr-16 mt-3'>Reels</button>
        <button className='p-2 pr-16 mt-3'>Message</button>
        <button className='p-2 pr-16 mt-1'>Notification</button>
        <button className='p-2 pr-16 '>Likes</button>
    </div>
  )
}

export default Sidebar