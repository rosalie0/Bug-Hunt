import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOneSecond } from "./redux/timerSlice";

function TimerDisplay() {
  const { timeInSeconds } = useSelector((state) => state.timer);

  const startTimer = () => {
    updateTimer();
    setInterval(updateTimer, 1000);
  };

  // // Every 1 millisecond, update the timeElapsed by 1
  const dispatch = useDispatch();
  const updateTimer = () => {
    console.log("inside updateTimer");
    dispatch(addOneSecond());
  };

  return <div>Time Elapsed in Seconds: {timeInSeconds}</div>;
}

export default TimerDisplay;
