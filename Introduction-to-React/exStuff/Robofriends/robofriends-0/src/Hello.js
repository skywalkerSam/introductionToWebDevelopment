import React, {Component} from "react";
import "./Hello.css";


// Functional component
const Hello = (props) => {
    return (
        <div className="f1 tc">
            <h1>Hello {props.name}!</h1>
            <p>{props.greeting}</p>
        </div>
    )
}




// // Class component
// class Hello extends Component {
//     render () {
//         return (
//             <div className="f1 tc">
//                 <h1>Hello World!</h1>
//                 <p>Hello {this.props.name}!</p>
//             </div>
//         )
//     }
// }

export default Hello;