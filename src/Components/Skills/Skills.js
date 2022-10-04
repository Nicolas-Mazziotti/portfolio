
import HtmlIcon from '../../assets/html_icon.png';
import CssIcon from '../../assets/css_icon.png';
import JsIcon from '../../assets/js_icon.png';
import ReactIcon from '../../assets/react_icon.png';
import GitIcon from '../../assets/git_icon.png';
import NodeIcon from '../../assets/node_icon.png';
import {SkillsContainer, IconsContainer} from '../Styles/Skills.styles';


export const Skills = () => {
  
  return (
    <SkillsContainer id="skills">
        <h6 id="aboutMe">Skills</h6>
          <IconsContainer>
            <img src = {HtmlIcon} alt=""/>
            <img src = {CssIcon} alt =""/>
            <img src = {JsIcon} alt = ""/>
            <img src = {ReactIcon} alt =""/>
            <img src = {GitIcon} alt=""/>
            <img src = {NodeIcon} alt=""/>      
          </IconsContainer>
    </SkillsContainer>
  )
}
export default Skills