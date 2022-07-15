import React, { useState,useEffect } from 'react'
import Items from '../Items/Items'
import { CardsData } from '../CardsData/CardsData'
import { CardsContainer } from '../Styles/Items.styles'

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
        {cards.map ((item) => {
            return (<Items cards= {item} key={item.id}/>
        )})}
    </CardsContainer>
  )
}

export default ItemsContainer