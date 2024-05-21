import { useEffect } from "react";
import "./TypeDictionary.css";
import axios from "axios";

function TypeBox(props) {
  const displayText = props.type.toUpperCase();

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type").then(() => {
      console.log("test");
    });
  });

  return (
    <div>
      <span className={"pokemonType " + props.type}>{displayText}</span>
    </div>
  );
}

export default TypeBox;
