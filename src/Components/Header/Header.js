import React from 'react'
import { HeaderContainer, TitleContainer } from '../Styles/Header.styles'
import ProfilePhoto from "../../assets/profile_photo.jpg"
export const Header = () => {
  return (
    <HeaderContainer>
        <img src={ProfilePhoto} alt=""/>
        <TitleContainer>
        <h5>Nicolas Mazziotti</h5>
        <p>A Front-End Web Developer</p>
        </TitleContainer>
    </HeaderContainer>
        
  )
}

export default Header
