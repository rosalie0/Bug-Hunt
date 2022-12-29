import React from "react";
import "./App.css";
import CanvasContainer from "./components/CanvasContainer";
import GameInfoDisplay from "./components/GameInfoDisplay";

function App() {
  return (
    <div className="App">
      <CanvasContainer />
      <GameInfoDisplay />
    </div>
  );
}

export default App;
