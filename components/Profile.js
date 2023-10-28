import React from 'react'

function Profile() {
  return (
    <div className='flex   text-white  items-center justify-between mt-14 ml-10'>

        <img className='w-16 h-16 rounded-full border-none flex'
        src='https://data.terabox.com/thumbnail/c4f6611da96cb5f9cce4d10b162d4ebf?fid=4398309358028-250528-32476535800256&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-wFyGLDUbN1vECXWFlwsEdBMHjoc%3d&expires=8h&chkbd=0&chkv=0&dp-logid=60341109292486711&dp-callid=0&time=1698494400&size=c1366_u768&quality=90&vuk=4398309358028&ft=image&autopolicy=1'/>

        <div className='scale-90'>
            <h2 className='font-bold'>Srinivash</h2>
            <h3 className='text-gray-400'>Welcome To Devbrosgram</h3>
        </div>

        <button className='text-blue-500'> Sign Out</button>
        
    </div>
  )
}

export default Profile