/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Loading from "./Loading";
import Level1 from "./levels/Level1";
import Level2 from "./levels/Level2";
import { useSelector } from "react-redux";

function CanvasContainer() {
  const { level } = useSelector((state) => state.game);
  const canvasContainerStyles = {
    border: "2px solid red",
    height: "80vh",
    width: "80",
  };

  return (
    <div className="canvasContainer" style={canvasContainerStyles}>
      <Suspense fallback={<Loading />}>
        <Canvas>
          <OrbitControls enableZoom={false} />
          {level === 1 && <Level1 />}
          {level === 2 && <Level2 />}
        </Canvas>
      </Suspense>
    </div>
  );
}

export default CanvasContainer;
