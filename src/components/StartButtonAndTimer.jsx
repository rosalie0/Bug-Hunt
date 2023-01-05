import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOneSecond } from "../redux/timerSlice";

function StartButtonAndTimer() {
  //REDUX STUFF
  const { timeInSeconds } = useSelector((state) => state.timer);
  const { playerWon } = useSelector((state) => state.game);
  // Use state to keep track of whether to hide or show this container
  const [visibility, setVisibility] = useState("visible");
  let intervalID = useRef(); // Need to useRef otherwise it gets forgotten

  //****************** STYLES *******************/
  // Give button container same styles as the Canvas, but with an absolute pos & zindex so it overlays it
  const playButtonContainerStyles = {
    height: "75vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffcbc2",

    position: "absolute",
    left: "0px",
    top: "0px",
    zIndex: "1",
    visibility: visibility,
  };
  const buttonStyles = {
    width: 200,
    padding: "12px 14px",
    margin: 5,
    background: "tomato",
    color: "white",
    fontSize: 16,
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "rgba(0, 0, 0, 0.1) 1px 2px 4px",
    border: "1px solid #ffcbc2",
    borderRadius: 6,
  };
  const timerContainerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px dashed tomato",
    margin: 5,
  };
  const darkRedText = {
    color: "#eb2300",
  };

  //****************** USE EFFECT ON PLAYERWON / STOPPING THE TIMER *******************/

  // If the player has ever won, stop the interval.
  useEffect(() => {
    if (playerWon) {
      clearInterval(intervalID.current);
    }
  }, [playerWon]);

  //****************** FUNCTIONS *******************/

  const PlayButtonClickHandler = () => {
    setVisibility("hidden"); // Hide our button container
    startTimer(); // Start the timer
  };

  const startTimer = () => {
    updateTimer();
    intervalID.current = setInterval(updateTimer, 1000);
  };

  // // Every 1 millisecond, update the timeElapsed by 1
  const dispatch = useDispatch();
  const updateTimer = () => {
    dispatch(addOneSecond());
  };

  //****************** RETURN COMPONENT *******************/
  return (
    <>
      <div className="playButtonContainer" style={playButtonContainerStyles}>
        <h3 style={darkRedText}>Ready?</h3>
        <button onClick={PlayButtonClickHandler} style={buttonStyles}>
          Play
        </button>
      </div>
      <div style={timerContainerStyles}>
        <p>⏱️ Time Elapsed in Seconds: {timeInSeconds}</p>
      </div>
    </>
  );
}

export default StartButtonAndTimer;
