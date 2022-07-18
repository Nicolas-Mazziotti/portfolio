import React, { useState,useEffect } from 'react'
import Items from '../Items/Items'
import { CardsData } from '../CardsData/CardsData'
import { CardsContainer, CardsTitle, Cards } from '../Styles/Items.styles'

const ItemsContainer = () => {
    const[cards, setCards] = useState([])

    useEffect(() =>{
        const promiseCards = new Promise ((resolve, reject) =>{
            resolve(CardsData)
        })
        promiseCards.then((res) => {
            setCards(res)
            console.log(res)
    })   
    })

  return (
    <CardsContainer>
        <CardsTitle>Portfolio</CardsTitle>
        <Cards>
        {cards.map ((item) => {
            return (<Items cards= {item} key={item.id}/>
        )})}
        </Cards>
    </CardsContainer>
  )
}

export default ItemsContainer