import React from "react";
import { useSelector } from "react-redux";

function PointDisplay() {
  const { points } = useSelector((state) => state.game);
  return (
    <div>
      <h2>Points: {points}</h2>
    </div>
  );
}

export default PointDisplay;
