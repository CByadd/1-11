import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import Profile from './Profile'
import Suggestion from './Suggestion'
import Sidebar from './Sidebar'
import Sidebarmenu from './Sidebarmenu'
import Sideline from './Sideline'

function Feed() {
  return (
    <main className='grid grid-cols-1   xl:grid-cols-3 xl:max-w-6xl max-auto md:flex md:w-fill' >

        {/* Section */}
        <section className='col-span-2'>

  <div className='relative   top-0 STOR'>

        <Stories/>     
  </div>
        {/* Post */}
        <div className='justify-center  w-screen ml-96 pr-16 text-black h-96 relative parent  POST'>
        <Posts/>

        </div>
        </section>

        {/* section */}
        <section>
        {/* Profile */}
       
      <div className='absolute top-11 right-8 hidden md:block'>
      <Profile/>
      <Suggestion/>
      </div>

        
        </section>

        <div className='absolute h-full w-72 ml-4'>
          <Sidebar/> 
          <Sidebarmenu/>
          <div className='SL'>
        <Sideline/>
        </div>
        </div>
       
          
    </main>
  )
}

export default Feed