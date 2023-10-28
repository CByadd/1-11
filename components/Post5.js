import React from 'react'
import Posts from './Posts';
import{
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
}from "@heroicons/react/outline"
import{HeartIcon as HeartIconFilled} from "@heroicons/react/solid";

function Post({id,username,userImg,img,caption}) {
  return (
    <div>

 
<div className='relative absolute child mt-7'>
<div className='flex items-center '>
    <img src="e.jpg"alt='' className='rounded-full h-11 w-11 object-cover ml-3 mr-3' />
    <p className='text-white'>Nolan</p>
    <DotsHorizontalIcon className=' h-5 pl-96 text-white Do'/>
    </div>
  <div className='bg-slate-950 mt-3'>
  <img src='https://www.brookings.edu/wp-content/uploads/2016/06/mushroom_cloud001.jpg?w=1500'
    className='flex object-cover w-fit'/>
  </div>

  <div className='flex justify-between px-4 pt-4 text-white'>
    <div className='flex space-x-4'>
      <HeartIcon className='btn'/>
      <ChatIcon className='btn'/>
      <PaperAirplaneIcon className='btn'/>
    </div>

    <BookmarkIcon className='btn'/>
  </div>

<div>
  <p className='p-5 truncate text-white'>
    <span className='font-bold mr-4'>Nolan</span>
         Id aute eu culpa tempor amet veniam aliqua ullamco est deserunt laborum veniam velit.
  </p>
</div>

<div>
  <form className='flex items-center p-4'>
    <EmojiHappyIcon className='h-7 text-white'/>
    <input type='text'  placeholder='Add a comment' className=' ml-3 mr-3 border-none outline-none flex-1 bg-black text-white'
    />
    <button className='text-white'>Post</button>
  </form>
</div>


</div>



        
    </div>
  );
}

export default Post