import "./TypeDictionary.css";
import { useEffect, useState } from "react";
import { Tag } from "primereact/tag";
import { toTitleCase } from "./HelperFunctions";
import { Tooltip } from "primereact/tooltip";
import API from "./API.js";
import axios from "axios";
import LoadingScreen from "./LoadingScreen.js";

export default function AbilitiesPanel(props) {
  const [effectsArray, setEffectsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let url;
    let effect;
    let tempArr = [];
    props.abilities.forEach((ability) => {
      url = ability.ability.url;
      //effect = API.getAbility(url);
      axios.get(url).then((response) => {
        // console.log("Temp array and loading inside UseEffect");
        // console.log(tempArr);
        // console.log(loading);
        tempArr.push(response.data.effect_entries[0].effect);
        if ((tempArr.length = props.abilities.length)) {
          setLoading(false);
        }
      });
    });
    // console.log("tempArr length " + tempArr.length + " loading " + loading);
    setEffectsArray(tempArr);
  }, [props.abilities, loading]);

  if (loading) {
    return <LoadingScreen></LoadingScreen>;
  } else {
    return (
      <div className="border-double mb-1 mt-1">
        <h4 className="No-Margins">Abilities</h4>
        <div className="flex flex-row mb-1 justify-content-center">
          {props.abilities.map((ability, index) => {
            console.log("Inside abilities map" + index);
            return (
              <>
                <Tooltip target=".custom-target-icon" />
                <Tag
                  className="custom-target-icon"
                  data-pr-position="top"
                  data-pr-tooltip={effectsArray[index]}
                  value={toTitleCase(ability.ability.name)}
                  alt={ability.ability.index}
                  style={{ cursor: "pointer" }}
                ></Tag>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}
