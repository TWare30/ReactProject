import { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "primereact/image";
import LoadingScreen from "./LoadingScreen.js";
import "./index.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { toTitleCase } from "./HelperFunctions.js";

function Pokedex(props) {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  function HandleClick(e) {
    props.setPokemon(e.target.alt);
    props.setPage("PokedexEntry");
  }

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1025")
      .then((response) => {
        setPokemonData(response.data);
        setLoading(false);
      });
  }, []);

  function Card(props) {
    let { name, url } = props;
    let titleName = toTitleCase(name);
    let index = url.slice(34).slice(0, -1);
    let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`;
    return (
      <div className="flex justify-center items-center flex-col col-3">
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)"
          }}
        >
          <Image
            src={image}
            className="h-64"
            alt={name}
            onClick={HandleClick}
          />
          <div className="text-center" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold', textDecoration: 'underline' }}>{titleName}</div>
        </div>
      </div>
    );
  }

  if (loading) {
    return <LoadingScreen></LoadingScreen>;
  } else {
    return (
      <div className="flex flex-wrap col-40" style={{backgroundColor: "#cc0000"}}>
        {pokemonData.results.map((data) => {
          return <Card name={data.name} url={data.url}></Card>;
        })}
        {/* <DataScroller
          value={pokemonData.results}
          itemTemplate={Card}
          rows={10}
          buffer={0.4}
        ></DataScroller> */}
      </div>
    );
  }
}

export default Pokedex;
