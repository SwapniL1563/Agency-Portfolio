import React from 'react'
import { services } from '../constants'
import { FileX } from 'lucide-react'

const Service = () => {
  return (
    <div className=" text-white mt-10 lg:pt-20 xl:pt- px-4 lg:px-12 relative ">
        <div className=" flex flex-col gap-10  items-center justify-center z-10 relative">
          <h1 className='text-center text-xl lg:text-3xl text-[#6F008F] font-semibold'>Our Services</h1>
 
          <div className="lg:flex  items-center justify-center gap-2 mb-4  z-10 ">
            { services.map((item)=> (
               <div className=' glass1 lg:h-[240px] flex flex-col  lg:w-[30%] mb-2 items-center lg:justify-start  pt-6 gap-1 lg:px-8 px-8  rounded-md ' key={item.id}>
                <h1 className='text-center text-xl lg:text-2xl mb-2 text-[#6F008F] font-medium'>{item.title}</h1>
                <p className='pb-4 text-sm lg:text-base text-neutral-300 font-light'>{item.description}</p>
                </div>
            ))}
          </div>
         </div>

         <img src="/src/assets/glow.png" className='hidden lg:flex  lg:absolute left-0 top-0  z-0 animate-pulse1 overflow-hidden' alt="" />
         <img src="/src/assets/glow.png" className='hidden lg:flex lg:absolute right-0 top-0 z-0 animate-pulse1 rotate-180 overflow-hidden' alt="" />
        </div>
  )
}

export default Service