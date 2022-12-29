/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import {
  addFlyCounter,
  addPoints,
  addButterflyCounter,
} from "../../redux/gameSlice";
import SunflowerField from "../backgrounds/SunflowerField";

// 3-D Model Imports
import Fly from "../models/Fly";
import Butterfly from "../models/Butterfly";

function Level1() {
  const dispatch = useDispatch();

  // Flies are worth 1 point
  const flyClickHandler = (event) => {
    event.stopPropagation(); // don't allow a 'click through' to get double points if models happen to be stacked
    console.log("fly clicked!");
    dispatch(addPoints(1)); // update total points - flies are worth 1 point
    dispatch(addFlyCounter()); // add 1 to our fly counter
  };

  // // Butterflies are worth 5 points
  const butterflyClickHandler = (event) => {
    event.stopPropagation(); // don't allow a 'click through' to get double points if models happen to be stacked
    console.log("01 butterfly click!");
    dispatch(addPoints(5)); //Butterflies are worth 5 points
    dispatch(addButterflyCounter()); // Add 1 to our butterfly counter
  };

  return (
    <>
      <SunflowerField />

      <Fly onClick={flyClickHandler} />
      <Fly onClick={flyClickHandler} />
      <Fly onClick={flyClickHandler} />
      <Butterfly onClick={butterflyClickHandler} />
    </>
  );
}

export default Level1;
