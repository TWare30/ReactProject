import "./TypeDictionary.css";
import React from "react";
import { Tag } from "primereact/tag";
import { OverlayPanel } from "primereact/overlaypanel";

export default function AbilitiesPanel(props) {
  return (
    <div className="flex flex-row p-1">
      <span>Abilities</span>
      {props.abilities.map((ability) => {
        return (
          <span>
            <Tag
              value={ability.ability.name}
              alt={ability.ability.url}
              test="dude"
            ></Tag>
            <OverlayPanel></OverlayPanel>
          </span>
        );
      })}
    </div>
  );
}
