import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import starboy_logo from '/starboy_logo.png'


// Component: Logo
function Logo(){
  return(
    <div>
      <a href="https://skywalkersam.github.io" target="_blank">
        <img src={starboy_logo} alt='Starboy Logo' className='logo'></img>
      </a>
    </div>
    )
  }
  
  // Component: NameCard
  function NameCard({name}){
    return(
      <div>
        <p> <Logo></Logo>Hello {name}! </p>
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
      <NameCard name={"Starboy," + " " + 19}></NameCard>    {/* You can even pass a component like this...! */}


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You're {count}x ...fucked!
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




{/*

import React from 'react';
import './style.css';

function Card(props) {
  return (
    <section>
      <h2>{props.icon} Title</h2>
      {props.children}
    </section>
  );
}

function MyIcon() {
  return <i>🔥</i>;
}

export default function App() {
  return (
    <div>
      <Card icon={<MyIcon />}>
        <p>The body of the card</p>
      </Card>
    </div>
  );
}


*/}