import React from "react";
import { useDispatch } from "react-redux";
import { addFlyCounter, addPoints } from "../../redux/gameSlice";
import SunflowerField from "../backgrounds/SunflowerField";

// 3-D Model Imports
import Fly from "../models/Fly";
import RandomizedButterfly from "../models/RandomizedButterfly";

function Level1() {
  const dispatch = useDispatch();

  // Flies are worth 1 point
  const flyClickHandler = (event) => {
    event.stopPropagation(); // don't allow a 'click through' to get double points if models happen to be stacked
    console.log("fly clicked!");
    dispatch(addPoints(1)); // update total points - flies are worth 1 point
    dispatch(addFlyCounter()); // add 1 to our fly counter
  };

  return (
    <>
      <SunflowerField />
      <Fly onClick={flyClickHandler} />
      <Fly onClick={flyClickHandler} />
      <Fly onClick={flyClickHandler} />

      <RandomizedButterfly />

      {/* Helpers */}
      {/* <gridHelper args={[40, 40, 0xff0000, "teal"]} /> */}
    </>
  );
}

export default Level1;
