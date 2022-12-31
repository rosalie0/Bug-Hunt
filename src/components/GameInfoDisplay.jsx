import React from "react";
import { useSelector } from "react-redux";

function GameInfoDisplay() {
  const { points, flyCounter, butterflyCounter, level, pointsNeededPerLevel } =
    useSelector((state) => state.game);

  const containerStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 5,
  };
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

  const levelInfoStyles = {
    color: "red",
  };
  return (
    <div style={containerStyles}>
      <div id="description">
        {level === 2 && (
          <p style={levelInfoStyles}>
            Butterflies are hard to catch! You need to click on their bodies,
            not wings.
          </p>
        )}
        <p>
          Click on the bugs to catch them, earn points, and move on to the next
          level!
        </p>
      </div>
      <div id="statistics" style={gameInfoDisplayStyles}>
        <h2 style={noMargins}>Level {level}</h2>
        <h3 style={noMargins}>Points: {points}</h3>
        <h4 style={noMargins}>
          <i>
            Reach {pointsNeededPerLevel[level]} points to advance to the next
            level!
          </i>
        </h4>
        <p style={noMargins}>Number of Flies Caught: {flyCounter}</p>
        <p style={noMargins}>
          Number of Butterflies Caught: {butterflyCounter}
        </p>
      </div>
    </div>
  );
}

export default GameInfoDisplay;
