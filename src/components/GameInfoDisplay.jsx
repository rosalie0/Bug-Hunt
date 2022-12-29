import React from "react";
import { useSelector } from "react-redux";

function GameInfoDisplay() {
  const { points, flyCounter, butterflyCounter, level } = useSelector(
    (state) => state.game
  );

  const gameInfoDisplayStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 5,
  };

  const noMargins = {
    margin: 0,
  };

  return (
    <div style={gameInfoDisplayStyles}>
      <h2 style={noMargins}>Level {level}</h2>
      <h3 style={noMargins}>Points: {points}</h3>
      <h4 style={noMargins}>
        {" "}
        <i>Reach 10 points to advance to the next level!</i>
      </h4>
      <p style={noMargins}>Number of Flies Caught: {flyCounter}</p>
      <p style={noMargins}>Number of Butterflies Caught: {butterflyCounter}</p>
    </div>
  );
}

export default GameInfoDisplay;
