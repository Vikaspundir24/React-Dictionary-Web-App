import { useState } from "react";
import "./App.css";
import InputBar from "./Components/InputBar";
import Navbar from "./Components/Navbar";
import { dataContext } from "./Contexts/dataContext";
import WordData from "./Components/WordData";

function App() {
  const [showMeaning, setShowMeaning] = useState(false);
  const [wordData, setWordData] = useState("");
  const [font, setFont] = useState("");
  async function getData(word) {
    
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    if (!data.title) {
      setWordData(data);
      setShowMeaning(true);
      return data;
    } else {
      alert("Nothing Found for this word");
    }
  }

  return (
    <div style={{ fontFamily: font }} className="main-wrapper">
      <dataContext.Provider value={{ getData, setFont }}>
        <Navbar />
        <InputBar />
        {showMeaning ? <WordData data={wordData} /> : ""}
      </dataContext.Provider>
    </div>
  );
}

export default App;
