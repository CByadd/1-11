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
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/800px-Indian_Space_Research_Organisation_Logo.svg.png"alt='' className='rounded-full h-11 w-11 object-cover ml-3 mr-3 ' />
    <p className='text-white'>ISRO</p>
    <DotsHorizontalIcon className=' h-5 pl-96 text-white Do'/>
    </div>
  <div className='bg-slate-950 mt-3'>
  <img src='ISRO.jpg'
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
    <span className='font-bold mr-4'>ISRO</span>
         This is the mega project done by stundents of <br></br>  Holy Cross salem for Science Expo 2023 INSPIRA. 
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
<div className='relative absolute child mt-7'>
<div className='flex items-center '>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/800px-Indian_Space_Research_Organisation_Logo.svg.png"alt='' className='rounded-full h-11 w-11 object-cover ml-3 mr-3 ' />
    <p className='text-white'>ISRO</p>
    <DotsHorizontalIcon className=' h-5 pl-96 text-white Do'/>
    </div>
  <div className='bg-slate-950 mt-3'>
  <img src='https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/ezgif-sixteen_nine_300.jpg?size=948:533'
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
    <span className='font-bold mr-4'>ISRO</span>
        This is MEGA project done by Holy Cross Mat. school With the Students Involves <br></br>Adithiyan, A R rehman, Kamalesh R, Srinivash R T.
  </p>
</div>




            

</div>



        
    </div>
  );
}

export default Post
