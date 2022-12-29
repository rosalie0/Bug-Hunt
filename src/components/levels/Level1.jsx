/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { addFlyCounter, addPoints } from "../../redux/gameSlice";

// 3-D Model Imports
import SunflowerField from "../backgrounds/SunflowerField";
import Fly from "../models/Fly";

function Level1() {
  const dispatch = useDispatch();

  // Flies are worth 1 point
  const flyClickHandler = (event) => {
    console.log("fly clicked!");
    event.stopPropagation(); // don't allow a 'click through' to get double points if models happen to be stacked
    dispatch(addPoints(1)); // update total points - flies are worth 1 point
    dispatch(addFlyCounter()); // add 1 to our fly counter
  };

  // Level 1 is a sunflower field with three flies to click on.
  return (
    <>
      {/* <SunflowerField /> */}

      <Fly onClick={flyClickHandler} />
      <Fly onClick={flyClickHandler} />
      <Fly onClick={flyClickHandler} />
    </>
  );
}

export default Level1;
