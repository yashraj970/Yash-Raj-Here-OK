import { background, Box, Heading } from '@chakra-ui/react'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const Cube = () => {
  return (
    <Box>
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate={true  } />
          <ambientLight intensity={1} />
          <directionalLight position={[3,2,1]} />
            <Cubemesh />
        </Canvas>
    </Box>
  )
}

export default Cube


const Cubemesh = () => {
  const textRef = useRef()
  useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime)))

  return(
    <mesh>
              <boxGeometry args={[2.5,2.5,2.5]} /> 
              <meshStandardMaterial>

              <RenderTexture attach="map">
                <PerspectiveCamera 
                makeDefault
                position={[0,0,2]}
                />
                <color attach='background' args={['rgb(240, 194, 245)']} />
                <Text ref={textRef} fontSize={0.8} color='rgb(103, 101, 101)'>
                hello
                </Text>
              </RenderTexture>
              </meshStandardMaterial>
            </mesh>
  )
}