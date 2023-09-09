import "./WordData.css";
import logo from "../assets/icon-new-window.svg";

function WordData(wordData) {
  let data = wordData.data[0];
  let definitions = data.meanings[0].definitions;
  let definitionsTwo = data.meanings[1].definitions;
  let synonyms = data.meanings[0].synonyms;
  return (
    <div className="main-data">
      <div className="data-head">
        <h1>{data.word}</h1>
        <p>{data.phonetic}</p>
      </div>
      <h3>{data.meanings[0].partOfSpeech}</h3>
      <div className="data-mid">
        <p>Meaning</p>
        <ul className="meaning-list">
          {definitions.map((def, index) => {
            return <li key={index}>{def.definition}</li>;
          })}
        </ul>
      </div>
      <div className="synonyms-data">
        <p>synonyms</p>
        <ul>
          {synonyms.map((synonym, index) => {
            return <h6 key={index}>{synonym}</h6>;
          })}
        </ul>
      </div>

      <h3>{data.meanings[1].partOfSpeech}</h3>
      <div className="data-mid">
        <p>Meaning</p>
        <ul className="meaning-list">
          {definitionsTwo.map((def, index) => {
            return <li key={index}>{def.definition}</li>;
          })}
        </ul>
      </div>
      <p>
        <span className="eg">Example: </span>  {data.meanings[1].definitions[0].example}
      </p>
      <div className="footer">
        <p className="source">
          <p>Source:</p>
          <a href={data.sourceUrls} className="link">
            {data.sourceUrls}
            <img src={logo}></img>
          </a>
        </p>
      </div>
    </div>
  );
}

export default WordData;
