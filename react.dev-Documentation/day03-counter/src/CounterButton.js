import React, { useState } from "react";

export function CounterButton() {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count+1);    
    }

    return(
        <div>
            <button onClick={handleClick}
                style={{margin:'3%', padding:"2%", color:"green" , fontSize:"3rem", fontFamily:"Ubuntu Mono", background: "black"}}>
                    Clicked {count} times!
            </button>

        </div>
    );
}


