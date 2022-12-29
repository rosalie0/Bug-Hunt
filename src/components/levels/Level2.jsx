import React from "react";
import { useDispatch } from "react-redux";
import {
  addFlyCounter,
  addPoints,
  addButterflyCounter,
} from "../../redux/gameSlice";
// 3-D Imports
import Europe from "../backgrounds/Europe";
import Fly from "../models/Fly";
import Butterfly from "../models/Butterfly";

function Level2() {
  const dispatch = useDispatch();

  // Flies are worth 1 point
  const flyClickHandler = (event) => {
    console.log("fly clicked!");
    event.stopPropagation(); // don't allow a 'click through' to get double points if models happen to be stacked
    dispatch(addPoints(1)); // update total points - flies are worth 1 point
    dispatch(addFlyCounter()); // add 1 to our fly counter
  };

  // Butterflies are worth 5 points
  const butterflyClickHandler = (event) => {
    console.log("01 butterfly click!");
    event.stopPropagation(); // don't allow a 'click through' to get double points if models happen to be stacked
    dispatch(addPoints(5)); //Butterflies are worth 5 points
    dispatch(addButterflyCounter()); // Add 1 to our butterfly counter
  };

  // Level 2 is a european city with 3 flies and 1 butterfly to click on
  return (
    <>
      <Europe />

      <Fly onClick={flyClickHandler} />
      <Fly onClick={flyClickHandler} />
      <Fly onClick={flyClickHandler} />

      <Butterfly onClick={butterflyClickHandler} />
    </>
  );
}

export default Level2;
