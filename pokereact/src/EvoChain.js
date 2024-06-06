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
  });

  if (loading) {
    return <LoadingScreen></LoadingScreen>;
  } else {
    const chains = [];
    let curr = chain.chain;
    while (curr) {
      chains.push(<Chain setPokemon={props.setPokemon} species={curr}></Chain>);
      curr = curr.evolves_to?.[0];
    }

    return <div className="col-12 grid">{chains}</div>;
  }
}

export default EvoChain;
