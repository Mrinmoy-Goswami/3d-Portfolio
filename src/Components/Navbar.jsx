import React, { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { Link } from "react-scroll";
import logo from "../assets/mglogo.png";
import { navLinks } from "../constants/index.js";
import menu from "../assets/menu.png";
import cross from "../assets/cross.png";
import Lottie from "lottie-react";
import guitar from "../assets/guitar.json"
import pause from "../assets/pause.json"
import song from "../assets/Lost-Sky.mp3"

// import { px } from 'framer-motion'

export default function Navbar() {
  const [active, setActive] = useState();
  const [toggle, setToggle] = useState(false);
  const [playMusic,setPlayMusic] = useState(false);
  const audioRef = useRef(null)


 function handleMusic(){
  if (playMusic) {
    audioRef.current.pause();
  } else {
    audioRef.current.play();
  }
  setPlayMusic(!playMusic);
};
  



  return (
    <nav className=" w-full flex flex-row items-center justify-between py-4 px-2  top-0  z-10  mx-0 bg-black ">
      <div className="w-full flex flex-row  justify-between   mx-0 ">
        <div className="flex flex-row">
          <Link
            style={{ scrollBehavior: "smooth" }}
            spy={true}
            smooth={true}
            duration={1000}
            to="/"
            className="flex  items-center gap-2"
            // onClick={() => {
            //   setActive("");
            //   window.scrollTo(0, 0);
            // }}
          >
            <img src={logo} alt="logo" className=" h-10 w-10 object-contain" />
            <p className="text-white text-[-18px] font-bold cursor-pointer flex">
              Mrinmoy Goswami &nbsp;
              <span className="sm:block hidden">| Web Developer</span>
            </p>
          </Link>
          <audio ref={audioRef} src={song} />
          <Lottie

          title="Play one of my favourite NCS !"
      onClick={handleMusic}
      className="h-20 w-20 md:h-30 md:w-30 mt-0 pt-0"
      animationData= {playMusic?pause:guitar}
      >
        
      </Lottie>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? cross : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer mx-3 text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
           
          </div>
        </div>
        <div className="mt-5">
          <ul className="list-none hidden sm:flex flex-row gap-10 mx-1 justify-items-end ">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-gray" : "text-white"
                }`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div />
      </div>
      
    </nav>
  );
}
