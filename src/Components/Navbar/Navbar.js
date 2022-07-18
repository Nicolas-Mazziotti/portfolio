import React from 'react'
import { NavbarContainer, SocialContainer } from '../Styles/Navbar.styles'
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const Navbar = () => {
  return (
    <NavbarContainer>
          <SocialContainer>
            <Link to="/"><GitHubIcon fontSize="large"/></Link>
            <Link to="/"><LinkedInIcon fontSize="large"/></Link>
            <Link to="/"><MailOutlineIcon fontSize="large"/> </Link>
          </SocialContainer>
        <Link to="/"><li>About Me</li></Link>
        <Link to="/"><li>Projects</li></Link>  
        <Link to="/"><li>Contact</li></Link>
    </NavbarContainer>
        
  )
}
export default Navbar
