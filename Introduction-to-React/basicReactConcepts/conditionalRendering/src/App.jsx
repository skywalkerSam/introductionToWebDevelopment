import { useState } from 'react'
import './App.css'
import 'tachyons'

function LoadingButton(props) {
  return (
    <div className='mt5'>
      {props.children}    {/* This content projection shit is fuckin' awesome ;) */}
    </div>
  )
}

function LoadingAnimation(props) {
  return (
    <div className='mt5'>
      <button className='loader'></button>
      {props.children}
    </div>
  )
}

function App() {
  let [loading, setLoading] = useState(true)

  return (
    <div className='mr3 grey'>
      <div>
        <h1>Conditional Rendering</h1>
      </div>
      <div>
        {loading ?
          <LoadingButton>
            <button
              onClick={() => setLoading(false)}>
              Show loading animation...
            </button>
          </LoadingButton>
          : <LoadingAnimation></LoadingAnimation>}
      </div>
    </div>
  )
}

export default App
