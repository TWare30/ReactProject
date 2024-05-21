import { useState, useEffect } from "react";
import Bar from "./Bar.js";

function StatBar(props) {
  const [stats, setStats] = useState({});
  useEffect(() => {
    let [hp, attack, defense, spAttack, spDefense, speed] = props.stats;
    setStats({
      hp: hp.base_stat,
      attack: attack.base_stat,
      defense: defense.base_stat,
      spAttack: spAttack.base_stat,
      spDefense: spDefense.base_stat,
      speed: speed.base_stat,
    });
  }, [props]);

  return (
    <div
      className="flex flex-row column-gap-0 row-gap-0"
      margin={0}
      padding={0}
    >
      <div className="flex flex-column align-items-left" margin={0} padding={0}>
        <Bar color="green" stat={stats.hp} name="HP"></Bar>
        <Bar color="red" stat={stats.attack}></Bar>
        <Bar color="orange" stat={stats.defense}></Bar>
      </div>
      <div className="flex flex-column align-items-left" margin={0} padding={0}>
        <Bar color="purple" stat={stats.spAttack}></Bar>
        <Bar color="blue" stat={stats.spDefense}></Bar>
        <Bar color="yellow" stat={stats.speed}></Bar>
      </div>
    </div>
  );
}

export default StatBar;
