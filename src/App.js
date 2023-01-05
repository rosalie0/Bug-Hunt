/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import CanvasContainer from "./components/CanvasContainer";
import GameInfoDisplay from "./components/GameInfoDisplay";
import GameWonDisplay from "./components/endgame/GameWonDisplay";
import StartGame from "./components/StartGame";
import TimerDisplay from "./components/TimerDisplay";

function App() {
  const { playerWon } = useSelector((state) => state.game);

  // this is in seconds
  const [timeElapsed, setTimeElapsed] = useState(0);
  let timeAsVariable = timeElapsed;

  const startTimer = () => {
    console.log("this should only run once");
    updateTimer();
    setInterval(updateTimer, 1000);
  };

  // // Every 1 millisecond, update the timeElapsed by 1
  const updateTimer = () => {
    setTimeElapsed((prevTime) => prevTime + 1);
  };

  return (
    <div className="App">
      <StartGame startTimer={startTimer} />
      <CanvasContainer />
      <TimerDisplay timeElapsed={timeElapsed} />
      {/*  If they won, show them reset button. If they are playing, show game info display. */}
      {playerWon ? <GameWonDisplay /> : <GameInfoDisplay />}
    </div>
  );
}

export default App;
