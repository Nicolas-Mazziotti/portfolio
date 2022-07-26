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
          <a target="_blank" rel="noreferrer" href="https://github.com/Nicolas-Mazziotti"><GitHubIcon fontSize="large"/></a>
          <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/nicolas-mazziotti"><LinkedInIcon fontSize="large"/></a>
          <a target="_blank" rel="noreferrer" href="mailto: nicolas.mazziotti1@gmail.com"><MailOutlineIcon fontSize="large"/></a>
        </SocialContainer>
          <Link to=""><li>About Me</li></Link>
          <Link to=""><li>Projects</li></Link>  
          <Link to=""><li>Contact</li></Link>
    </NavbarContainer>
        
  )
}
export default Navbar
