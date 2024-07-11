import { useState } from "react";
import reactLogo from "./assets/react.svg";
import appLogo from "/favicon.svg";
import PWABadge from "./PWABadge.tsx";
import "./App.css";
import starboyLogo from "/logo.png";
// import "tachyons";

const App = () => {
  return (
    <>
      <footer className="white-80 mt5">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={appLogo} className="logo" alt="animalFarm logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <small>&copy; Copyright 2024, Starboy Inc.</small>
      </footer>
      <PWABadge></PWABadge>
    </>
  );
};

export default App;
