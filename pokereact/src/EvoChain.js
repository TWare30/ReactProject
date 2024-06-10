import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen.js";
import Chain from "./Chain.js";
import axios from "axios";

function EvoChain(props) {
  const [loading, setLoading] = useState(true);
  const [chain, setChain] = useState({});

  useEffect(() => {
    axios.get(props.chainURL).then((response) => {
      setChain(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingScreen></LoadingScreen>;
  } else {
    const chains = [];
    let curr = chain.chain;
    while (curr) {
      chains.push(
        <Chain
          key={curr.id}
          setPokemon={props.setPokemon}
          species={curr}
        ></Chain>
      );
      chains.push(<div>{"=>"}</div>);
      curr = curr.evolves_to?.[0];
    }
    chains.pop();

    return (
      <div className="flex flex-row justify-content-center align-items-center">
        {chains}
      </div>
    );
  }
}

export default EvoChain;
