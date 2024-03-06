import { Component, useState, useContext, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


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
  // return <h2>{`Current count: ${count}`}</h2>;
  return <h2>Current Count: `{count}`</h2>
}

function CountButton() {
  // Error was here, remember it?
  let { count, setCount } = useContext(CountContext);
  return (
    <button onClick={() => setCount(++count)}
      className='button1'>
      Increment by 1
    </button>
  );
}

// Error Boundary
class ErrorBoundary extends Component {     // React.Component
  // State for class component
  constructor(props) {
    super(props);
    // Change to true to enable error
    this.state = { hasError: false };    // true
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(err, errInfo) {
    console.log('Something went horribly wrong... lol ;)', err, errInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h3>Fallback UI</h3>
        </div>
      );
    }
    return this.props.children;
  }
}


function App() {
  // const [count, setCount] = useState(0)

  return (
    <ErrorBoundary>
      {/* Error Boundary */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <hr />
      {/* Context */}
      <h1>Context with useContext()</h1>
      <CountProvider>
        <Count />
        <CountButton />
      </CountProvider>
      
      <hr />


      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ErrorBoundary>
  )
}

export default App;
