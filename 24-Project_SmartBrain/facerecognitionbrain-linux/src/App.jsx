import './App.css'
import { Component } from "react";  
import { Navigation } from "./components/Navigation/Navigation";
import { Logo } from "./components/Logo/Logo";

export default class App extends Component{
  render(){
    return(
      <div>
        <Navigation></Navigation>
        <Logo></Logo>
      </div>
    )
  }
}
