import React from 'react'
import { Cards } from '../Styles/Items.styles'

const Items = ({cards}) => {
  return (
    <Cards>
        <p>{cards.name}</p>
    </Cards>
  )
}

export default Items