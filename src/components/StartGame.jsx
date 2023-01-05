import React, { useState } from "react";

function StartGame() {
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

  // When player starts the game...
  const PlayButtonClickHandler = () => {
    // Hide our button container
    setVisibility("hidden");
    // TODO: Start the timer
    startTimer();
  };

  return (
    <div className="container" style={containerStyles}>
      <button onClick={PlayButtonClickHandler}>Play</button>
    </div>
  );
}

export default StartGame;
