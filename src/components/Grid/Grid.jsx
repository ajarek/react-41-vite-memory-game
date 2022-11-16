import React, { useState } from 'react'
import './Grid.css'
const Grid = () => {
  const [cards, setCards] = useState([
    1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8,
  ])
  const [newClass, setNewClass] = useState('true')
  const changeClass = (e) => {
    newClass
      ? (e.target.className = 'card active')
      : (e.target.className = 'card ')
  }

  return (
    <div className='wrapper'>
      {cards.map((card, index) => {
        return (
          <div
            key={index}
            className={'card'}
            onClick={changeClass}
          >
            <div className='item'>{card}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Grid
