import { Component } from "react";
import './App.css'
import ParticlesBg from "particles-bg";
import { Logo } from "./components/Logo/Logo";
import { Navigation } from "./components/Navigation/Navigation";
import { ImageLinkForm } from "./components/ImageLinkForm/ImageLinkForm";
import { Rank } from "./components/Rank/Rank";
import { FaceRecognition } from "./components/FaceRecognition/FaceRecognition";
import Clarifai from 'clarifai'

const PAT = '46286541c4f34ed9b4f218f285777e05';
const USER_ID = 'skywalkersam';       
const APP_ID = 'facerecognitionbrain-frontend';
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    

const returnClarifaiRequestOptions = (imageUrl) => {
    const IMAGE_URL = imageUrl;
    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });
    
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    return requestOptions;
}







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
        console.log('Fetching... Waiting for Clarifai response...')
        this.setState({imageUrl: this.state.input})
        fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", returnClarifaiRequestOptions(this.state.imageUrl))
            .then(response => response.json())
                // .then(response => {
                //     console.log('Hi', response)
                //     if (response) {
                //         fetch('http://localhost:3000/image', {
                //             method: 'put',
                //             headers: {'Content-Type': 'application/json'},
                //             body: JSON.stringify({
                //                 id: this.state.user.id
                //             })
                //         })
                //     }
                // })
            .catch(error => console.log('error', error));

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
