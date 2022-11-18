import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import './Grid.css'
const Grid = () => {
  const [cards, setCards] = useState(
    [
      { id: 0, name: 'Bryan Cranston', status: '', img: '/images/01.jpg' },
      { id: 0, name: 'Bryan Cranston', status: '', img: '/images/01.jpg' },
      { id: 1, name: 'Bryan Cranston', status: '', img: '/images/02.jpg' },
      { id: 1, name: 'Bryan Cranston', status: '', img: '/images/02.jpg' },
      { id: 2, name: 'Bryan Cranston', status: '', img: '/images/03.png' },
      { id: 2, name: 'Bryan Cranston', status: '', img: '/images/03.png' },
      { id: 3, name: 'Bryan Cranston', status: '', img: '/images/04.jpg' },
      { id: 3, name: 'Bryan Cranston', status: '', img: '/images/04.jpg' },
      { id: 4, name: 'Bryan Cranston', status: '', img: '/images/05.jpg' },
      { id: 4, name: 'Bryan Cranston', status: '', img: '/images/05.jpg' },
      { id: 5, name: 'Bryan Cranston', status: '', img: '/images/06.jpg' },
      { id: 5, name: 'Bryan Cranston', status: '', img: '/images/06.jpg' },
      { id: 6, name: 'Bryan Cranston', status: '', img: '/images/07.jpg' },
      { id: 6, name: 'Bryan Cranston', status: '', img: '/images/07.jpg' },
      { id: 7, name: 'Bryan Cranston', status: '', img: '/images/08.jpg' },
      { id: 7, name: 'Bryan Cranston', status: '', img: '/images/08.jpg' },
    ].sort(() => Math.random() - 0.5)
  )
  const [disabled, setDisabled] = useState(false)
  const [arrCouples, setArrCouples] = useState([])
  const [newClass, setNewClass] = useState(true)

  const changeClass = (e) => {
    let element = e.target.parentElement

    arrCouples.push(element.id)
    if (arrCouples[0] - arrCouples[1] == 0) {
      Object.values(cards).forEach((element) => {
        if (element.id == arrCouples[0]) {
          element.status = 'Couples'
        }
      })
    }
    if (arrCouples.length >= 2) {
      setArrCouples([])
    }
    newClass
      ? (e.target.className = 'card active')
      : (e.target.className = 'card ')
  }

  return (
    <div className='wrapper'>
      {cards.map((card, index) => {
        return (
          <Card
            imgClassName={card.status == 'Couples' ? 'img win' : 'img'}
            key={index}
            card={card}
            index={index}
            changeClass={() => changeClass}
          />
        )
      })}
    </div>
  )
}

export default Grid
