import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { SocialContainer } from '../Styles/SocialNavbar.styles';

const SocialNavbar = () => {
  return (
            <SocialContainer>
                <ul>
                <li><a target="_blank" rel="noreferrer" href="https://github.com/Nicolas-Mazziotti"><GitHubIcon fontSize="large"/></a></li>
                <li><a target="_blank" rel="noreferrer" href="mailto: nicolas.mazziotti1@gmail.com"><MailOutlineIcon fontSize="large"/></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://linkedin.com/in/nicolas-mazziotti"><LinkedInIcon fontSize="large"/></a></li>
                </ul>
            </SocialContainer>
  )
}

export default SocialNavbar