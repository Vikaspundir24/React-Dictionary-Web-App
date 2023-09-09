import React from "react";
import searchLogo from "../assets/icon-search.svg";
import "./InputBar.css"

function InputBar() {
  return (
    <div className="input-bar">
      <input placeholder="Web Dictionary"/>
      <img src={searchLogo}/> 
    </div>
  );
}

export default InputBar;
