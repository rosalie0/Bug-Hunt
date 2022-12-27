import React from "react";
import { degreesToRadians, random, randomHsl } from "../helper";
import Butterfly from "./Butterfly";

function RandomizedButterfly() {
  // Generate random values for its x and z coordinates (not y)
  const xPosition = random(-10, 10);
  const zPosition = random(-10, 10);
  const position = [xPosition, 0, zPosition];

  // Generate random value to rotate it by
  const yRotation = degreesToRadians(random(-30, 30));
  const zRotation = degreesToRadians(random(-30, 30));

  // Make a random hsl value for the body, eye and wing color
  const bodyColor = randomHsl();
  const eyeColor = randomHsl();
  const wingColor = randomHsl();

  console.log(xPosition, zPosition, yRotation);

  return (
    <>
      <Butterfly
        scale={25}
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

export default RandomizedButterfly;
