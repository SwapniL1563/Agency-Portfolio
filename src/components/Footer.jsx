import React from 'react'
import { footer } from '../constants'

const Footer = () => {
  return (
    <div className='flex flex-col z-10 justify-center items-center relative overflow-hidden'>
        <div className="container mt-60 lg:mt-64 pt-24 pb-12 text-white lg:flex justify-between items-start px-12 lg:px-24 gap-4">
            <h1 className='lg:text-3xl text-2xl font-semibold mb-8 lg:mb-0'>Logo <span className='text-[#6F008F] text-2xl font-bold'>.</span></h1>
            <div className="links flex  lg:flex flex-wrap justify-between lg:gap-20  gap-8 items-start ">
                { footer.map((items)=> (
                    <div className='flex flex-col  items-start ' key={items.id}>
                        <a href='#' className='lg:text-xl font-medium mb-4'>{items.title}</a>
                        <p className='cursor-default lg:text-start font-light text-neutral-400'>{items.description[0]}</p>
                        <p className='cursor-default lg:text-start font-light text-neutral-400'>{items.description[1]}</p>
                        <p className='cursor-default lg:text-start font-light text-neutral-400'>{items.description[2]}</p>
                    </div>
                ))}
            </div>
    
        </div>
        <h1 className='cursor-default lg:text-start font-light lg:text-base text-xs text-neutral-400' >Copyright 2024 . All rights reserved</h1>

        <div className='absolute glass1 top-[17%] lg:w-[80%] w-auto md:w-3/4 md:px-2 py-10 rounded-2xl'>
             <div className="flex  flex-col justify-center items-start lg:items-center px-2 md:px-6 lg:px-0 gap-4">
                <h1 className='text-center text-xl lg:text-3xl text-[#6F008F] font-semibold'>Let's connect</h1>
                <p className='hidden lg:block lg:text-center font-light text-neutral-400 lg:w-[45%]'>Feel free to contact with us . We will help to level up your digital ideas into innovative solutions</p>
               <div className="flex justify-center ">
               <input type="text"  placeholder='Enter email here'  className='border-[1px] bg-transparent text-neutral-600 border-neutral-600 lg:px-3 lg:py-2 py-1 px-2  lg:w-[400px] rounded-bl-md rounded-tl-md' />
               <button className='bg-[#6F008F] border-[1px] rounded-br-md rounded-tr-md outline-none border-neutral-600 lg:px-3 px-1 lg:text-base text-sm text-white'>Submit</button>
               </div>
             </div>
        </div>
    </div>
  )
}

export default Footer