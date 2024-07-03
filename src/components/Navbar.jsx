import React, { useState } from 'react'
import { navbar } from '../constants'
import { Menu,X } from 'lucide-react'
import { useRef } from 'react'

const Navbar = () => {
     
    const [openNavbar,setOpenNavbar] = useState(false);

    function toggleNavbar () {
        setOpenNavbar(!openNavbar)
    }
  return (
    <div className='sticky top-0 z-20 flex justify-center  glass bg-transparent  backdrop-blur text-white '>
        <div className="container z-20  bg-transparent flex justify-between items-center pl-14 py-5 relative">

           <div className="flex justify-between items-center gap-20">
           <div className="logo">
                <h1 className='text-xl font-medium'>Logo<span className='text-[#6F008F] text-xl font-bold'> .</span></h1>
            </div>

            <div className="hidden links lg:flex items-center justify-between gap-8 ">
                { navbar.map((item)=>(
                    <a href="#" className='text-neutral-300 text-lg hover:text-white ' key={item.id}>{item.title}</a>
                ))}
            </div>
           </div>

            <div className='home-btn hidden lg:flex items-center gap-6 pr-14 '>
                <a className='text-neutral-300 text-lg hover:text-white'>Sign in</a>
                <a href="" className='bg-[#6F008F] text-md  px-4 py-[3px] rounded-2xl'>Contact us</a>
            </div>


            <div className=" lg:hidden  pr-14   flex flex-col justify-end z-20">
            <button className='z-20 relative ' onClick={toggleNavbar}>{ openNavbar ? <X></X> : <Menu></Menu>}</button>
           </div>
        </div>

        { openNavbar && (<div className='flex absolute lg:hidden  bg-[#121212] flex-col items-center justify-center py-20 w-full border-b-[0.5px] border-[#2b2a2a]'>
            <div className="flex flex-col  links lg:hidden items-center   gap-8 pt-10 pb-8 ">
                { navbar.map((item)=>(
                    <a href="#"className=' text-neutral-300 text-xl z-20 hover:text-white' key={item.id}>{item.title}</a>
                ))}
            </div>
            <a href="" className='bg-[#6F008F] lg:hidden text-md  px-4 py-1 rounded-2xl z-20 '>Contact us</a> 
            {/* <img className='lg:hidden absolute left-50 w-[52%] z-5 opacity-[0%]  animate-spin' src="/src/assets/orbit.png" alt="" /> */}
            <img className='lg:hidden absolute left-[-10%] w-[57%] z-10 opacity-[100%] animate-pulse ' src="/src/assets/glow.png" alt="" />
            <img className='lg:hidden  absolute right-0 rotate-180  w-[57%] z-10 opacity-[100%] animate-pulse1 ' src="/src/assets/glow.png" alt="" />
        </div>)}

      
    </div>
  )
}
export default Navbar