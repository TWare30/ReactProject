import "./TypeDictionary.css";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingScreen from "./LoadingScreen.js";
import Ability from "./Ability.js";

export default function AbilitiesPanel(props) {
  const [effectsArray, setEffectsArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Rerendering");
    let url;
    let effect;
    let tempArr = [];
    setEffectsArray([]);
    props.abilities.forEach((ability) => {
      url = ability.ability.url;
      axios.get(url).then((response) => {
        console.log("Temp array and loading inside UseEffect");
        console.log(
          "temparr.length=" +
            tempArr.length +
            " abilities.length=" +
            props.abilities.length +
            " loading=" +
            loading +
            "effectsArray.length=" +
            effectsArray.length
        );
        // console.log(tempArr);
        // console.log(loading);
        tempArr.push(response.data.effect_entries[0].effect);
        if ((tempArr.length = props.abilities.length)) {
          setLoading(false);
        }
      });
    });
    setEffectsArray(tempArr);
    console.log("After mapping, effectsArray.length=" + effectsArray.length);
  }, [props, loading]);

  function HandleMouseOver() {}

  if (loading) {
    return <LoadingScreen></LoadingScreen>;
  } else {
    return (
      <div className="border-double mb-1 mt-1">
        <h4 className="No-Margins">Abilities</h4>
        <div className="flex flex-row mb-1 justify-content-center">
          {props.abilities.map((ability) => {
            return (
              <Ability
                name={ability.ability.name}
                url={ability.ability.url}
              ></Ability>
            );
          })}
        </div>
      </div>
    );
  }
}
