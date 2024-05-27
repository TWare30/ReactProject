import "./TypeDictionary.css";

function TypeBox(props) {
  const displayText = props.type.toUpperCase();

  return (
    <div>
      <span className={`pokemonType ${props.type}`}>{displayText}</span>
    </div>
  );
}

export default TypeBox;
