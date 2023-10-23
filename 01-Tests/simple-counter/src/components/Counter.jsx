import { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0)

    function updateCount() {
        setCount(count + 1)
    }

    return (
        <div className="Counter">
            <div  className='mt5 tc'>
                <button className='b br3 pa3 ba b--green bg-transparent hover-green pointer tc f3 grow'
                    onClick={updateCount}>
                    Clicked "{count}" Times!
                </button>
            </div>
        </div>
    )
}