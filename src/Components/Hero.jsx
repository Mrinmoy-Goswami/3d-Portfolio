import React from 'react'
import { motion } from 'framer-motion'
// import bg from '../assets/Herobg.jpg'
import { styles } from '../styles'
import ComputerCanvas from './canvas/Computer'

export default function Hero() {
  return (
    <section className='relative w-full h-screen mx-auto'
    style={{
      backgroundImage:'url("src/assets/Herobg.jpg")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"

    }}
    >
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl  mx-auto flex flex-row items-start gap-5`}
         
      >
        <div className='flex flex-col w-full justify-center mt-5 z-10 '>
          <h1 className={`${styles.heroHeadText}` }>
            Hi , I'm <span className='text-[#E06469]'>Mrinmoy</span>
          </h1>
          <h3 className={`${styles.heroSubText}`}>I develop web apps</h3>
        </div>

      </div>
<ComputerCanvas/>
    </section>
  )
}
