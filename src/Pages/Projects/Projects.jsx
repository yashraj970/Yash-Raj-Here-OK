import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import './Project.css'
import NykaaLogo from '../../images/Nykaa Logo.png'
import PharmEasyLogo from '../../images/PharmEasy Logo.png'
import BridalLogo from '../../images/Bridal Logo.png'


const Projects = () => {


  return (
    <div className='Projects_body' >
      <Box><Heading textAlign={'center'} fontSize={'55px'}>Projects</Heading></Box>

      <Box className='projects'>
        <Box>
          <a target={'_blank'} href="https://faithful-gun-126.vercel.app/"> <Image src={BridalLogo}/></a>
          <Box className='content'>
          <Text className='heading'>Bridal Dresses E-commerce website</Text>
          <Text fontWeight={'bold'}>Details: (Solo Project)</Text>
          <ul>
            <li>Tech stack used - React JS, Chakra UI, Advance JavaScript</li>
            <li>Created Home , Login , Add to Cart, Product page</li>
            <li>Added Responsiveness to all the pages.</li>
            <li>We Can Add Products to Cart</li>
            <li>On Cart Page User is able to delete item from cart.</li>
            <li>Hovering Effects , Responsive Website</li>
          </ul>
          </Box>
        </Box>
        <Box>
        <Box>
        <a target={'_blank'} href="https://cozy-entremet-87164e.netlify.app/"> <Image src={NykaaLogo}/></a>
        <Box className='content'>
          <Text className='heading'>Nykaa E-commerce website</Text>
          <Text fontWeight={'bold'}>Details: (Group Project)</Text>
          <ul>
            <li>Tech stack used - HTML, CSS, JavaScript.</li>
            <li>A group project built in a span of 5 days</li>
            
          <Text fontWeight={'bold'}>Area of responsibility:</Text>
            <li>Created Responsive Home page , Navbar from scratch</li>
            <li>Designed Login Page</li>
            <li>Added Responsiveness</li>
            <li>Created Home page Poster changing functionality</li>
          </ul>
          </Box>
        </Box></Box>
        <Box>

          {/* PharmEasy Project  */}
        <Box>
         <a target={'_blank'} href="https://melodic-stardust-faacc2.netlify.app/"> <Image src={PharmEasyLogo}/></a>
        <Box className='content'>
          <Text className='heading'>PharmEasy E-commerce website</Text>
          <Text fontWeight={'bold'}>Details: (Solo Project)</Text>
          <ul>
            <li>Tech stack used - HTML, CSS, JavaScript.</li>
            <li>Created Home , Login , Add to Cart, Product page.</li>
            <li>Added Responsiveness to all the pages.</li>
            <li>We Can Add Products to Cart</li>
            <li>On Cart Page User is able to delete item from cart.</li>
            <li>Hovering Effects , Responsive Website</li>
          </ul>
          </Box>
        </Box></Box>
      </Box>
    </div>
  )
}

export default Projects
