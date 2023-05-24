import React from 'react'
import { Suspense,useEffect,useState } from 'react'
import { Canvas, events } from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'
import { AmbientLight } from 'three'

function Computer({isMobile}) {

const computer = useGLTF('./computer_and_laptop/scene.gltf')
const amb = new AmbientLight( 0x404040);

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      />
      <pointLight intensity={1}/>
      
      <primitive 
      object ={computer.scene}
      scale={isMobile?0.1:0.19}
      position = {isMobile?[-0.2,-1,-0.5]:[0,-3.25,-1.5]}
      // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>

  )
}
export default function ComputerCanvas(){

  const [isMobile,setIsMobile] = useState(false);
  useEffect(()=>{
      // Add a listener for changes to the screen size
      const mediaQuery = window.matchMedia("(max-width: 500px)");

      // Set the initial value of the `isMobile` state variable
      setIsMobile(mediaQuery.matches);
  
      // Define a callback function to handle changes to the media query
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };
  
      // Add the callback function as a listener for changes to the media query
      mediaQuery.addEventListener("change", handleMediaQueryChange);
  
      // Remove the listener when the component is unmounted
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);
  return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{position:[30,3,2],fov:25}}
    width={'100px'}
    gl ={{preserveDrawingBuffer:true}}
    >
      <ambientLight intensity={0.5} />
<Suspense fallback={<CanvasLoader/>}>
  <OrbitControls 
  enableZoom={false}
  maxPolarAngle={2}
  minPolarAngle={1}
  autoRotate = {true}
  autoRotateSpeed={1}
  
  />
  <Computer isMobile={isMobile}/>
</Suspense>
<Preload all/>
    
    </Canvas>
  )
}
