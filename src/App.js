/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import CanvasContainer from "./components/CanvasContainer";
import GameInfoDisplay from "./components/GameInfoDisplay";
import GameWonDisplay from "./components/endgame/GameWonDisplay";

function App() {
  const { playerWon } = useSelector((state) => state.game);
  return (
    <div className="App">
      <GameWonDisplay />
      {/* <CanvasContainer /> */}
      {/*  If they won, show them reset button. If they are playing, show game info display. */}
      {/* {playerWon ? <GameWonDisplay /> : <GameInfoDisplay />} */}
    </div>
  );
}

export default App;
