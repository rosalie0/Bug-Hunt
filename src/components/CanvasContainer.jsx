/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// import Stickbug from "./Stickbug";
import Loading from "./Loading";
import Butterfly from "./Butterfly";
import Skybox from "./Skybox";
import RandomizedButterfly from "./RandomizedButterfly";
import Shoe from "./Shoe";

function CanvasContainer({ bodyColor, wingColor, eyeColor }) {
  //const bugPosition = [0, 5, 0]; // x, y, z

  const canvasContainerStyles = {
    border: "2px solid red",
    height: "100vh",
    width: "100vw",
  };

  return (
    <div className="canvasContainer" style={canvasContainerStyles}>
      <Suspense fallback={<Loading />}>
        <Canvas camera={{ position: [0, 20, 0] }}>
          <Skybox />
          <OrbitControls />
          {/* Models */}
          {/* <Stickbug sizeOfBug={10} bugPosition={bugPosition} /> */}
          <Butterfly
            scale={10}
            bodyColor={bodyColor}
            eyeColor={eyeColor}
            wingColor={wingColor}
          />

          <Shoe position={[10, 0, -10]} />
          <Shoe />

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
};
export default CanvasContainer;
