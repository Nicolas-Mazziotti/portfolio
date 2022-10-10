
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
            <div>
            <img src = {HtmlIcon} alt=""/>
            <p>HTML5</p>
            </div>
            <div>
            <img src = {CssIcon} alt =""/>
            <p>CSS3</p>
            </div>
            <div>
            <img src = {JsIcon} alt = ""/>
            <p>Javascript</p>
            </div>
            <div>
            <img src = {ReactIcon} alt =""/>
            <p>React</p>
            </div>
            <div>
            <img src = {GitIcon} alt=""/>
            <p>Github</p>
            </div>
            <div>
            <img src = {NodeIcon} alt=""/>
            <p>Node.js</p>
            </div>
                  
          </IconsContainer>
    </SkillsContainer>
  )
}
export default Skills