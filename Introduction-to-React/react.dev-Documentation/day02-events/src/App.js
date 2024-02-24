// Responding to events!

import React, { Component } from "react";
import { TheButton } from "./TheButton";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Responding to events!</h1>
        <br></br>
        <h2><a href="https://www.react.dev/learn">react.dev</a>-Documentation, Day-03</h2>
        <p>// <strong>npx</strong> creates different template for <em>linux and windows systems</em>, wtf? why?? On windows, App.js was a functional component, on linux it's a class component. It looks different and the scripts are also a bit different! </p>
        <hr></hr>
        <TheButton></TheButton>
      
      </div>
    )
  }
}















// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
