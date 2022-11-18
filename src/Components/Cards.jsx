import { useState, useRef } from 'react'
import Card from './Card'

export default function Cards() {
  const [cards, setCards] = useState(
    [
      { id: 0, status: '', img: '/images/01.jpg' },
      { id: 0, status: '', img: '/images/01.jpg' },
      { id: 1, status: '', img: '/images/02.jpg' },
      { id: 1, status: '', img: '/images/02.jpg' },
      { id: 2, status: '', img: '/images/03.jpg' },
      { id: 2, status: '', img: '/images/03.jpg' },
      { id: 3, status: '', img: '/images/04.jpg' },
      { id: 3, status: '', img: '/images/04.jpg' },
      { id: 4, status: '', img: '/images/05.jpg' },
      { id: 4, status: '', img: '/images/05.jpg' },
      { id: 5, status: '', img: '/images/06.jpg' },
      { id: 5, status: '', img: '/images/06.jpg' },
      { id: 6, status: '', img: '/images/07.jpg' },
      { id: 6, status: '', img: '/images/07.jpg' },
      { id: 7, status: '', img: '/images/08.jpg' },
      { id: 7, status: '', img: '/images/08.jpg' },
    ].sort(() => Math.random() - 0.5)
  )

  const [previousCardState, setPreviousCardState] = useState(-1)
  const previousIndex = useRef(-1)

  const matchCheck = (currentCard) => {
    if (cards[currentCard].id === cards[previousCardState].id) {
      cards[previousCardState].status = 'active matched'
      cards[currentCard].status = 'active matched'
      setPreviousCardState(-1)
    } else {
      cards[currentCard].status = 'active'
      setCards([...cards])
      setTimeout(() => {
        setPreviousCardState(-1)
        cards[currentCard].status = 'un-match'
        cards[previousCardState].status = 'un-match'
        setCards([...cards])
      }, 1000)
    }
  }

  const clickHandler = (index) => {
    if (index !== previousIndex.current) {
      if (cards[index].status === 'active matched') {
        alert('already matched')
      } else {
        if (previousCardState === -1) {
          previousIndex.current = index
          cards[index].status = 'active'
          setCards([...cards])
          setPreviousCardState(index)
        } else {
          matchCheck(index)
          previousIndex.current = -1
        }
      }
    } else {
      alert('card currently selected')
    }
  }

  return (
    <div className='container'>
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            card={card}
            index={index}
            clickHandler={clickHandler}
          />
        )
      })}
    </div>
  )
}
