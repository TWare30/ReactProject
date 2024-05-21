import logo from "./PokeReact.png";
import React, { useState, useEffect, useContext, createContext } from "react";
import "./App.css";
import Pokedex from "./Pokedex.js";
export const pageContext = createContext("Pokedex");

function App() {
  const [page, setPage] = useState(pageContext);

  return (
    <div className="App">
      <div
        className="topbar p-1 flex justify-content-between flex-row"
        style={{ "border-bottom-style": "solid" }}
      >
        <div className="ml-3 flex">
          <span>
            <img src={logo} alt=""></img>
          </span>
        </div>
      </div>

      <Pokedex></Pokedex>
    </div>
  );
}

export default App;
