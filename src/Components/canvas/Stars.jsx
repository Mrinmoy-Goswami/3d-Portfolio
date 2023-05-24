import React from 'react'
import { Suspense,useEffect,useState } from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'
// import { AmbientLight } from 'three'

function Stars  ()  {
  const space = useGLTF('./nebula_mapa/scene.gltf')

  return (
   <mesh>
<hemisphereLight intensity={0.5}/>
<pointLight intensity={1} />
<primitive
object={space.scene}
scale = {4}
position={[0,1,0]}
/>
   </mesh>
  );
};

const StarsCanvas = () => {
  return (
       <div className='h-screen w-full    '>

      <Canvas className='h-screen'
      
      frameloop="demand"
     
      gl={{preserveDrawingBuffer:true}}
      camera={{ position: [-10, 10, 50], fov:10 }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
  enableZoom={false}
  maxPolarAngle={5}
  minPolarAngle={1}
  autoRotate = {true}
  autoRotateSpeed={0.5}
  
  />
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
  </div>
    
  );
};

export default StarsCanvas;