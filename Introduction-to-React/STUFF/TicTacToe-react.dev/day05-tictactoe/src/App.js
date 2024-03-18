// Tic Tac Toe ;)

import React, {Component} from "react";
import { Board } from "./components/Board";


export default class App extends Component {
  render(){
    return(
      <div>
        <h1>Tic Tac Toe ;)</h1>
        <h3>
          - <a href="https://react.dev/learn/tutorial-tic-tac-toe">from react.dev</a>
        </h3>
        <br></br>
        <hr></hr>
        <Board></Board>

      </div>
    )
  }
}

