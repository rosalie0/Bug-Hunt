import React from "react";
import { useSelector } from "react-redux";

function TimerDisplay() {
  const { timeInSeconds } = useSelector((state) => state.timer);
  return <div>Time Elapsed in Seconds: {timeInSeconds}</div>;
}

export default TimerDisplay;
