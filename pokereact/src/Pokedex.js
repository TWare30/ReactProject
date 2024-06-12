import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "primereact/image";
import LoadingScreen from "./LoadingScreen.js";
import "./index.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { toTitleCase } from "./HelperFunctions.js";
import InfiniteScroll from "react-infinite-scroll-component";

function Pokedex(props) {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const totalPokemonLimit = 1025;

  function HandleClick(e) {
    props.setPokemon(e.target.alt);
    props.setPage("PokedexEntry");
  }

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=50").then((response) => {
      setPokemonData(response.data.results);
      setLoading(false);
    });
  }, []);

  const fetchMoreData = () => {
    if (pokemonData.length >= totalPokemonLimit) {
      setHasMore(false);
      return;
    }
    const offset = pokemonData.length;
    const limit = Math.min(50, totalPokemonLimit - pokemonData.length);
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then((response) => {
        setPokemonData([...pokemonData, ...response.data.results]);
        if (response.data.results.length === 0 || pokemonData.length >= totalPokemonLimit) {
          setHasMore(false);
        }
      });
  };

  function Card({ name, url }) {
    const titleName = toTitleCase(name);
    const index = url.slice(34).slice(0, -1);
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`;

    return (
      <div className="flex justify-center items-center flex-col col-4">
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Image
            src={image}
            className="h-64"
            alt={name}
            width={"100%"}
            onClick={HandleClick}
          />
          <div
            className="text-center"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            {titleName}
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return <LoadingScreen></LoadingScreen>;
  } else {
    return (
      <InfiniteScroll
        dataLength={pokemonData.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<LoadingScreen></LoadingScreen>}
        endMessage={<p>No more pokemons to load</p>}
        style={{overflow: 'visible'}}
      >
        <div className="flex flex-wrap col-40" style={{ backgroundColor: "#cc0000" }}>
          {pokemonData.map((data, index) => {
            return <Card key={index} name={data.name} url={data.url}></Card>;
          })}
        </div>
      </InfiniteScroll>
    );
  }
}

export default Pokedex;
