import React from "react";

function PlayerOptions() {
  return (
    <div>
      <h3>Where would you like to catch bugs?</h3>
      <label htmlFor="location">Location:</label>
      <select name="location" id="location">
        <option value="sunflowerField">A Sunflower Field</option>
        <option value="europe">A City in Europe</option>
        <option value="berry">A Berry Bush</option>
      </select>
    </div>
  );
}

export default PlayerOptions;
