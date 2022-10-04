import React from 'react'
import Header from '../../Components/Header/Header'
import Skills from '../../Components/Skills/Skills'
import ItemsContainer from '../../Components/ItemsContainer/ItemsContainer'
import Contact from '../../Components/Contact/Contact'

const Home = () => {
  return (
    <>
        <Header/>
        <Skills/>
        <ItemsContainer/>
        <Contact/>
    </>
  )
}

export default Home