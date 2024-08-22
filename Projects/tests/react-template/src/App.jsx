import React, { useState } from "react";
import "./App.css";
import 'tachyons';
import Logo from "../components/Logo/Logo";
import Home from "../components/Home/Home";

const initialState = {
  route: "logo",
  isSignedIn: false,
}

const App = () => {
  const [state, setState] = useState(initialState);
  
    if (state.route === "logo") {
      return (
        <Logo onRouteChange={(route) => setState({ ...state, route })} />
      );
    }

  if (state.route === "home") {
    return (
      <>
        <Logo onRouteChange={(route) => setState({ ...state, route })} />
        <Home />
      </>
    );
  }

  else {
    return (
      <h1 className="f1 red tc">Page not found!</h1>
    );
  }
};

export default App;