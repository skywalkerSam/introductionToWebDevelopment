/*
DEV: @skywalkerSam
Purpose: Tic Tac Toe
Stardate: 12024.03.07.0336
*/

import './App.css'
import { Board } from "./components/Board"
import 'tachyons'
import styled from 'styled-components'

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

function App() {
  return (
    <div className="tc">
      <a className='f2 red'
        href="https://react.dev/learn/tutorial-tic-tac-toe">
        Tic Tac Toe
      </a>
      <hr />

      <AppWrapper>
        <Board></Board>
      </AppWrapper>
    </div>
  )
}

export default App
