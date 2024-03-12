import './App.css'
import 'tachyons'

const pets = [
  { id: 1, name: 'Dawg 🐕' },
  { id: 2, name: 'Murph 🐈' },
  { id: 3, name: 'Snowball 🐈‍⬛' },
  { id: 4, name: 'Ariana  🐈' },
  { id: 5, name: 'El Perro 🐕' },
  { id: 6, name: 'El Gato 🐈' },
];


function App() {

  return (
    <div className='mr3 grey'>
      <div>
        <h1 className='red'>Loops</h1>
        <hr />
      </div>
      <div className='mt5'>
        <ul>
          {pets && pets.map(({id, name}) => {return(
            <div className='mt2'>
              <li key={id}>{name}</li>
            </div>
          )})}
        </ul>
      </div>
    </div>
  )
}

export default App
