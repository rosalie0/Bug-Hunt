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
import { useDispatch, useSelector } from "react-redux";
import { addPoints } from "../redux/gameSlice";

function CanvasContainer({ bodyColor, wingColor, eyeColor }) {
  //const bugPosition = [0, 5, 0]; // x, y, z
  const dispatch = useDispatch();
  const { points } = useSelector((state) => state.game);

  const canvasContainerStyles = {
    border: "2px solid red",
    height: "80vh",
    width: "80",
  };

  // Flies are worth 1 point
  const flyClickHandler = () => {
    console.log("fly clicked!");
    dispatch(addPoints(1));
  };

  // Butterflies are worth 5 points
  const butterflyClickHandler = () => {
    console.log("bf click");
    dispatch(addPoints(5));
  };
  return (
    <div className="canvasContainer" style={canvasContainerStyles}>
      <Suspense fallback={<Loading />}>
        <Canvas camera={{ position: [0, 20, 0] }}>
          <ambientLight />
          <Skybox />
          {/* Models */}
          {/* <Stickbug sizeOfBug={10} bugPosition={bugPosition} /> */}

          <Fly onClick={flyClickHandler} />

          <RandomizedButterfly onClick={butterflyClickHandler} />
          {/* Helpers */}
          <gridHelper args={[40, 40, 0xff0000, "teal"]} />
        </Canvas>
      </Suspense>
    </div>
  );
}

// Prop validations
CanvasContainer.propTypes = {
  bodyColor: PropTypes.string,
  wingColor: PropTypes.string,
  eyeColor: PropTypes.string,
  // points: PropTypes.number,
  // setPoints: PropTypes.func,
};
export default CanvasContainer;
