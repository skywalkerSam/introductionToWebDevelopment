import { Children, useState } from 'react'
import './App.css'
import 'tachyons'
import starboyLogo from './assets/starboy_logo.png'

function Logo() {
  return (
    <div>
      <img src={starboyLogo} alt="Starboy Logo" className='logo' />
    </div>
  )
}

function Card(props) {
  return (
    <div className='card'>
      {props.logo}
      {props.children}    {/* Content Projection */}
    </div>
  )
}

function App() {
  let [title, setTitle] = useState('skywalkerSam')

  return (
    <div className='mr3 grey'>
      <h1>React Components</h1>
      <hr />

      <div>

        <Card logo={<Logo></Logo>}>
          <div>
            <p>We're all just little stardusts heading into the unknown... indefinitely.</p>
          </div>
          <button
            className='mt5 pointer'
            onClick={() => { setTitle('Starboy') }}>
            {title}
          </button>
        </Card>

      </div>
    </div>
  )
}

export default App
