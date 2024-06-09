import { useEffect, useState } from "react";
import { Tag } from "primereact/tag";
import { toTitleCase } from "./HelperFunctions";
import { Tooltip } from "primereact/tooltip";
import axios from "axios";
import LoadingScreen from "./LoadingScreen";

export default function Ability(props) {
  const [effect, setEffect] = useState();
  const [loading, setLoading] = useState(true);
  const { name, url } = props;

  useEffect(() => {
    axios.get(url).then((response) => {
      let tempEffect;
      console.log(response.data.effect_entries);
      let tempArr = response.data.effect_entries.filter((item) => {
        return item.language.name === "en";
      });
      console.log(tempArr);
      tempEffect = tempArr[0].short_effect;
      setEffect(tempEffect);
      setLoading(false);
    });
  });

  if (loading) {
    return <LoadingScreen></LoadingScreen>;
  } else {
    return (
      <>
        <Tooltip target=".custom-target-icon" />
        <Tag
          className="custom-target-icon"
          data-pr-position="top"
          data-pr-tooltip={effect}
          value={toTitleCase(name)}
          alt={name}
          style={{ cursor: "pointer" }}
        ></Tag>
      </>
    );
  }
}
