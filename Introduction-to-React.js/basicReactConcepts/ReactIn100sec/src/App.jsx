import { useState } from 'react'
import './App.css'
import 'tachyons'

function App(){
  let [count, setCount] = useState(0)

  return(
    <div>
      <h1>React In 100sec</h1>

      <div>
        <h2>

          <button onClick={() => {setCount(++count)}}>
            Unlimited Power... {count}!
          </button>
        </h2>
      </div>
    </div>
  )
}

export default App
