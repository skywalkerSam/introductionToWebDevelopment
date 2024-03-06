import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import starboy_logo from '/starboy_logo.png'
import LoadingButton from './components/LoadingButton'


// Component: Logo
function Logo() {
  return (
    <a href="https://skywalkersam.github.io" target="_blank">
      <img src={starboy_logo} alt='Starboy Logo' className='logo'></img>
    </a>
  )
}

// Component: NameCard
function NameCard({ name }) {
  return (
    <p> <Logo></Logo>Hello {name}! </p>
  )
}

// array of random data
const pet_data_lol = [
  { id: 1, name: 'The Dog 🐕' },
  { id: 2, name: 'The Cat 🐈' },
  { id: 3, name: 'Un gato bonito! 🐈‍⬛' },
  { id: 4, name: 'El gato 🐈' },
  { id: 5, name: 'El perro 🐕' },
];

// Loops: PetList
function PetList() {
  return (
    <ul>
      {pet_data_lol &&   // Render only if there's data available...!
        pet_data_lol.map(({ id, name }) => {
          return <li key={id}>{name}</li>
        })}
    </ul>
  )
}


// Input Event Component
function InputEvent({ value, handleChange }) {
  console.log(value)
  return (
    <input type="text"
      placeholder='What does future holds...?'
      value={value}
      onChange={handleChange} />
  )
}


// Main App()
function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [value, setValue] = useState('')

  // Events
  function handleChange(event) {
    setValue(event.target.value)
    // console.log(event.target, event.target.value)
  }

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

      {/* <NameCard name="Starboy"></NameCard> */}
      <NameCard 
        name={"Starboy," + " " + 19}>   {/* You can even pass a component like this...! */}
      </NameCard>    

      <LoadingButton
        label="nothing..."
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
      />

      <h2>Pet Names ...lol ;)</h2>
      <PetList></PetList>

      {/* You need to provide the components the necessary props, bc Components are dumb af ...lol ;) */}
      <InputEvent
        value={value}
        handleChange={handleChange}>
      </InputEvent>


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
