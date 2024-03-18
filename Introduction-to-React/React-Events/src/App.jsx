import './App.css'
import 'tachyons'
import React, { useState } from 'react'

// InputField
function InputField(props) {
  return (
    <div className='mt4'>
      <input placeholder='Enter something here...'
        className='pa3 ba br4 mb5 b--blue bg-transparent w-90 yellow'
        onChange={props.onChange}>
      </input>
    </div>
  )
}


function App() {
  let [value, setValue] = useState('')

  function handleChange(event) {
    // console.log(event.target.value)
    return setValue(event.target.value)
  }


  return (
    <div className='mr3 grey'>

      <div>

        <h1 className='yellow'>React Events</h1>
        <hr />
      </div>

      <InputField onChange={handleChange}></InputField>

      <div>

        <h2 className='blue'>
          {value.toUpperCase()}
        </h2>
      </div>
    </div>
  )
}

export default App
