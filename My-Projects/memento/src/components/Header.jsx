import { useEffect } from "react";

export default function Header(props) {
    useEffect(
        () => (document.title = (`Wins: ${props.wins}`)), [props.wins]
    )

    return (
        <header className="header">
            <h4>Wins: {props.wins}</h4>
            <h3>Memory Game</h3>
            <button onClick={props.handleNewGame}>New Game!</button>
        </header>
    )
}
