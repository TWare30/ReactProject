import "./TypeDictionary.css";
import Ability from "./Ability.js";

export default function AbilitiesPanel(props) {
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
