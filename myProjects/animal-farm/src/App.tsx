import "./App.css";
import "tachyons";
import { useState, useEffect, useDebugValue } from "react";
import Animal from "./components/Animals";

// Custom hook: useAnimalSearch
function useAnimalSearch() {
  const [animals, setanimals] = useState([]);

  // Cache last query
  useEffect(() => {
    // `localStorage` is a key-value store built into the browser
    const lastQuery = localStorage.getItem("lastQuery");
    search(lastQuery || ""); // If no last query, search for all animals
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

  useDebugValue(animals ?? "Loading...")

  return { animals, search };
}

function App() {
  const { animals, search } = useAnimalSearch();
  
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
            // Spread operator to pass all properties of `animal` as props
            <Animal key={animal.id} {...animal}></Animal>
          ))}

          {animals.length === 0 && "No animals found"}
        </ul>
      </div>
    </div>
  );
}

export default App;
