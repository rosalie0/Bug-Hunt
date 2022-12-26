/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";

function Stickbug() {
  const groupRef = useRef();

  return (
    <group ref={groupRef}>
      <mesh>
        <capsuleGeometry args={[1, 10]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </group>
  );
}

export default Stickbug;
