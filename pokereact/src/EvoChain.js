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
    return (
      <div className="flex flex-row">
        <Chain species={chain.chain}></Chain>
      </div>
    );
  }
}

export default EvoChain;
