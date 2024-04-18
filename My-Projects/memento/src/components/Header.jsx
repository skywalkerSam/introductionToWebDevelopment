import { useEffect } from "react";

// using props.shit bloats the code, so im destructuring...
export default function Header({wins, handleReset}) {
    useEffect(
        () => {document.title = 'Wins: ' + wins}, [wins]
    )

    return (
        <header className="header">
            <h3>Wins: {wins}</h3>
            <h2>Memento</h2>
            <button onClick={handleReset}>Reset Game!</button>
        </header>
    )
}
