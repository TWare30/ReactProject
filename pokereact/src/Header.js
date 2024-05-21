import { useState } from "react";
import logo from "./PokeReact.png";

function Header() {
  const [page, setPage] = useState();

  function handleClick() {
    setPage("Home");
  }

  return (
    <div
      className="topbar p-1 flex justify-content-between flex-row align-items-center"
      style={{ "border-bottom-style": "solid" }}
    >
      <div className="ml-3 flex">
        <span onClick={handleClick}>
          <img src={logo} alt=""></img>
        </span>
      </div>
    </div>
  );
}

export default Header;
