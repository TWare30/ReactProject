import logo from './PokeReact.png'
import './App.css';

function App() {
  return (
    <div className="Main Page">
      <div className="topbar p-1 flex justify-content-between flex-row align-items-center" style={{'border-bottom-style':'solid'}}> 
        <div className="ml-3 flex">
          <span><img src={logo} alt=""></img></span>
        </div>
      </div>
    </div>
  );
}

export default App;
