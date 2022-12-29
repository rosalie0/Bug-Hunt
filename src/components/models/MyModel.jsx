/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";

function MyModel() {
  const groupRef = useRef();
  return (
    <group ref={groupRef}>
      <mesh>
        <cylinderGeometry args={[3, 3, 5]} />
        <meshBasicMaterial color={"black"} wireframe={true} />
      </mesh>
    </group>
  );
}

export default MyModel;
