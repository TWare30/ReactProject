import { useState, useEffect, createContext } from "react";
import { PageContext } from "./App.js";

function Pokedex(props) {
  const { page, setPage } = useContext(PageContext);
  const [pokemonData, setPokemonData] = useState([]);

  function HandleClick(pokename) {}
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <table>
      <tbody>
        {pokemonData.map((pokemon, index) => (
          <tr key={index}>
            <td>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                alt={pokemon.name}
              />
            </td>
            <td onClick={HandleClick}>{pokemon.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Pokedex;
