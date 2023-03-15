import { Button,Box, Stack, useDisclosure, Center, Menu ,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,} from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import image from "./Yash_img.jpg";

const Navbar = () => {
  const Links = [ "Projects", "About"];
  
  return (
    <nav className='navbar' >
      <div className='container' >
        <div className='cont-left' >
          <div><img src="" alt="" /></div>
          <ul>
            <li>Home</li>
            <li className='none'>About</li>
            <li className='none'>Projects</li>
          </ul>
        </div>
        <div className='cont-right' >
          <p className='bounce none'>Contacts</p>
         <Box className='hire-now none'> <Button>Hire Now</Button></Box>
          <Box>
          <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={image} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={image} />
                  </Center>
                  <br />
                  <Center>
                    <p>Yash Raj Gupta</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Projects</MenuItem>
                  <MenuItem>About</MenuItem>
                  <MenuItem>Contacts</MenuItem>
                </MenuList>
              </Menu>
        </Box>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
