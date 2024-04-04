import "./App.css";
import "tachyons";
import { useState, useEffect } from "react";
import Animal from "./components/Animals";

function App() {
  const [animals, setanimals] = useState([]);

  // Cache last query
  useEffect(() => {
    // `localStorage` is a key-value store built into the browser
    const lastQuery = localStorage.getItem("lastQuery");
    search(lastQuery);
  }, []); // Empty array means run once

  // Search function
  const search = async (q: string) => {
    const response = await fetch(
      // `URLSearchParams` is a built-in JS class to help build query strings
      "http://localhost:8080/animals/?" + new URLSearchParams({ q })
    );
    const data = await response.json();
    setanimals(data);

    // Save last query to cache
    localStorage.setItem("lastQuery", q.toLowerCase().trim());
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
          className="w-90 mt3 mb3 br3 pa2 bg-transparent red outline-0" // color-inherit
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

export default App;
