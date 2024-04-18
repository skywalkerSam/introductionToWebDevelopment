import { useEffect } from "react";

// using props.shit bloats the code, so im destructuring...
export default function Header({wins, handleReset}) {
    useEffect(
        () => {document.title = 'Wins: ' + wins}, [wins]
    )

    return (
        <header className="header">
            <h4>Wins: {wins}</h4>
            <h3>Memento</h3>
            <button onClick={handleReset}>Reset Game!</button>
        </header>
    )
}
