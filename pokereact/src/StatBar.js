import { ProgressBar } from "primereact/progressbar";
import { useState, useEffect } from "react";

function StatBar(props) {
  const [stats, setStats] = useState({});
  useEffect(() => {
    let [hp, attack, defense, spAttack, spDefense, speed] = props.stats;
    setStats({
      hp: hp.base_stat,
      attack: attack.base_stat / 252,
      defense: defense.base_stat / 252,
      spAttack: spAttack.base_stat / 252,
      spDefense: spDefense.base_stat / 252,
      speed: speed.base_stat / 252,
    });
  }, [props]);

  return (
    <div>
      <h1>test</h1>
      <ProgressBar color="red" value={stats.hp}>
        52
      </ProgressBar>
      <ProgressBar color="blue" value={stats.attack}></ProgressBar>
      <ProgressBar color="yellow" value={stats.defense}></ProgressBar>
    </div>
  );
}

export default StatBar;
