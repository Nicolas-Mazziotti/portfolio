import React, {useState, useEffect} from 'react';
import HtmlIcon from '../../assets/html_icon.png';
import CssIcon from '../../assets/css_icon.png';
import JsIcon from '../../assets/js_icon.png';
import ReactIcon from '../../assets/react_icon.png';
import GitIcon from '../../assets/git_icon.png';
import NodeIcon from '../../assets/node_icon.png'
import html5 from '../../assets/html5-brands.svg'
import {SkillsContainer, IconsContainer} from '../Styles/Skills.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Skills = () => {
  
  return (
    <SkillsContainer>
        <h6>Skills</h6>
          <IconsContainer>
            <img src = {HtmlIcon} alt=""/>
            <img src = {CssIcon} alt =""/>
            <img src = {JsIcon} alt = ""/>
            <img src = {ReactIcon} alt =""/>
            <img src = {GitIcon} alt=""/>
            <img src = {NodeIcon} alt=""/>
            {/* <img src = {html5} alt=""/> */}
            
          </IconsContainer>
    </SkillsContainer>
  )
}
export default Skills