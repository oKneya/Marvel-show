import { useState, useEffect } from "react";
import "./App.css";
import { ApplicationProvider } from "./context";
import { MainPage } from "./pages/MainPage";
import { SinglePage } from "./pages/SinglePage";

function App() {
  const [characters, setCharacters] = useState([]);
  const [input, setInput] = useState("");
  const [selectedChar, setSelectedChar] = useState(null);
  const [myTeam, setMyTeam] = useState([]);
  const [changePage, setChangePage] = useState(false)

  const fetchData = () => {
    fetch(
      `http://gateway.marvel.com/v1/public/characters?ts=1680512120&apikey=cf8b8eeb56eeeab2130c6e171abaf7c4&hash=2ebd7d63e566b4219470130cf9e12be3${input?("&nameStartsWith="+input) : ""}`
    )
      .then((res) => res.json())
      .then((data) => setCharacters(data?.data?.results));
  };

  useEffect(() => {
    fetchData();
  }, [input]);

  function showInput(newInput) {
    setInput(newInput);
  }

function goBack(){
  setSelectedChar(null)
}

  function showClickedChar(showedChar) {
    setSelectedChar(showedChar);
  }

  return (
    <ApplicationProvider
      value={{ goBack, characters, input, changePage, setChangePage, setInput, showInput, showClickedChar, myTeam, setMyTeam }}
    >
      <div className="div-app">
        {!selectedChar ? <MainPage /> : <SinglePage char={selectedChar} goBack={goBack}/>}
      </div>
    </ApplicationProvider>
  );
}

export default App;
