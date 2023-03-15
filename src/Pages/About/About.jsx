import { Box, Grid, GridItem, Heading,Link,Text } from '@chakra-ui/react'
import React from 'react'
import Cube from '../../Components/Cube/Cube'
import './About.css'
import {BsLinkedin,BsGithub} from 'react-icons/bs'

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

     <Box className='social-cont'>
      <Text className='social-text'>Know More</Text>
     <Box className='social'>
      <a target={'_blank'} href="https://www.linkedin.com/in/yash-raj-a9037b242/"><BsLinkedin size={25}/></a>
      <a target={'_blank'} href="https://github.com/yashraj970"><BsGithub size={25}/></a>
      <a target={'_blank'} href="https://drive.google.com/file/d/1CW1NVMM5x3kJfmwi6hGIT8GgOi0tJWP_/view?usp=drivesdk">Resume</a>
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
