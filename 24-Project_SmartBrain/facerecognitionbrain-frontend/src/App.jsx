import { Component } from "react";
import './App.css'
import ParticlesBg from "particles-bg";
import { Logo } from "./components/Logo/Logo";
import { Navigation } from "./components/Navigation/Navigation";
import { ImageLinkForm } from "./components/ImageLinkForm/ImageLinkForm";
import { Rank } from "./components/Rank/Rank";
import { FaceRecognition } from "./components/FaceRecognition/FaceRecognition";
// import Clarifai from 'clarifai'

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            input: '',
            imageUrl:'',
        }
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value})
        console.log('Image URL:', event.target.value);
    }

    onButtonSubmit = () => {
        console.log('Fetching the Image... ')
        this.setState({imageUrl: this.state.input})
        
    }

    render(){
        return(
            <div className="App">
                <ParticlesBg num={69} type="square" bg={true} />
                <Navigation></Navigation>
                <Logo></Logo>       
                <Rank></Rank>
                <ImageLinkForm 
                    onInputChange={this.onInputChange}
                    onButtonSubmit={this.onButtonSubmit}>
                </ImageLinkForm>
                <FaceRecognition imageUrl={this.state.imageUrl}></FaceRecognition>

            </div>
        )
    }
}

// https://cdna.artstation.com/p/assets/images/images/067/669/592/large/blu1304-rey-045.jpg?1695918402
