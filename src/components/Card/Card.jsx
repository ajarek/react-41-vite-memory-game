import React from 'react'
import './Card.css'

const Card = ({changeClass,index,card,imgClassName}) => {
  return (
    <div
            id={card.id}
            className={'card'}
            onClick={changeClass(index)}
          >
             <img className={imgClassName} src={card.img} alt={card.name} />
          </div>
  )
}

export default Card