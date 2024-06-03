// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import appLogo from '/favicon.svg'
import starboyLogo from '/starboyLogo.png'
import PWABadge from './PWABadge.tsx'
import './App.css'
import 'tachyons'


export default function App() {
  return (
    <>
      <div>
        <a href="https://github.com/skywalkersam" target="_blank" rel="noopener noreferrer">
          <img src={starboyLogo} alt="Starboy Logo" className='logo' />
        </a>
      </div>
      <header>
        <h1 className='f1 red'>Image Generator</h1>
      </header>

      <div>
        <input type="text" />
      </div>

      
      
      <PWABadge />
    </>
  )
}

















// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={appLogo} className="logo" alt="theDreamProject logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>theDreamProject</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <PWABadge />
//     </>
//   )
// }

// export default App

