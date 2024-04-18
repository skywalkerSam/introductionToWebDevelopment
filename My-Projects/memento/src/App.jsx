/**
DEV: skywalkerSam
Aim: Memory Card Game, memento
Stardate: 12024.04.18.0240


DEV NOTES:
- `!` is the base logic

*/

import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import shuffle from './utilities/shuffle'
import Card from './components/Card'
import Header from './components/Header';

export default function App() {
  const [cards, setCards] = useState(shuffle)    // Shuffled stated cards array from assets
  const [firstPick, setFirstPick] = useState(null)
  const [secondPick, setSecondPick] = useState(null)
  const [intentionalFreeze, setIntentionalDelay] = useState(false)   // Intentional Delay
  let [wins, setWins] = useState(0)

  // handle click, primary logic
  function handleClick(card) {
    if (!intentionalFreeze) {
      firstPick ? setSecondPick(card) : setFirstPick(card)
    }
  }

  // handle turn, reset picks, and intentional delay...
  function handleTurn() {
    setFirstPick(null)
    setSecondPick(null)
    setIntentionalDelay(false)
  }

  // reset
  function handleReset() {
    setWins(0)
    handleTurn()
    setCards(shuffle)
  }

  // main game logic, useEffect
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
        handleTurn()
      } else {
        // setIntentionalDelay(true)     // for testing
        // delay between selections
        timer = setTimeout(() => {
          handleTurn()
        }, 1000)

      }
    }

    // cleanup
    return () => {
      clearTimeout(timer)
    }

  }, [cards, firstPick, secondPick])


  // what defines a win?
  useEffect(() => {
    let verifyWin = cards.filter((card) => !card.matched)

    if (cards.length && verifyWin.length < 1) {
      setWins(++wins)
      handleTurn()
      setCards(shuffle)
      console.log('Wins:', wins)
      // console.log('cards length:', cards.length)
      // console.log('verifyWin:', verifyWin.length)
      // console.log('cards:', cards)
    }

  }, [cards, wins])


  return (
    <div>
      <Header handleReset={handleReset} wins={wins}></Header>

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
    </div>
  );
}
