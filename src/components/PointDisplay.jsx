import PropTypes from "prop-types";
import React from "react";

function PointDisplay({ points }) {
  return (
    <div>
      <h2>Points: {points}</h2>
    </div>
  );
}

// Prop validations
PointDisplay.propTypes = {
  points: PropTypes.number,
};

export default PointDisplay;
