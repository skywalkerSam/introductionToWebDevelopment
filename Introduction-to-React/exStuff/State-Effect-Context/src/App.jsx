import { useState, useContext, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countdown from './components/Countdown'

// Context
const CountContext = createContext();

function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function Count() {
  const { count } = useContext(CountContext);

  // return <h3>{`Current count: ${count}`}</h3>;
  return <h3>Current Count: {count}</h3>;
}

function CountButton() {
  // The error was here with the over-engineered onClick event, and with var/const.... lol ;)
  var { count, setCount } = useContext(CountContext);
  return (
    <button onClick={() => setCount(++count)}
      className='button2'>
      Increment
    </button>
  );
}



function App() {
  const [count, setCount] = useState(0)

  // Lifecycle n' Effects
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

      <hr />
      {/* State Management */}
      <h1>Introduction to State</h1>
      <h2>Previous count: {prevCount}</h2>
      <h2>Current count: {count}</h2>
      {/* <h3>Count: {state.count}</h3>
      <h3>User: {state.user}</h3> */}
      <button onClick={handleClick} className='button0'>Increment</button>
      <hr />

      {/* Lifecycle & Effects */}
      <h1>Lifecycle & Effects</h1>
      <Countdown hr={0} min={2} sec={0}></Countdown>
      <hr />

      {/* Context */}
      <h1>Context</h1>
      <CountProvider>
        <Count />
        <CountButton />
      </CountProvider>
      <hr />



      <div className="card">
        <button onClick={() => setCount((count) => ++count)}>
          count is {count}
        </button>
        <h3>Life goes on...</h3>
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
