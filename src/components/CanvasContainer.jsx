/* eslint-disable react/no-unknown-property */

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Stickbug from "./Stickbug";
import Loading from "./Loading";

function CanvasContainer() {
  return (
    <div className="canvasContainer">
      <Canvas camera={{ position: [10, 5, 10] }}>
        <Suspense fallback={<Loading />}>
          <OrbitControls />
          {/* Models */}
          <Stickbug />
          {/* Helpers */}
          <gridHelper args={[20, 20, 0xff0000, "teal"]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default CanvasContainer;
