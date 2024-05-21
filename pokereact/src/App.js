import logo from './PokeReact.png'
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => response.json())
      .then(data => {
        setPokemonData(data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
    return (
      <div className="App">
        <div className="topbar p-1 flex justify-content-between flex-row" style={{'border-bottom-style':'solid'}}> 
          <div className="ml-3 flex">
            <span><img src={logo} alt=""></img></span>
          </div>
        </div>
        <table>
          <tbody>
            {pokemonData.map((pokemon, index) => (
              <tr key={index}>
                <td>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
                </td>
                <td>{pokemon.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }


export default App;
