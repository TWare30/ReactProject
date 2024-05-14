import logo from './PokeReact.png';
import './App.css';
import {useState} from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';
        

function PokedexEntry() {
    const [page, setPage] = useState("Pikachu");
    function ChangePage() {
        setPage("Home")
    }
  return (
    <div className="Main Page">
      <div className="topbar p-1 flex justify-content-between flex-row align-items-center" style={{'border-bottom-style':'solid'}}> 
        <div className="ml-3 flex">
          <span><img src={logo} alt=""></img></span>
        </div>
      </div>
      <Splitter>
        <SplitterPanel>
            <p>Splitter panel one</p>
        </SplitterPanel>
        <SplitterPanel>
            <p>Splitter panel two</p>
        </SplitterPanel>
      </Splitter>
    </div>
  );
}

export default PokedexEntry;
