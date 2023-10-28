import React from 'react'

function Sidebar() {
  return (
    <div className='h-11 w-11 SIDE'><div></div>
        <button className='H'><img src='Home.png'/></button>
        <button className='S'><img src='Search.png'/></button>
        <button className='hidden md:block'><img src='Explore.png'/></button>
        <button className='R'><img src='Reels.png'/></button>
        <button className='ml-1 C'><img src='Chat.png'/></button>
        <button className='ml-2 hidden md:block'><img src='Likes.png'/></button>
        <button className='hidden md:block'><img src='Plus.png'/></button>
    </div>
  )
}

export default Sidebar