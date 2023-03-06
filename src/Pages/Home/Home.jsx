import { Box,Heading,Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './home.css'

const Home = () => {
  return (
    <Box className='home_body' >
      <Navbar/>
      <Box className='home_cont'>
        <Heading className='name-yash bounce' id='name-yash'>Yash Raj</Heading>
        <Heading id='developer'>Front-End Developer</Heading>
      </Box>
    </Box>
  )
}

export default Home
