import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import PokedexEntry from "./PokedexEntry.js";

function App() {
  const [page, setPage] = useState("Home");
  function changePage() {
    setPage("PokedexEntry");
  }
  if (page === "Home") {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            onClick={changePage}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  } else if (page === "PokedexEntry") {
    return <PokedexEntry pokemon="murkrow" />;
  }
}

export default App;
