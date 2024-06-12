import { useState, useEffect } from "react";
import { VirtualScroller } from "primereact/virtualscroller";
import LoadingScreen from "./LoadingScreen";

export default function FlavorText(props) {
  const [pokedexEntries, setPokedexEntries] = useState([]);
  const [testEntries, setTestEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let englishEntries = props.entries.filter((entry) => {
      return entry.language.name === "en";
    });
    let newEntries = [];
    let entryText = "";
    englishEntries.forEach((entry, index) => {
      entryText = entry.flavor_text.replaceAll("\f", " ");
      if (!newEntries.includes(entryText)) {
        newEntries.push(entryText);
      }
    });
    setPokedexEntries(newEntries);
    setLoading(false);
  }, []);

  function Card(data) {
    return (
      <div className="m-3 border-dashed border-1">
        <span className="">{data}</span>
      </div>
    );
  }
  if (loading) {
    return <LoadingScreen></LoadingScreen>;
  } else {
    console.log(typeof pokedexEntries);
    return (
      <div className="border-double">
        <VirtualScroller
          className="w-full"
          items={pokedexEntries}
          itemSize={50}
          itemTemplate={Card}
          scrollHeight="600px"
        >
          {/* {pokedexEntries.map((data, index) => {
            return <Card text={data} i={index + 1}></Card>;
          })} */}
        </VirtualScroller>
      </div>
    );
  }
}
