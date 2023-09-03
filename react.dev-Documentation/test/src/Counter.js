import React, { useState } from "react";

export function Counter(){

    const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count+1)
        console.log("Clicked!")
    }
    return(
        <div>
            <button
                onClick={handleClick}
            >{count} Click Me!
            </button>
        </div>
    )
}
