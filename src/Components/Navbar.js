import React, { useContext } from "react";
import dictionarylogo from "../assets/dictionary-icon.svg";
import "../Components/Navbar.css";
import { dataContext } from "../Contexts/dataContext";

function Navbar() {
  const {setFont} = useContext(dataContext)
  return (
    <div className="navbar">
      <img src={dictionarylogo} className="logo" ></img>
      <div className="right-nav">
        <select onChange= {(e) => setFont(e.target.value)} className="select-font">
          <option value="Roboto">Roboto</option>
          <option value="Open Sans">Open Sans</option>
          <option value="Mono">Mono</option>
        </select>
        <div className="mode">
          <button>Change Font</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
