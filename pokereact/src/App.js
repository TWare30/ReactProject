import logo from "./PokeReact.png";
import React, { useState, useEffect, useContext, createContext } from "react";
import "./App.css";
import "./index.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Pokedex from "./Pokedex.js";
import PokedexEntry from "./PokedexEntry.js";
export const PageContext = createContext("Pokedex");

function App() {
  const [page, setPage] = useState("Pokedex");
  const [pokemon, setPokemon] = useState();

  function goHome() {
    setPage("Pokedex");
  }

  return (
    <div className="App">
      <div
        className="topbar p-1 flex justify-content-between flex-row"
        style={{ borderBottomStyle: "solid" }}
      >
        <div className="ml-3 flex">
          <span>
            <img onClick={goHome} src={logo} alt=""></img>
          </span>
        </div>
      </div>
      {page === "Pokedex" && (
        <Pokedex setPage={setPage} setPokemon={setPokemon}></Pokedex>
      )}
      {page === "PokedexEntry" && (
        <PokedexEntry pokemon={pokemon}></PokedexEntry>
      )}
    </div>
  );
}

export default App;
