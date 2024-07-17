import React from 'react'
import { work } from '../constants'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

      }
      var settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

      }
  return (
   
   <div>

     <div className='lg:w-[80%] lg:block hidden m-auto'>
        <div className="mt-20    ">
        <h1 className='text-center text-xl lg:text-3xl text-[#6F008F] font-semibold mb-6' >Our Recent Work</h1>
        <Slider {...settings} >

            {
                work.map((items) => (
                    <a  href={items.url} key={items.id} className='  flex items-center  justify-center gap-3  px-1 py-2'>
                        <img href={items.image} alt='work' className='border-[1px] rounded-2xl border-[#6F008F] text-white mr-3 ' />
                    </a>
                ))
            } </Slider>
        </div>
    </div>

    <div className='w-[80%] lg:hidden m-auto'>
        <div className="mt-20    ">
        <h1 className='text-center text-xl lg:text-3xl text-[#6F008F] font-semibold mb-6' >Our Recent Work</h1>
        <Slider {...settings1} >

            {
                work.map((items) => (
                    <a  href={items.url} key={items.id} className='  flex items-center  justify-center gap-3  px-1 py-2 '>
                    <img src={items.image} alt='work' className='border-[1px]  rounded-2xl border-[#6F008F] text-white mr-3 z-10 relative   ' />
                
                </a>
                ))
            } </Slider>
        </div>
    </div>
   </div>
  )
}

export default Carousel
