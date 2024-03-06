// Sharing data between components!

import React, { useState } from "react";
import {SharedButton} from "./SharedButton"


export default function App(){
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count+1)
    }

    return(
        <div>
            <h1>Sharing data between components!</h1>
            <br></br>
            <hr></hr>
            <h2>Shared component</h2>
            <h3>Button #1</h3>
            <SharedButton count={count} onClick={handleClick}></SharedButton>
            <h3>Button #2</h3>
            <SharedButton count={count} onClick={handleClick}></SharedButton>
            <h3>Button #3</h3>
            <SharedButton count={count} onClick={handleClick}></SharedButton>
            <br></br>
            <a href="https://react.dev/learn/tutorial-tic-tac-toe">Next Up: Tic-Tac-Toe</a>
        </div>
    );
}

