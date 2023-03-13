import { Box, Grid, GridItem, Heading,Text } from '@chakra-ui/react'
import React from 'react'
import Cube from '../../Components/Cube/Cube'
import './About.css'

const About = () => {
  return (
    <div className='About_body' >
     <Box><Text className='about-heading'>About Me</Text></Box> 
     <Box className='About-flex-box'>
      <Box>
        
     <Box className='About-text'>
      <Text>Hi There 👋</Text>
      <Text>I am Yash Raj , a Front End Developer from Patna, India. <br /> I have experience in creating <br /> Responsive and user-friendly interfacees of web applications</Text>
     </Box>

     <Box className='skills-cont'>
      <Text className='skills-text'>Skills</Text>
     <Box className='skills'>
        <Box>HTML</Box>
        <Box>CSS</Box>
        <Box>Javascript</Box>
        <Box>React</Box>
        <Box>jQuery</Box>
        <Box>Bootstrap</Box>
      </Box> 
     </Box>
      </Box>
     <Box className='cube-cont'>
      <Cube/>
     </Box>
     </Box>
    </div>
  )
}

export default About
