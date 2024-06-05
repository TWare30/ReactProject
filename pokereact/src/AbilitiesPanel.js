import TypeBox from "./TypeBox";
import React from "react";

export default function AbilitiesPanel(props) {
  return (
    <div className="flex flex-row p-1">
      <span>Abilities</span>
      {props.abilities.map((ability) => {
        return (
          <TypeBox
            key={ability.ability.name}
            type={ability.ability.name}
            alt={ability.ability.url}
            onMouseEnter={(alt) => alert(alt)}
          ></TypeBox>
        );
      })}
    </div>
  );
}
