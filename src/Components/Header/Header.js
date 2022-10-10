import React from 'react'
import { HeaderContainer, TitleContainer } from '../Styles/Header.styles'
import ProfilePhoto from "../../assets/header_photo.png"
export const Header = () => {
  return (
    <HeaderContainer>
        <img src={ProfilePhoto} alt=""/>
        <TitleContainer>
        <p>Hello I'm</p>
        <h6>Nicolas Mazziotti</h6>
        <p>A Front-End Web Developer</p>
        </TitleContainer>
    </HeaderContainer>
        
  )
}

export default Header
