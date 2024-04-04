import "./App.css";
import "tachyons";
import { useState } from "react";

function App() {
  const [animals, setanimals] = useState([]);

  const search = async (q: string) => {
    const response = await fetch(
      "http://localhost:8080/animals/?" + new URLSearchParams({ q })
    );
    const data = await response.json();
    setanimals(data);
  };

  return (
    <div>
      <div>
        <h1 className="green-100">Animal Farm</h1>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search here..."
          className="w-90 mt3 mb3 br3 pa2 bg-transparent red outline-0"   // color-inherit
          onChange={(event) => search(event.target.value)}
        ></input>
      </div>

      <div>
        <ul>
          {animals.map((animal) => (
            <Animal key={animal.id} {...animal}></Animal>
          ))}

          {animals.length === 0 && "No animals found"}
        </ul>
      </div>
    </div>
  );
}

// Dumb component
function Animal({ type, name, age }) {
  return (
    <div>
      <li>
        <strong>{type} |</strong> {name} | {age} years old
      </li>
    </div>
  );
}

export default App;
