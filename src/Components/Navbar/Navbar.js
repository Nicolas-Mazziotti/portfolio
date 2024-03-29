import React from 'react';
import { NavbarContainer, SocialContainer, NavbarItems } from '../Styles/Navbar.styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { HashLink } from 'react-router-hash-link';


export const Navbar = () => {
  return (
    <NavbarContainer>
        {/* <SocialContainer>
          <a target="_blank" rel="noreferrer" href="https://github.com/Nicolas-Mazziotti"><GitHubIcon fontSize="large"/></a>
          <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/nicolas-mazziotti"><LinkedInIcon fontSize="large"/></a>
          <a target="_blank" rel="noreferrer" href="mailto: nicolas.mazziotti1@gmail.com"><MailOutlineIcon fontSize="large"/></a>
        </SocialContainer> */}
        <NavbarItems>
          <HashLink to="#skills"><li>Skills</li></HashLink>
          <HashLink to="#portfolio"><li>Projects</li></HashLink>  
          <HashLink to="#contact"><li>Contact</li></HashLink>
        </NavbarItems>
    </NavbarContainer>
        
  )
}
export default Navbar
