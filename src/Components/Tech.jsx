import React from "react";
import Lottie from "lottie-react";
import css from "../assets/tech/css3.json";
import html from "../assets/tech/html-5.json";
import js from "../assets/tech/javascript-logo.json";
import mongo from "../assets/tech/mongo.json";
import node from "../assets/tech/nodejs.json";
import react from "../assets/tech/react-logo.json";
import git from "../assets/tech/git-cat.json";
import c from "../assets/tech/c.json"
import { motion } from "framer-motion";

import { styles } from "../styles";

export default function Tech() {
  const TechCard = ({logo}) => {
    return (
      <div className="flex flex-col h-1/2  items-center border-inherit flex w-1/2  shadow-cyan-500/50">
        <Lottie
      
       className="w-1/3 h-1/3 shadow-card shadow-indigo-500/50"
        animationData={logo}  />
        
      </div>
    );
  };

  return (
    <motion.div className="flex flex-col w-full items-center px-2 "
    initial={{opacity:0,y:90}}
    whileInView={{opacity:1,y:0}}
    transition={{delay: 0.3,duration:0.5}}
    viewport={{once:true}}
    >
    
      <h1 className={`${styles.sectionHeadText}  sm:mt-5 sm:mb-5`}>Technical Skills</h1>
      <div className="flex flex-row justify-center items-center gap-5">
        <TechCard logo={html} />
        <TechCard logo={css} />
        <TechCard logo={js} />
        <TechCard logo={c} />

      </div>
      <div className="flex flex-row justify-center items-center gap-3 ">
        <TechCard logo={react} />
        <TechCard logo={node} />
        <TechCard logo={mongo} />
        <TechCard logo={git} />
        
      </div>
    </motion.div>
  );
}
