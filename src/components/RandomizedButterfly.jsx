import PropTypes from "prop-types";
import React from "react";
import { degreesToRadians, random, randomHsl } from "../helper";
import Butterfly from "./Butterfly";

function RandomizedButterfly({ points, setPoints }) {
  // Generate random values for its x and z coordinates (not y)
  const xPosition = random(-10, 10);
  const zPosition = random(-10, 10);
  const position = [xPosition, 0, zPosition];
  console.log("position: ", position);

  // Generate random value to rotate it by
  const yRotation = degreesToRadians(random(-30, 30));
  const zRotation = degreesToRadians(random(-30, 30));

  // Make a random hsl value for the body, eye and wing color
  const bodyColor = randomHsl();
  const eyeColor = randomHsl();
  const wingColor = randomHsl();

  const clickHandler = () => {
    console.log("clicked!");
    setPoints(points + 1); // Update the points by one on click
  };

  return (
    <>
      <Butterfly
        onClick={clickHandler}
        scale={10}
        bodyColor={bodyColor}
        eyeColor={eyeColor}
        wingColor={wingColor}
        position={position}
        yRotation={yRotation}
        zRotation={zRotation}
      />
    </>
  );
}
// Prop validations

RandomizedButterfly.propTypes = {
  points: PropTypes.number,
  setPoints: PropTypes.func,
};
export default RandomizedButterfly;
