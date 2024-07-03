// import {Route,Routes,Router } from "react-router-dom"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Service from "./components/Service"
import Carousel from "./components/Carousel"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {


  return (
    <>
        <div className="flex flex-col justify-center">
        <Navbar/>
         <Hero/>
         <Service/>
         <Carousel/>
         <About/>
         <Footer/>
        </div>

    </>
  )
}

export default App
