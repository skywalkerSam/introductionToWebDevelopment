import React from "react";

export function SharedButton({count, onClick}){
    return(
        <div>
            <button onClick={onClick}
            style={{color:'red', background:'black', padding:'2%', fontSize:'2rem'}}>
                clicked {count} times!
            </button>
        </div>
    );
}


