import './App.css'
import 'tachyons'
import React, { useState } from 'react'

//IncrementComponent
function IncrementComponent(props){
  return(
    <div>
      <button className='mt3 mb4 blue' 
        onClick={props.onClick}>
          Increment by 1
        </button>
    </div>
  )
}

function App() {
  let [count, setCount] = useState(0)
  let [prevCount, setPrevCount] = useState(0)

  // handleIncrement
  function handleIncrement(){
    setPrevCount(count)
    setCount(++count)
  }


  return (
    <div className='mr3 grey'>

      <div>

        <h1 className='blue'>React State</h1>
        <hr />
      </div>

      <IncrementComponent onClick={handleIncrement}></IncrementComponent>

      <div className='mt4'>
        <h2>{prevCount} => {count}</h2>     {/* Intentional, for real! lol ;)*/}
        
      </div>
      
    </div>
  )
}

export default App
