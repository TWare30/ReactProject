import "./App.css";
import { useState, useEffect } from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { Image } from "primereact/image";
import axios from "axios";
import StatBar from "./StatBar.js";
import Header from "./Header.js";
import TypeBox from "./TypeBox.js";
import EvoChain from "./EvoChain.js";
import AbilitiesPanel from "./AbilitiesPanel.js";

function PokedexEntry(props) {
  const [page, setPage] = useState(props.pokemon);
  const [entry, setEntry] = useState({});
  const [species, setSpecies] = useState({});
  const [loading, setLoading] = useState(true);

  let pokeURL = `https://pokeapi.co/api/v2/pokemon/${props.pokemon}`;
  let speciesURL = `https://pokeapi.co/api/v2/pokemon-species/${props.pokemon}`;

  //run all APIs immediately
  useEffect(() => {
    let entryLoading = true;
    let speciesLoading = true;
    axios.get(pokeURL).then((response) => {
      setEntry(response.data);
      entryLoading = false;
      setLoading(speciesLoading || entryLoading);
    });
    axios.get(speciesURL).then((response) => {
      setSpecies(response.data);
      speciesLoading = false;
      setLoading(speciesLoading || entryLoading);
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
              className="flex h-full align-items-center"
              alt={props.pokemon}
              preview
            />
            <div>
              <EvoChain
                setPokemon={props.setPokemon}
                chainURL={species.evolution_chain.url}
              ></EvoChain>
            </div>
          </SplitterPanel>
          <SplitterPanel className="flex flex-column">
            <div>
              <p>
                {species.flavor_text_entries[1].flavor_text.replaceAll(
                  "\f",
                  " "
                )}
              </p>
              <div className="flex flex-row p-1">
                <span>Types: </span>
                {entry.types.map((type) => {
                  return (
                    <TypeBox
                      key={type.type.name}
                      type={type.type.name}
                    ></TypeBox>
                  );
                })}
              </div>
            </div>
            <div>
              <StatBar stats={entry.stats}></StatBar>
            </div>
            <AbilitiesPanel abilities={entry.abilities}></AbilitiesPanel>
          </SplitterPanel>
        </Splitter>
      );
    }
  }

  return <div className="Main Page">{NewLoader()}</div>;
}

export default PokedexEntry;
