
const About = () => {
  return (
    <div className='flex lg:mt-28 mt-16 z-10 justify-center items-center relative'>
        <div className="container z-10 lg:w-[80%] w-[95%] glass1 py-4 flex flex-wrap rounded-lg">
           <div className="lg:flex justify-between items-center px-4 lg:px-10 lg:py-5 py-1 ">
           <div className="img  flex justify-center items-center lg:mb-0 mb-6">
                <img src="public/assets/Service-bg.png./assets/Service-bg.png" className alt=""></img>
            </div>
            <div className="content lg:w-[62%] flex justify-center items-center">

             <div className="flex flex-col justify-center items-center lg:px-10  ">
             <h1 className='text-center text-xl lg:text-4xl text-[#6F008F] font-semibold lg:mb-5 mb-1 '>About Us</h1>
             <p className='lg:text-2xl text-[0.9rem] text-neutral-300 font-light'>Welcome to our Agency, where creativity meets innovation in the digital world. We are a passionate team of web developers and designers  with years of experience dedicated to crafting exceptional digital experiences that drive results. Our mission is simple: to deliver outstanding web solutions.</p>
             </div>
            </div>
           </div>
        </div>
        <img src="./assets/glow.png" className='hidden lg:flex lg:absolute left-0  animate-pulse1 z-0 ' alt="" ></img>
        <img src="./assets/glow.png" className='hidden lg:flex lg:absolute right-0  animate-pulse1 z-0 rotate-180' alt="" ></img>
    </div>
  )
}

export default About
