import React from "react";
import dictionarylogo from "../assets/dictionary-icon.svg";
import moonLogo from "../assets/icon-moon.svg";
import "../Components/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img src={dictionarylogo} className="logo" ></img>
      <div className="right-nav">
        <select className="select-font">
          <option>Roboto</option>
          <option>Serif</option>
          <option>Mono</option>
        </select>
        <div className="mode">
          <button>Dark Mode</button>
          <img src={moonLogo}></img>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
