import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import CanvasContainer from "./components/CanvasContainer";
import GameInfoDisplay from "./components/GameInfoDisplay";
import PlayAgainButton from "./components/PlayAgainButton";

function App() {
  const { playerWon } = useSelector((state) => state.game);
  return (
    <div className="App">
      <CanvasContainer />
      {/*  If they won, show them reset button. If they are playing, show game info display. */}
      {playerWon ? <PlayAgainButton /> : <GameInfoDisplay />}
    </div>
  );
}

export default App;
