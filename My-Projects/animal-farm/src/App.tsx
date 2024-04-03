import "./App.css";
import "tachyons";
import { useState } from "react";

function App() {
  const [animals, setanimals] = useState([])

  const search = async (query: string) => {
    const response = await fetch(
      
    )
  }

  return (
    <div>
      <div>
        <h1 className="green">Animal Farm</h1>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search here..."
          className="grey w-90 mt3 mb3 br3 pa2 bg-transparent input1"
          onChange={(event) => search(event.target.value)}
        ></input>
      </div>

      <div>
        <ul>
          {animals.map((animal) => (
            <Animal key={animal.id} {...animal}></Animal>
          ))}

          {animals.length === 0 && 'No animals found'}
        </ul>

      </div>
    </div>
  );
}

// Dumb component
function Animal({ type, name, age}){
  return(
    <div>
      <li>
        <strong>{type}</strong> {name}, {age}
      </li>
    </div>
  )
}

export default App;
