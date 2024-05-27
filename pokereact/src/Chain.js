import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import { Image } from "primereact/image";
import axios from "axios";

function Chain(props) {
  const { name, url } = props.species.species;
  const id = url.slice(42).slice(0, -1);
  const hasNext = props.species.evolves_to.length;

  return (
    <div className="flex flex-row justify-content-center align-content-center align-items-center">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        className="flex h-full align-items-center w-1 h-1"
        alt={name}
      />
      {hasNext > 0 && "=>"}
      {hasNext > 0 && <Chain species={props.species.evolves_to[0]}></Chain>}
    </div>
  );
}

export default Chain;
