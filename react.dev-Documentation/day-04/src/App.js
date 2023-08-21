// Updating the screen!

import React, {Component} from "react";
import "./App.css";
import { CounterButton } from "./CounterButton";

export default class App extends Component {
  render(){
    return(
      <div className="App">
        <h1>Updating the screen!</h1>
        <h1>Using Hooks!</h1>
        <h3>- useState: built-in Hook provided by React.</h3>
        <br></br>
        <hr></hr>
        <h2>Implementing React state</h2>
        <CounterButton></CounterButton>
        <div>
          <h3>Button #2</h3>
          <CounterButton></CounterButton>
        </div>
        <div>
          <h3>Button #3</h3>
          <CounterButton></CounterButton>
        </div>

      </div>
    )
  }
}


