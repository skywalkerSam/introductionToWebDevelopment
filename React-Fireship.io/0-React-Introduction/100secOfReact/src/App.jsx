import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Component: NameCard
function NameCard({name}){
  return(
    <div>
      <p>🔥 Hello {name}!</p>
    </div>
  )
}


function App() {
  const [count, setCount] = useState(0)

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


      <h1>100sec Of React</h1>

      {/* Parsing the props to component */}
      <NameCard name="Starboy"></NameCard>
      <NameCard name={"Starboy," + " " + 19}></NameCard>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}x ...fucked!
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
