/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { addFlyCounter, addPoints } from "../../redux/gameSlice";
// 3-D Model Imports
import SunflowerField from "../backgrounds/SunflowerField";
import Fly from "../models/Fly";

// Level 1 is a sunflower field with three flies to click on.
function Level1() {
  const dispatch = useDispatch();

  // Flies are worth 1 point
  const flyClickHandler = (event) => {
    event.stopPropagation(); // don't allow a 'click through' to get double points if models happen to be stacked
    dispatch(addPoints(1)); // update total points - flies are worth 1 point
    dispatch(addFlyCounter()); // add 1 to our fly counter
  };

  // const { scene } = useThree();
  // console.log(scene.children);
  console.log("level 1 rerender!");
  return (
    <group name="level 1">
      <SunflowerField />
      <Fly onClick={flyClickHandler} />
      <Fly onClick={flyClickHandler} />
      <Fly onClick={flyClickHandler} />
    </group>
  );
}

export default Level1;
