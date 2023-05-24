import React from 'react'
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'



export default function About() {

  const Card =()=>{
    return(
      <Tilt className="xs:w-[250px] w-full">
          <motion.div
          className='w-1/2 blue-white-gradient p-1 rounded shadow-card'
          >
            <div 
            className='bg-tertiary rounded    flex justify-evenly items-center flex-col'
            >
                <h3>Card</h3>
            </div>
            
          </motion.div>
      </Tilt>
    )
  }

  return (
  <div id='about' className='flex flex-col w-full mt-20' >

  <motion.div 
  className='flex flex-col items-center'
  initial={{opacity:0,y:90}}
  whileInView={{opacity:1,y:0}}
  transition={{delay: 0.25,duration:0.5}}
  viewport={{once:true}}
  >
    <p 
    className={`${styles.sectionHeadText} `}>Introduction</p>
    <p className={`${styles.sectionSubText} leading-loose p-7 roboto `}>
      Cricket,Music,Games :). Well,I am a Software Developer with experience in JavaScript and expertise in frameworks like React JS 
      ,NodeJS.I focus on building dynamic ,user-friendly websites that engage and inspire . I have always been a quick learner and have implemented various libraries of react like Framer Motion, Three-Fiber in various projects as per requirements . Let's work together to elevate your online presence!
    </p>
  </motion.div>

    </div>
  
  )
}
