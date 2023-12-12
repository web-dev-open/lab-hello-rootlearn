import React from 'react'
import "./card.css"
const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.url} alt="" />
      <h1>{props.h}</h1>
      <p>{props.p}</p>
    </div>
  )
}

export default Card
