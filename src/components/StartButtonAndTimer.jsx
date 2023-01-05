import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOneSecond } from "../redux/timerSlice";

function StartButtonAndTimer() {
  //REDUX STUFF
  const { timeInSeconds } = useSelector((state) => state.timer);
  const { playerWon } = useSelector((state) => state.game);
  let intervalID = useRef();

  // If the player has ever won, stop the interval.
  useEffect(() => {
    console.log("intervalID", intervalID.current);
    if (playerWon) {
      clearInterval(intervalID.current);
    }
    console.log("final time: ", timeInSeconds);
  }, [playerWon]);

  // Use state to keep track of whether to hide or show this container
  // Initially, is visible.
  const [visibility, setVisibility] = useState("visible");

  // Give button container same styles as the Canvas, but with an absolute pos & zindex so it overlays it
  const containerStyles = {
    height: "75vh",
    width: "100vw",
    backgroundColor: "green",
    position: "absolute",
    left: "0px",
    top: "0px",
    zIndex: "1",
    visibility: visibility,
  };

  const PlayButtonClickHandler = () => {
    setVisibility("hidden"); // Hide our button container
    startTimer(); // Start the timer
  };

  const startTimer = () => {
    updateTimer();
    intervalID.current = setInterval(updateTimer, 1000);
    console.log("intervalID", intervalID);
  };

  // // Every 1 millisecond, update the timeElapsed by 1
  const dispatch = useDispatch();
  const updateTimer = () => {
    dispatch(addOneSecond());
  };

  return (
    <>
      <div className="container" style={containerStyles}>
        <button onClick={PlayButtonClickHandler}>Play</button>
      </div>
      <div>Time Elapsed in Seconds: {timeInSeconds}</div>
    </>
  );
}

export default StartButtonAndTimer;
