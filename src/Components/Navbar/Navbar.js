import React from 'react'
import { NavbarContainer } from '../Styles/Navbar.styles'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <NavbarContainer>
            <Link to="/"><li>About Me</li></Link>
            <Link to="/"><li>Projects</li></Link>
            <Link to="/"><li>Contact</li></Link>  
    </NavbarContainer>
        
  )
}
export default Navbar
