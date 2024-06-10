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
        <div style={{ display: 'flex', alignItems: 'center' }}><h4 style={{ margin: '0px'}}>HP</h4><Bar color="green" stat={stats.hp} /></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><h4 style={{ margin: '0px'}}>Attack</h4><Bar color="red" stat={stats.attack} /></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><h4 style={{ margin: '0px'}}>Defense</h4><Bar color="orange" stat={stats.defense} /></div>
      </div>
      <div className="flex flex-column align-items-left" margin={0} padding={0}>
        <div style={{ display: 'flex', alignItems: 'center' }}><h4 style={{ margin: '0px'}}>Sp. Attack</h4><Bar color="purple" stat={stats.spAttack} /></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><h4 style={{ margin: '0px'}}>Sp. Defense</h4><Bar color="blue" stat={stats.spDefense} /></div>
        <div style={{ display: 'flex', alignItems: 'center' }}><h4 style={{ margin: '0px'}}>Speed</h4><Bar color="yellow" stat={stats.speed} /></div>
      </div>
    </div>
  );
}

export default StatBar;
