import logo from "./PokeReact.png";
import React, { useState, useEffect, useContext, createContext } from "react";
import "./App.css";
import Pokedex from "./Pokedex.js";
import PokedexEntry from "./PokedexEntry.js";
export const PageContext = createContext("Pokedex");
export const PokemonContext = createContext(null);

function App() {
  const [page, setPage] = useState("Pokedex");
  const [pokemon, setPokemon] = useState(PokemonContext);

  function goHome() {
    setPage("Pokedex");
  }

  return (
    <div className="App">
      <div
        className="topbar p-1 flex justify-content-between flex-row"
        style={{ "border-bottom-style": "solid" }}
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
