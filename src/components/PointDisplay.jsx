import React from "react";
import { useSelector } from "react-redux";

function PointDisplay() {
  const { points, flyCounter, butterflyCounter } = useSelector(
    (state) => state.game
  );
  return (
    <div>
      <h2>Points: {points}</h2>
      <p>Number of Flies Caught: {flyCounter}</p>
      <p>Number of Butterflies Caught: {butterflyCounter}</p>
    </div>
  );
}

export default PointDisplay;
