import React from "react";
import { degreesToRadians, random, randomHsl } from "../helper";
import { useDispatch } from "react-redux";
import { addButterflyCounter, addPoints } from "../redux/gameSlice";
import { Butterfly } from "./Butterfly";

function RandomizedButterfly() {
  const dispatch = useDispatch();
  // ************* RANDOMIZATION ************* //
  // Generate random values for its x and z coordinates (not y)
  const xPosition = random(-10, 10);
  const zPosition = random(-10, 10);
  const position = [xPosition, 0, zPosition];
  // Generate random value to rotate it by
  const yRotation = degreesToRadians(random(-30, 30));
  const zRotation = degreesToRadians(random(-30, 30));
  // Make a random hsl value for the body and  eye color
  const bodyColor = randomHsl();
  const eyeColor = randomHsl();

  // Butterflies are worth 5 points
  const butterflyClickHandler = (event) => {
    event.stopPropagation(); // don't allow a 'click through' to get double points if models happen to be stacked

    console.log("01 butterfly click!");
    dispatch(addPoints(5)); //Butterflies are worth 5 points
    dispatch(addButterflyCounter()); // Add 1 to our butterfly counter
  };
  return (
    <>
      <Butterfly
        onClick={butterflyClickHandler}
        scale={10}
        bodyColor={bodyColor}
        eyeColor={eyeColor}
        position={position}
        yRotation={yRotation}
        zRotation={zRotation}
      />
    </>
  );
}

export default RandomizedButterfly;
