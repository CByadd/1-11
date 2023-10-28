import React from 'react'
import Image from 'next/image'

function Stories() {
  return (
    <div className='flex w-screen items-center bg-black'>
    <div className='mx-auto flex justify-center'>
 <div className='relative   h-24 w-24  mt-2'>
 <Image
        src={'https://data.terabox.com/thumbnail/f105e135acc1dc803b6dc74e310aa0e4?fid=4398309358028-250528-172778407360917&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-kyflqe%2flye1QCB%2b3hFaRwPnojxQ%3d&expires=8h&chkbd=0&chkv=0&dp-logid=60166881653902407&dp-callid=0&time=1698494400&size=c1366_u768&quality=90&vuk=4398309358028&ft=image&autopolicy=1'} layout='fill' objectFit='contain'/>
 </div>
 <div className='relative  h-24 w-24 m-0.5 mt-2'>
 <Image
        src={'/2.png'} layout='fill' objectFit='contain'/>
 </div>
 <div className='relative hidden md:block h-24 w-24 m-0.5 mt-2'>
 <Image
        src={'/3.png'} layout='fill' objectFit='contain'/>
 </div>
 <div className='relative  h-24 w-24 m-1 mt-2'>
 <Image
        src={'/4.png'} layout='fill' objectFit='contain'/>
 </div>
 <div className='relative  h-24 w-24 m-1 mt-2'>
 <Image
        src={'/5.png'} layout='fill' objectFit='contain'/>
 </div>
 <div className='relative  h-24 w-24 m-1 mt-2'>
 <Image
        src={'/6.png'} layout='fill' objectFit='contain'/>
 </div>
 
 </div>
    </div>
  )
}

export default Stories