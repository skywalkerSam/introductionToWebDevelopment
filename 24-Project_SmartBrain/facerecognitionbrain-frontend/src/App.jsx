import { Component } from "react";
import './App.css'
import ParticlesBg from "particles-bg";
import { Logo } from "./components/Logo/Logo";
import { Navigation } from "./components/Navigation/Navigation";
import { ImageLinkForm } from "./components/ImageLinkForm/ImageLinkForm";
import { Rank } from "./components/Rank/Rank";

export default class App extends Component{
    render(){
        return(
            <div className="App">
                <ParticlesBg num={150} type="lines" bg={true} />
                <Navigation></Navigation>
                <Logo></Logo>
                <Rank></Rank>
                <ImageLinkForm></ImageLinkForm>

            </div>
        )
    }
}
