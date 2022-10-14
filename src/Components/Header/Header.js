import React from 'react'
import { HeaderContainer, TitleContainer } from '../Styles/Header.styles'
import ProfilePhoto from "../../assets/header_photo.png"
import Typed from 'react-typed';
import { positions } from '@mui/system';


export const Header = () => {
  return (
    <HeaderContainer>
        <img src={ProfilePhoto} alt=""/>
        <TitleContainer>
        <p>Hello I'm</p>
        <Typed
            strings = {['Nicolas Mazziotti']}
            typeSpeed= {80}
            backSpeed={50}
            style = {{position: 'absolute'}}
            loop >
            </Typed>
        <p>A Front-End Web Developer</p>
        </TitleContainer>
    </HeaderContainer>
        
  )
}

export default Header
