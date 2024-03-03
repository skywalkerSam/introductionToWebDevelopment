import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [prevCount, setPrevCount] = useState(0)

  // const [state, setState] = useState({ count: 0, user: 'Bob' });

  const handleClick = () => {
    setCount((prev) => {      // `prev` is a parameter, holds the previous state of count
      setPrevCount(prev);
    });
    setCount(count + 1);
  };

  // const handleClick = () => {
  //   setState({
  //     ...state,l
  //     count: state.count + 1,
  //   });
  // };


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Introduction to State</h1>

      <h2>Previous count: {prevCount}</h2>
      <h2>Current count: {count}</h2>
      {/* <h3>Count: {state.count}</h3>
      <h3>User: {state.user}</h3> */}
      <button onClick={handleClick} className='button0'>Increment</button>




      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
