import React, { useState } from "react";
import { Square } from "./Square";
import styled from "styled-components";


const BoardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;


export function Board() {
    const [xIsNext, setxIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));


    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        if (squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "𝕏";
        } else {
            nextSquares[i] = "Ⓞ";
        }
        setSquares(nextSquares);
        setxIsNext(!xIsNext);

    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner + " 🎉";
    } else {
        status = "Next Player: " + (xIsNext ? "𝕏" : "Ⓞ");
    }

    return (
        <BoardWrapper>
            <div>
                <div className="status mt5 mb3 f1 red">
                    {status}
                </div>
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
                </div>
                <div className="board-row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
                </div>
                <div className="board-row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
                </div>
            </div>
        </BoardWrapper>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

//  𝕏, Ⓞ