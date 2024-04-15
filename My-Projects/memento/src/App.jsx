import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import shuffle from './utilities/shuffle'
import Card from './components/Card'

export default function App() {
  const [cards, setCards] = useState(shuffle)    // Shuffled stated cards array from assets
  const [firstPick, setFirstPick] = useState(null)
  const [secondPick, setSecondPick] = useState(null)
  const [intentionalFreeze, setintentionalFreeze] = useState(false)   // Intentional Delay
  const [wins, setWins] = useState(0)


  function handleClick(card) {
    if (!intentionalFreeze) {
      firstPick ? setSecondPick(card) : setFirstPick(card)
    }
  }


  function handleFlip() {
    setFirstPick(null)
    setSecondPick(null)
    setintentionalFreeze(false)
  }


  // game logic
  useEffect(() => {
    let timer;

    if (firstPick && secondPick) {
      // console.log(firstPick, secondPick)
      if (firstPick.image === secondPick.image) {
        // console.log(firstPick.image, secondPick.image)
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === firstPick.image) {
              // matched
              // console.log(card)
              return { ...card, matched: true }
            } else {
              // no match
              return card;
            }
          })
        })
        // turn the cards back over
        handleFlip()
      } else {
        setintentionalFreeze(true)
        // delay between selections
        timer = setTimeout(() => {
          handleFlip()
        }, 1000)

      }
    }

    return () => {
      // cleanup
      clearTimeout(timer)
    }

  }, [cards, firstPick, secondPick])


  // what defines a win?
  useEffect(() => {

  }, [cards, wins])

  return (
    <div className="grid">
      {
        cards.map((card) => {
          const { image, id, matched } = card;

          // Rather than returning a div, we return a Card component...
          return (
            <Card
              key={id}
              image={image}
              selected={card === firstPick || card === secondPick || matched}
              onClick={() => handleClick(card)}>

            </Card>
          )
        })
      }
    </div>
  );
}
