import { Component } from "react";
import { Logo } from "./components/Logo/Logo";
import { Navigation } from "./components/Navigation/Navigation";

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
