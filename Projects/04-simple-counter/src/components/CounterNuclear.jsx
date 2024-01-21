import { useEffect, useState } from "react";

export function CounterNuclear() {
    const [count, setCount] = useState(0);

    // Nuclear 🤯🤯
    useEffect(() => {
        setCount(count + 1)
    }, [count])

    function nuclearCount() {
        setCount(count + 1)
    }
    return (
        <div>
            <div className="f2 tc">
                <h1>The Counter Nuclear... !</h1>
            </div>
            <div className="tc mt5 pa5">
                <button onClick={nuclearCount}
                    className="tc f1 pointer grow pa3 br3 bg-transparent">
                    Clicked "{count}" Times!
                </button>
            </div>
        </div>
    )
}