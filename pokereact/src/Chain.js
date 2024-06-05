import { Image } from "primereact/image";
import { toTitleCase } from "./HelperFunctions.js";

function Chain(props) {
  const { name, url } = props.species.species;
  const id = url.slice(42).slice(0, -1);
  const hasNext = props.species.evolves_to.length;

  function HandleClick(e) {
    props.setPokemon(e.target.alt);
  }

  return (
    <div className="flex justify-content-center">
      <span>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          className="flex w-full align-items-center"
          alt={name}
          onClick={HandleClick}
        />
        <h4>{toTitleCase(name)}</h4>
      </span>
      {hasNext > 0 && "=>"}
      {hasNext > 0 && (
        <Chain
          setPokemon={props.setPokemon}
          species={props.species.evolves_to[0]}
        ></Chain>
      )}
    </div>
  );
}

export default Chain;
