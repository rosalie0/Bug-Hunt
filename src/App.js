/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CanvasContainer from "./components/CanvasContainer";
import GameInfoDisplay from "./components/GameInfoDisplay";
import GameWonDisplay from "./components/endgame/GameWonDisplay";
import StartGame from "./components/StartGame";
import TimerDisplay from "./components/TimerDisplay";
import { addOneSecond } from "./redux/timerSlice";

function App() {
  const { playerWon } = useSelector((state) => state.game);

  const startTimer = () => {
    updateTimer();
    setInterval(updateTimer, 1000);
  };

  // // Every 1 millisecond, update the timeElapsed by 1
  const dispatch = useDispatch();
  const updateTimer = () => {
    console.log("inside updateTimer");
    dispatch(addOneSecond());
    // setTimeElapsed((prevTime) => prevTime + 1);
  };

  console.log("app rerender");
  return (
    <div className="App">
      <StartGame startTimer={startTimer} />
      <CanvasContainer />
      <TimerDisplay />
      {/*  If they won, show them reset button. If they are playing, show game info display. */}
      {playerWon ? <GameWonDisplay /> : <GameInfoDisplay />}
    </div>
  );
}

export default App;
