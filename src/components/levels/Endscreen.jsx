/* eslint-disable react/no-unknown-property */
import { Text3D } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import GalaxySkybox from "../backgrounds/GalaxySkybox";

// Renders a 'you win!' in 3d letters
function Endscreen(props) {
  const groupRef = useRef();
  const fontURL =
    "/json-fonts-master/fonts/cyrillic/roboto/Roboto_Regular.json";

  GalaxySkybox();

  // This is like to our animation loop
  useFrame(() => {
    // if it hasn't loaded yet, don't try to animate it. (just get out)
    if (!groupRef.current) return;
    groupRef.current.rotation.x += 0.02;
  });

  const { camera } = useThree();
  useEffect(() => {
    console.log(camera);
    console.log(camera);
    camera.reset();
  }, []);

  return (
    <group {...props} ref={groupRef} position={[-1, 0, 0]}>
      <Text3D name="YOU" font={fontURL} position={[0, 1, 0]}>
        Y O U
        <meshNormalMaterial />
      </Text3D>
      <Text3D name="WIN" font={fontURL} position={[-0.5, -1, 0]}>
        W I N !!
        <meshNormalMaterial />
      </Text3D>
    </group>
  );
}

export default Endscreen;
