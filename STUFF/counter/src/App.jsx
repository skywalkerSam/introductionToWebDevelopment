import { Component } from "react";
import './App.css';
import { Counter } from "./components/Counter";
import 'tachyons';
import { CounterNuclear } from "./components/CounterNuclear";


export default class App extends Component{
  
  render(){
    return(
      <div>
        <div>
          <header className='f2 tc mr3'>
                  <h1>A Simple Counter ;)</h1>
          </header>
        </div>
          <Counter></Counter>
          {/* <CounterNuclear></CounterNuclear> */}

      </div>
    )
  }
}
