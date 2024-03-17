/*
DEV: skywalkerSam
Purpose: Countdown Timer
Stardate: 12024.03.14.1353
*/

import './App.css'
import 'tachyons'
import React, { useState, useEffect } from 'react'

// Countdown Component
function Countdown(props) {
  // States
  let [over, setOver] = useState(false)
  let [paused, setPause] = useState(true)
  let [[h, m, s], setTime] = useState([props.hr, props.min, props.sec])


  // Tick
  function tick() {
    // console.log(over, paused)

    if (paused || over) {
      return null
    } else if (h === 0 && m === 0 && s === 0) {
      setOver(true)
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59])
    } else if (s === 0) {
      setTime([h, m - 1, 59])
    } else {
      setTime([h, m, s - 1])
    }
  }

  // Pause
  function handlePause() {
    setPause(!paused)
  }

  // Reset
  function resetCountdown() {
    setTime([props.hr, props.min, props.sec])
    setPause(true)
    setOver(false)
  }

  // Format time values to `00:00:00`
  function formatValues(values) {
    return values.toString().padStart(2, '0')
  }

  // useEffect, 1000ms
  useEffect(() => {
    let ticker = setInterval(() => tick(), 1000)
    return (() => {
      clearInterval(ticker)
    })
  })


  return (
    <div>

      <div>
        <h1>
          {formatValues(h)}:{formatValues(m)}:{formatValues(s)}
        </h1>
      </div>

      <div className='mr3 mt5'>
        <button
          className='green'
          onClick={handlePause}>
          {paused ? 'Let\' Go...' : 'STOP!'}
        </button>

        <button
          className='ml4 red'
          onClick={resetCountdown}>
          Fuck, Reset!
        </button>
      </div>

    </div>

  )
}


function App() {

  return (
    <div className='mr3 red'>

      <div>

        <h1 className='green'>Lifecycle and Effects</h1>
        <hr />
      </div>

      <Countdown hr={0} min={0} sec={30}></Countdown>

    </div>
  )
}

export default App
