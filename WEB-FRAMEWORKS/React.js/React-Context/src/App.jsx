import './App.css'
import 'tachyons'
import { useState, useContext, createContext } from 'react'

/* NOTES:
- Everytime the state changes, the component re-renders.

*/

// createContext
const CountContext = createContext()

// CountProvider
function CountProvider(props) {
  const [count, setCount] = useState(0)

  return (
    <CountContext.Provider value={[count, setCount]}>
      {props.children}
    </CountContext.Provider>
  )
}

// Component-1: show
//re-render
function ChildComponent() {
  const count = useContext(CountContext)

  return (
    <div>
      <h2 className='mt6 mb3 f2'>
        First Component, {count}
      </h2>
    </div>
  )
}


// Component-2: update
//change
function GrandchildComponent() {
  let [count, setCount] = useContext(CountContext)

  return (
    <div>
      <button onClick={() => setCount(++count)}>
        Increment by 1
      </button>
    </div>
  )
}


function App() {

  return (
    <div className='mr3 grey'>
      <div>
        <h1 className='light-blue'>useContext</h1>
        <hr />
      </div>

      <div>
        <CountProvider>
          <ChildComponent></ChildComponent>
          <GrandchildComponent></GrandchildComponent>
        </CountProvider>
      </div>

    </div>
  )
}

export default App
