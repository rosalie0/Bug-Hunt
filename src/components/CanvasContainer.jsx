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
import { useSelector } from "react-redux";

function CanvasContainer({
  bodyColor,
  wingColor,
  eyeColor,
  points,
  setPoints,
}) {
  //const bugPosition = [0, 5, 0]; // x, y, z

  // const {points} = useSelector(state => state.game)
  const canvasContainerStyles = {
    border: "2px solid red",
    height: "80vh",
    width: "80",
  };

  return (
    <div className="canvasContainer" style={canvasContainerStyles}>
      <Suspense fallback={<Loading />}>
        <Canvas camera={{ position: [0, 20, 0] }}>
          <ambientLight />
          <Skybox />
          <OrbitControls />
          {/* Models */}
          {/* <Stickbug sizeOfBug={10} bugPosition={bugPosition} /> */}

          <Fly />

          <RandomizedButterfly points={points} setPoints={setPoints} />
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
  points: PropTypes.number,
  setPoints: PropTypes.func,
};
export default CanvasContainer;
