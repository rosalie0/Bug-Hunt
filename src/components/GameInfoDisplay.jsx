import React from "react";
import { useSelector } from "react-redux";

function GameInfoDisplay() {
  const { points, flyCounter, butterflyCounter, level, pointsNeededPerLevel } =
    useSelector((state) => state.game);

  const containerStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
    padding: 5,
    border: "1px solid #ffcbc2",
    borderRadius: 6,
    boxShadow: "rgba(0, 0, 0, 0.1) 1px 2px 4px",
    backgroundColor: "#ffe5e0",
    color: "#eb2300",
  };
  const gameInfoDisplayStyles = {
    width: "45vw",
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

  const howManyMorePointsNeeded = pointsNeededPerLevel[level] - points;
  return (
    <div style={containerStyles}>
      <div id="statistics" style={gameInfoDisplayStyles}>
        <h2 style={noMargins}>Level {level}</h2>
        <h3 style={noMargins}>Points: {points}</h3>
        <h4 style={noMargins}>
          <i>
            Get {howManyMorePointsNeeded} more points to advance to the next
            level!
          </i>
        </h4>
        <p style={noMargins}>Number of Flies Caught: {flyCounter}</p>
        {level === 2 && (
          <p style={noMargins}>
            Number of Butterflies Caught: {butterflyCounter}
          </p>
        )}
      </div>
      <div id="description">
        <h2>Game Information:</h2>
        {level === 2 && (
          <>
            <b>
              🦋 Butterflies are worth 5 points - but they are hard to catch! 🦋
            </b>
            <p style={noMargins}>
              You need to click on their bodies, not wings.
            </p>
          </>
        )}
        <p>
          Click on the bugs to catch them, earn points, and move on to the next
          level!
        </p>
      </div>
    </div>
  );
}

export default GameInfoDisplay;
