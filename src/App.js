import { useState } from "react";
import "./App.css";
import InputBar from "./Components/InputBar";
import Navbar from "./Components/Navbar";
import { dataContext } from "./Contexts/dataContext";
import WordData from "./Components/WordData";

function App() {
  const [showMeaning, setShowMeaning] = useState(false);
  const [wordData, setWordData] = useState("");
  async function getData(word) {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    setWordData(data);
    setShowMeaning(true)
    return data;
  }

  return (
    <div className="main-wrapper">
      <Navbar />
      <dataContext.Provider value={{ getData }}>
        <InputBar />
        {showMeaning ? <WordData data = {wordData}/> : ""}
      </dataContext.Provider>
    </div>
  );
}

export default App;
