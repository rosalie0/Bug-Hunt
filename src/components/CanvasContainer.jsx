/* eslint-disable react/no-unknown-property */

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// import Stickbug from "./Stickbug";
import Loading from "./Loading";
import Butterfly from "./Butterfly";

function CanvasContainer() {
  //const bugPosition = [0, 5, 0]; // x, y, z

  return (
    <div className="canvasContainer">
      <Suspense fallback={<Loading />}>
        <Canvas camera={{ position: [10, 5, 10] }}>
          <OrbitControls />
          {/* Models */}
          {/* <Stickbug sizeOfBug={10} bugPosition={bugPosition} /> */}
          <Butterfly scale={10} />
          {/* Helpers */}
          <gridHelper args={[40, 40, 0xff0000, "teal"]} />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default CanvasContainer;
