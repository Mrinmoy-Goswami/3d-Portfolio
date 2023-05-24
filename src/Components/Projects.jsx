import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import letskart from "../assets/cart.jpg";
import recetas from "../assets/beer.jpg";
import tourbook from "../assets/tourbook.jpg";
import weather from "../assets/weather.jpg";
import dailybites from "../assets/daily Bites.png";
import shinchan from "../assets/shinchan.jpeg"
import { motion } from "framer-motion";

export default function Projects() {
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
  };

  const ProjectCard = ({ im, name, desc }) => {
    return (
      <Tilt
        className="flex w-1/3 h-[200px] md:h-[300px] sm:h-[250px]   border-2 rounded  flex-col items-center justify-center dark-gradient shadow-cyan-500/50  rounded-[20px] shadow-card object-contain overflow-auto "
        options={defaultOptions}
      >
        <img
          src={im}
          alt="image"
          className="h-2/3 w-full  p-1  object-contain"
        ></img>
        <h5 className="text-xs xs:text-xs sm:text-xs md:text-md font-bold p-2" >{name}</h5>
        <p className="text-xs xs:text-xs sm:text-xs md:text-md p-2 ">{desc}</p>
      </Tilt>
    );
  };

  return (
    <div 
    style={{overflow:"hidden"}}
    id="work"
    className="flex items-center h-full justify-center w-full flex-col">
      <h2 className={`${styles.sectionHeadText} mt-5 mb-5`}>Projects </h2>
      <motion.div 
       initial={{x:-100}}
       whileInView={{x:0}}
       transition={{delay: 0.25,duration:.5}}
       viewport={{once:true}}
      className="flex flex-row w-full gap-5 justify-around h-full px-4 mt-10 mb-10">
        <ProjectCard
          im={tourbook}
          name={"TourBook"}
          desc={
            "A blog app on the theme of travel. All functionalities of creating,reading,updating and deleting posts. Built with MERN stack"
          }
        />
        <ProjectCard
          im={recetas}
          name={"Recetas"}
          desc={
            "Recipes app where one can search any recipe from a collection of 250,000+ recipes and mocktails"
          }
        />
      </motion.div>
      <motion.div 
       initial={{opacity:0,x:100}}
       whileInView={{opacity:1,x:0}}
       transition={{delay: 0.25,duration:.5}}
       viewport={{once:true}}

      className="flex flex-row w-full gap-5 justify-around h-full px-4 mt-10 mb-10 ">
        <ProjectCard
          im={letskart}
          name={"LetsKart"}
          desc={
            "An E-commerce app made with react+ redux.Funcionalities include product listing,add to cart,product details"
          }
        />
        <ProjectCard
          im={dailybites}
          name={"Daily Bites"}
          desc={
            "News app fetching data from News API . Read news across different categories. Built with React JS"
          }
        />
      </motion.div>
      <motion.div
        initial={{opacity:1,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{delay: 0.25,duration:.5}}
        viewport={{once:true}}
 

      className="flex flex-row w-full gap-5 justify-around h-full px-4 mt-10 mb-10 ">
        <ProjectCard
          im={weather}
          name={"Weather App"}
          desc={
            "Weather web-app built with ReactJS .Functionalities inlude searching for live weather of any place on the planet. Data fetched from visual crossing weather API"
          }
        />
        <ProjectCard
          im={shinchan}
          name={"Joke Chrome Extension"}
          desc={
            "Simple chrome extension that fetches random jokes from a collection of more than 20,000 jokes"
          }
        />
      </motion.div>
    </div>
  );
}
