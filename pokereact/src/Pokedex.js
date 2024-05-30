import { useState, useEffect } from "react";
import axios from "axios";
import { DataScroller } from "primereact/datascroller";
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
      .get("https://pokeapi.co/api/v2/pokemon?limit=1302")
      .then((response) => {
        setPokemonData(response.data);
        setLoading(false);
      });
  }, []);

  function Card(data) {
    let titleName = toTitleCase(data.name);
    let index = data.url.slice(34).slice(0, -1);
    let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`;
    return (
      <div className="flex justify-items-center align-items-center col-12">
        <h2>{titleName}</h2>
        <Image
          src={image}
          className="flex h-full justify-items-center"
          alt={data.name}
          onClick={HandleClick}
        />
      </div>
    );
  }

  if (loading) {
    return <LoadingScreen></LoadingScreen>;
  } else {
    return (
      <div>
        <DataScroller
          value={pokemonData.results}
          itemTemplate={Card}
          rows={10}
          buffer={0.4}
        ></DataScroller>
      </div>
    );
  }
}

export default Pokedex;
