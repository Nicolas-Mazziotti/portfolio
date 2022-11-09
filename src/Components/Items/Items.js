import React from 'react'
import { CardsItem } from '../Styles/Items.styles'



const Items = ({cards}) => {
  return (
      <CardsItem className="card m-5 position-static" >
      <img src={cards.img} className="card-img-top img-fluid" alt="..."/>
        <div className="card-body text-white">
          <p className="card-text">{cards.description}</p>
          <a href={cards.link} className="btn btn-dark me-2">Page</a>
          <a href={cards.repository} className="btn btn-dark">Repository</a>
        </div>
    </CardsItem>  

  )
}

export default Items



