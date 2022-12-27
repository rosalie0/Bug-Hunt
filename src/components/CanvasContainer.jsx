/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// import Stickbug from "./Stickbug";
import Loading from "./Loading";
import Butterfly from "./Butterfly";
import Skybox from "./Skybox";

function CanvasContainer({ bodyColor, wingColor, eyeColor }) {
  //const bugPosition = [0, 5, 0]; // x, y, z

  return (
    <div className="canvasContainer">
      <Suspense fallback={<Loading />}>
        <Canvas camera={{ position: [10, 5, 10] }}>
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
