import React from 'react'
// import {Navbar,Hero,About,Tech,Projects,StarCanvas,Contact} from '../Components'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Hero from './Components/Hero'
import Tech from './Components/Tech'
import StarsCanvas from './Components/canvas/Stars'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Experience from './Components/Experience'



export default function App() {
  return (
    <div className='flex flex-col z-0 bg-black p-0 m-0 w-full z-[-1]'>
      <Navbar/>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center p-0 m-0 flex flex-col w-full h-full "
    >
      <Hero/>
      <About/>
      <Tech/>
      <Projects/>
      <Experience/>
    
      <Contact/>
      


      </div>
    </div>
  )
}
