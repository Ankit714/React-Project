import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import Homepage from "./Homepage";
import ThemeContext from "./ThemeContext";

/*const Pet = ({ name, breed }) => {
  return (
    <div id="pet-details">
      <h1>{name}</h1>
      <h2>{breed}</h2>
    </div>
  );
};

const Secondsection = () => {
  return (
    <div id="second-section">
      <Pet name="Fluffy" breed="Golden Retriever" />
      <Pet name="Doink" breed="Beagle" />
      <Pet name="Tommy" breed="Labrador" />
    </div>
  );
};*/

const App = () => {
  const themeHook = useState("green");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div id="content">
          <header id="header">
            <Link to="/">
              Adopt!{" "}
              <span role="img" aria-label="dog">
                🐕
              </span>
            </Link>
          </header>
          <Router>
            <Homepage path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
