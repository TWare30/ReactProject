import "./TypeDictionary.css";
import { useState } from "react";

function TypeBox(props) {
  const [displayText, setDisplayText] = useState(props.type.toUpperCase());

  return (
    <div>
      <span className={`pokemonType ${props.type}`}>{displayText}</span>
    </div>
  );
}

export default TypeBox;
