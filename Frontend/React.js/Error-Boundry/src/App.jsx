import './App.css'
import 'tachyons'
import { useState, Component } from 'react'

// ErrorBoundry Class Component
class ErrorBoundry extends Component {

  // Error State, moved to the App()
  // constructor(props) {
  //   super(props)
  //   this.state = { hasError: false }   // true
  // }

  // Update Error Status
  static getDerivedStateFromError(error) {
    // return { hasError: true };
    this.props.setHasError(true)
  }
  componentDidCatch(error, info) {
    console.log('Fuck, Something went horribily wrong here...!', error, info)
  }

  // Error UI
  render() {
    console.log(this.props.hasError)
    
    if (this.props.hasError) {
      return (
        <div className='error-boundry red'>
          <h2 className='mt6'>
            Fuck, Something went horribily wrong here...!
          </h2>
        </div>
      )
    }
    return (this.props.children)
  }

  // And that's why you use functional components... lol ;)
}


function App() {
  // Moving the error state up!
  const [hasError, setHasError] = useState(false)   // true
  
  return (
    <div className='mr3 grey'>
      <div className='mb6'>
        <h1>
          <a className='red'
            href="https://fireship.io/courses/react/basics-error-boundry/">Error Boundry</a>
        </h1>
        <hr />
      </div>

      <ErrorBoundry hasError={hasError} setHasError={setHasError}>
        <div className='no-error-boundry green'>
          <button
            onClick={() => setHasError(true)}>
            <h2 className='mt6 green'>
              No errors, Enjoy your day... :)
            </h2>
          </button>
        </div>
      </ErrorBoundry>
    </div>
  )
}


export default App


// I know it's "boundary" but, idk... I like it this way. :P
