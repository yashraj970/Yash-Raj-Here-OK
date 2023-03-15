import { Box,Heading,Text,Image } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './home.css'
import Parallax from '../../Components/Parallax/Parallax'
import myimg from './Yash-removebg.png'


const Home = () => {
  return (
    <Box className='home_body' >
      <Navbar/>
      <Box w={'48vh'} margin={'auto'}>
        <Image w={'100%'} src={myimg} />
      </Box>
      <Parallax/>
    </Box>
  )
}

export default Home
