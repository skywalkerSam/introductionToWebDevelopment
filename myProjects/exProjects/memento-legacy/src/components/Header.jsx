// component: Header.jsx

import { useEffect } from "react";

// using props.shit bloats the code, so im destructuring...
export default function Header({ wins, handleReset }) {
    useEffect(
        () => { document.title = 'WINS: ' + wins }, [wins]
    )

    return (
        <header className="header">
            <h3>WINS: {wins}</h3>
            <h2>MEMENTO</h2>
            <button onClick={handleReset}>RESET</button>
        </header>
    )
}


// NOTE: `CSS` defined on `index.css` for some reason...