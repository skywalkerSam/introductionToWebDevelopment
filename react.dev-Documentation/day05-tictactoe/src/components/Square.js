import React from "react";

export function Square({value, onSquareClick}){

    return(
        <div>
            <button className="square" onClick={onSquareClick}>
                {value}
            </button>
        </div>
    )
}

// 𝕏 , Ⓞ