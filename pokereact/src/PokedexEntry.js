import logo from './PokeReact.png';
import './App.css';
import { useState, useEffect } from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import axios from 'axios';


function PokedexEntry(props) {

  const [page, setPage] = useState(props.pokemon);
  const [entry, setEntry] = useState({});
  const [loading, setLoading] = useState(true);

  let pokeURL = "https://pokeapi.co/api/v2/pokemon/pikachu";
  useEffect(() => {axios
    .get(pokeURL)
    .then(response => {
      setEntry(response.data);
      setLoading(false);
    }
    )}, [props.pokemon]);

  function NewLoader() {
    if (loading) {
      return (
        <div></div>
      )
    } else {
      return (
        <Splitter>
          <SplitterPanel>
            <p>{entry.sprites.front_default}</p>
          </SplitterPanel>
          <SplitterPanel>
            <p>test</p>
          </SplitterPanel>
        </Splitter>
      )
    }
  }

  return (
    <div className="Main Page">
      <div className="topbar p-1 flex justify-content-between flex-row align-items-center" style={{ 'border-bottom-style': 'solid' }}>
        <div className="ml-3 flex">
          <span><img src={logo} alt=""></img></span>
        </div>
      </div>
      {NewLoader()}
    </div>
  );
}

export default PokedexEntry;
