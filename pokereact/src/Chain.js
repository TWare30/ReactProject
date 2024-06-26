import { Image } from "primereact/image";
import { toTitleCase } from "./HelperFunctions.js";

function Chain(props) {
  const { name, url } = props.species.species;
  const id = url.slice(42).slice(0, -1);

  function HandleClick(e) {
    props.setPokemon(e.target.alt);
  }

  return (
    <div className="justify-content-center col-4">
      <span>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          className="align-items-center"
          alt={name}
          width="100%"
          // height={50}
          onClick={HandleClick}
        />
        <h4>{toTitleCase(name)}</h4>
      </span>
    </div>
  );
}

export default Chain;
