import { background, Box, Heading } from '@chakra-ui/react'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const Cube = () => {
  return (
    <Box>
        <Canvas camera={{fov:25 , position:[5,5,5]}}>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <directionalLight position={[3,2,1]} />
            <mesh>
              <boxGeometry args={[1.5,1.5,1.5]}/> 
              <meshStandardMaterial color={'rgb(242, 188, 242)'}/>

            </mesh> 
        </Canvas>
    </Box>
  )
}

export default Cube


// const Cubemesh = () => {
//   const textRef = useRef()
//   useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime)))

//   return(
//   )
// }