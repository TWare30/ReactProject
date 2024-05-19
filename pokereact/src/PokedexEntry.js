import logo from "./PokeReact.png";
import "./App.css";
import { useState, useEffect } from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { Image } from "primereact/image";
import axios from "axios";
import StatBar from "./StatBar.js";

function PokedexEntry(props) {
  const [page, setPage] = useState(props.pokemon);
  const [entry, setEntry] = useState({});
  const [species, setSpecies] = useState({});
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([]);

  let pokeURL = `https://pokeapi.co/api/v2/pokemon/${props.pokemon}`;
  let speciesURL = `https://pokeapi.co/api/v2/pokemon-species/${props.pokemon}`;

  //run all APIs immediately
  useEffect(() => {
    axios.get(pokeURL).then((response) => {
      setEntry(response.data);
    });
    axios.get(speciesURL).then((response) => {
      setSpecies(response.data);
      setLoading(false);
    });
  }, [props.pokemon]);

  //this is the body of the function
  function NewLoader() {
    if (loading) {
      return <div>Still Loading!</div>;
    } else {
      return (
        <Splitter>
          <SplitterPanel className="flex flex-column align-items-center">
            <div>
              <h1 className="flex align-items-center">
                {species.genera[7].genus}
              </h1>
            </div>
            <Image
              src={entry.sprites.other["official-artwork"].front_default}
              className="flex w-full h-full align-items-center"
              alt={props.pokemon}
              preview
            />
            <div>evolution chain stub</div>
          </SplitterPanel>
          <SplitterPanel className="flex flex-column">
            <div>
              <p>{species.genera[7].genus}</p>
              <p>
                {species.flavor_text_entries[1].flavor_text.replaceAll(
                  "\f",
                  " "
                )}
              </p>
            </div>
            <div>
              <StatBar stats={entry.stats}></StatBar>
            </div>
          </SplitterPanel>
        </Splitter>
      );
    }
  }

  return (
    <div className="Main Page">
      <div
        className="topbar p-1 flex justify-content-between flex-row align-items-center"
        style={{ "border-bottom-style": "solid" }}
      >
        <div className="ml-3 flex">
          <span>
            <img src={logo} alt=""></img>
          </span>
        </div>
      </div>
      {NewLoader()}
    </div>
  );
}

export default PokedexEntry;
