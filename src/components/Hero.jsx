import Marquee from "react-fast-marquee";
import Meteors from "../components/magicui/meteors";


const Hero = () => {
  return (
   <>
   <div className="hero z-10 flex justify-center  lg:px-12 md:px-4 px-0  relative " >
    <div className="container z-10 bg-[url('/assets/bg-home.png')] bg-center lg:bg-top  lg:rounded-2xl lg:border-[#6F008F] lg:border-[1.5px] bg-cover h-[600px]  bg-no-repeat flex justify-center  ">      {/* <img className='lg:w-[94%] opacity-[100%]' src="/src/assets/Home-bg.png" alt="" /> */}
        <div className='flex flex-col  lg:items-center items-start lg:justify-start mt-[15%] lg:mt-[6%] lg:gap-6  gap-2 pl-4 text-white'>
          <h1 className='text-6xl  leading-tight lg:text-8xl font-medium text-neutral-200 '>We Provide Efficient</h1>
          <h1 className='text-6xl leading-tight lg:text-8xl font-medium text-neutral-200 '><span className='text-[#6F008F] linear-wipe'>Digtal</span> Solution</h1>
          <p className='hidden lg:flex lg:text-xl lg:text-center text-neutral-400'>We transform your interesting ideas into reality  <br />
          through stunning and effective websites</p>
          <a href="" className='bg-[#6F008F] text-xl mt-2  px-6 py-2 rounded-2xl z-10 '>Contact us</a> 
               
        </div>
    </div>

    
  
   </div> 

   <Marquee   className="hidden lg:flex absolute z-10 left-0 lg:bottom-14  xl:bottom-10 bg-black py-4 lg:py-6 mr-2 xl:py-8 ">
     <div className="flex items-center justify-center gap-10"> 
     <h1 className=" ml-40 text-2xl text-neutral-200"> Transforming Ideas into Digital Reality</h1>
      <img className="animate-spin1" src="public/assets/planet.png" alt="" />
       <h1 className="text-2xl text-neutral-200">Elevate Your Online Presence Today</h1>
     </div>
     <div className="flex items-center gap-10"> 
     <h1 className="ml-40 text-2xl text-neutral-200"> Transforming Ideas into Digital Reality</h1>
      <img className="animate-spin1" src="public/assets/planet.png" alt="" />
       <h1 className="text-2xl text-neutral-200">Elevate Your Online Presence Today</h1>
     </div>
     </Marquee>
   <img src="/assets/glow.png" className='absolute top-32  animate-pulse1' alt="" />
   <img src="/assets/glow.png" className='absolute right-0 bottom-[-10%] animate-pulse1 rotate-180' alt="" />
   
   <div className="hidden  lg:absolute top-16 left-12 xl:left-16 w-[90%] lg:block h-[600px] px-4 overflow-hidden mt-4    md:shadow-xl opacity-[80%]">
      <Meteors number={30}  />
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
    
      </p>
    </div>
   </>
  )
}

export default Hero
