import logo from "./PokeReact.png";
import React, { useState, useEffect } from "react";
import "./App.css";
import Pokedex from "./Pokedex.js";

function App() {
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
