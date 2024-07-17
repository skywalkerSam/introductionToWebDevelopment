import "./App.css";
import "tachyons";
import { useState, useEffect, useDebugValue } from "react";
import Animal from "./components/Animal";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


type AnimalProps = {
  id: number;
  type: string;
  name: string;
  age: number;
};

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

  useDebugValue(animals ?? "Loading...");

  return { animals, search };
}

const App: React.FC = () => {
  const { animals, search } = useAnimalSearch();

  return (
    <>
      <div>
        <p className="">Starboy Farms Inc.</p>
        <h1 className="red">ANIMAL SEARCH</h1>
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
          {animals.map((animal: AnimalProps) => (
            // Spread operator to pass all properties of `animal` as props
            <Animal key={animal.id} {...animal}></Animal>
          ))}

          {animals.length === 0 && "not found."}
        </ul>
      </div>

      <footer className="white-80 mt5">
        <img src={viteLogo} alt="Vite Logo" className="logo" />
        <img src={reactLogo} alt="React Logo" className="logo ml2" />
        <br />
        <small>&copy; Copyright 2024, Starboy Farms Inc.</small>
      </footer>
    </>
  );
}

export default App;
