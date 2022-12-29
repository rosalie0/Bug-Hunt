/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// import Stickbug from "./Stickbug";
import Loading from "./Loading";
import Skybox from "./Skybox";
import RandomizedButterfly from "./RandomizedButterfly";
import BlueButterfly from "./BlueButterfly";
import { Fly } from "./Fly";
import { useDispatch } from "react-redux";
import { addFlyCounter, addPoints } from "../redux/gameSlice";
import Butterfly from "./Butterfly";

function CanvasContainer({ bodyColor, eyeColor }) {
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
        <Canvas camera={{ position: [0, 20, 0] }}>
          <OrbitControls />
          {/* <Skybox /> */}
          {/* Models */}
          {/* <Stickbug sizeOfBug={10} bugPosition={bugPosition} /> */}

          <Fly onClick={flyClickHandler} />
          <Fly onClick={flyClickHandler} />
          <Fly onClick={flyClickHandler} />

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

// Prop validations
CanvasContainer.propTypes = {
  bodyColor: PropTypes.string,
  eyeColor: PropTypes.string,
};
export default CanvasContainer;
