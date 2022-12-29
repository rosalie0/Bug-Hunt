/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { Suspense } from "react";
import { useDispatch } from "react-redux";
import { addFlyCounter, addPoints } from "../redux/gameSlice";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Loading from "./Loading";
import RandomizedButterfly from "./RandomizedButterfly";
import { Fly } from "./Fly";
import BackgroundBerry from "./BackgroundBerry";
import BackgroundGrass from "./BackgroundGrass";
function CanvasContainer() {
  //const bugPosition = [0, 5, 0]; // x, y, z
  const dispatch = useDispatch();

  const canvasContainerStyles = {
    border: "2px solid red",
    height: "80vh",
    width: "80",
  };

  // Flies are worth 1 point
  const flyClickHandler = (event) => {
    event.stopPropagation(); // don't allow a 'click through' to get double points if models happen to be stacked
    console.log("fly clicked!");
    dispatch(addPoints(1)); // update total points - flies are worth 1 point
    dispatch(addFlyCounter()); // add 1 to our fly counter
  };

  return (
    <div className="canvasContainer" style={canvasContainerStyles}>
      <Suspense fallback={<Loading />}>
        <Canvas>
          <BackgroundGrass />
          <OrbitControls enableZoom={false} />

          {/* <Stickbug sizeOfBug={10} bugPosition={bugPosition} /> */}
          <Fly onClick={flyClickHandler} />
          <Fly onClick={flyClickHandler} />
          <Fly onClick={flyClickHandler} />

          {/* The butterflies cannot be rendered more than once */}
          <RandomizedButterfly />
          <RandomizedButterfly />
          <RandomizedButterfly />

          {/* Helpers */}
          {/* <gridHelper args={[40, 40, 0xff0000, "teal"]} /> */}
        </Canvas>
      </Suspense>
    </div>
  );
}

export default CanvasContainer;
