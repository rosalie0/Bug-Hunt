import PropTypes from "prop-types"; // ES6
import React from "react";

function TimerDisplay({ timeElapsed }) {
  return <div>Time Elapsed in Seconds: {timeElapsed}</div>;
}
// Prop validation
TimerDisplay.propTypes = {
  timeElapsed: PropTypes.number,
};
export default TimerDisplay;
