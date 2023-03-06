import { Button } from '@chakra-ui/react'
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar' >
      <div className='container' >
        <div className='cont-left' >
          <div><img src="" alt="" /></div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className='cont-right' >
          <p className='bounce'>Contacts</p>
          <Button>Hire Now</Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
