// Dev: @skywalkerSam
// Purpose: Simple Tic Tac Toe application
// Date: 12023.12.26.1808

import React, { Component } from "react";
import { Board } from "./components/Board";
import 'tachyons';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
`;


export default class App extends Component {
  render() {
    return (
      <div className="tc">
        <h1 style={{fontFamily: "'Roboto', sans-serif"}} className="f2">Tic Tac Toe ;)</h1>
        <h3 style={{fontFamily: "'Roboto', sans-serif"}} className="f5">
          <a href="https://react.dev/learn/tutorial-tic-tac-toe">react.dev</a>
        </h3>
        <br></br>
        {/* <hr></hr> */}
        <AppWrapper>
          <Board></Board>
        </AppWrapper>

      </div>
    )
  }
}

