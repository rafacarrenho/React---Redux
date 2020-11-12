import React from "react";
import "./App.css";
import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";

function App() {
  return (
    <div className="App">
      <h1>React com Redux</h1>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Soma></Soma>
        <Media></Media>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
