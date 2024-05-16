import logo from "./PokeReact.png";
import "./App.css";
import { useState, useEffect } from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { Image } from "primereact/image";
import axios from "axios";

function PokedexEntry(props) {
  const [page, setPage] = useState(props.pokemon);
  const [entry, setEntry] = useState({});
  const [species, setSpecies] = useState({});
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([]);

  let pokeURL = "https://pokeapi.co/api/v2/pokemon/pikachu";
  let speciesURL = "https://pokeapi.co/api/v2/pokemon-species/pikachu";

  //initialize all the data needed for display
  useEffect(() => {
    axios.get(pokeURL).then((response) => {
      setEntry(response.data);
      setLoading(false);
    });
    axios.get(speciesURL).then((response) => {
      setSpecies(response.data);
    })
  }, [props.pokemon]);

  //this is the body of the function
  function NewLoader() {
    if (loading) {
      return <div>Still Loading!</div>;
    } else {
        let [hp, attack, defense, spAttack, spDefense, speed] = entry.stats;
        setStats([hp, attack, defense, spAttack, spDefense, speed]);
      return (
        <Splitter>
          <SplitterPanel className="align-items-center">
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
          <SplitterPanel>
            <div><p>{species.genera[7].genus}</p>
            <p>
              {species.flavor_text_entries[1].flavor_text.replaceAll("\f", " ")}
            </p>
            </div>
            <div>
            
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
