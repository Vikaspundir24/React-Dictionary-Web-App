import { useContext, useState } from "react";
import searchLogo from "../assets/icon-search.svg";
import "./InputBar.css";
import { dataContext } from "../Contexts/dataContext";

function InputBar() {
  const { getData } = useContext(dataContext);
  const [input, setInput] = useState("");

  const enterKeyHandler = (event) => {
    if (event.key === "Enter") {
      submitClickHandler();
    }
  };
  const submitClickHandler = (e) => {
    if (input) {
      getData(input);
      setInput("");
    } else {
      alert("Enter a word to search");
    }
  };

  return (
    <div className="input-bar">
      <input
        placeholder="Web Dictionary"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={enterKeyHandler}
      />
      <img src={searchLogo} onClick={submitClickHandler} />
    </div>
  );
}

export default InputBar;
