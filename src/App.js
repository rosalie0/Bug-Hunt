/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import CanvasContainer from "./components/CanvasContainer";
import GameInfoDisplay from "./components/GameInfoDisplay";
import GameWonDisplay from "./components/endgame/GameWonDisplay";
import StartButtonAndTimer from "./components/StartButtonAndTimer";

function App() {
  const { playerWon } = useSelector((state) => state.game);

  console.log("app rerender");
  return (
    <div className="App">
      <CanvasContainer />
      <StartButtonAndTimer />
      {/*  If they won, show them reset button. If they are playing, show game info display. */}
      {playerWon ? <GameWonDisplay /> : <GameInfoDisplay />}
    </div>
  );
}

export default App;
