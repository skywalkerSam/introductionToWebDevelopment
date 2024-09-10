import React from "react";

export function TheButton(){
    function handleClick(){
        alert("You Clicked this Button :)");
    }

    return(
        <div>
            <button onClick={handleClick} 
            style={{margin:'3%', padding:"2%", color:"green" , fontSize:"3rem", fontFamily:"Ubuntu Mono", background: "black"}}>
                Click Me!
            </button>
        </div>
    );
}

