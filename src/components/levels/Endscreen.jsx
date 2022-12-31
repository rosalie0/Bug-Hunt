/* eslint-disable react/no-unknown-property */
import { Text3D } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import GalaxySkybox from "../backgrounds/GalaxySkybox";

// Renders a 'you win!' in 3d letters
function Endscreen(props) {
  const mesh = useRef();
  const fontURL =
    "/json-fonts-master/fonts/cyrillic/roboto/Roboto_Regular.json";

  GalaxySkybox();
  return (
    <group {...props} ref={mesh} position={[-1, 0, 0]}>
      <hemisphereLight />
      <GalaxySkybox />
      <Text3D font={fontURL} position={[0, 1, 0]}>
        Y O U
        <meshNormalMaterial />
      </Text3D>
      <Text3D font={fontURL} position={[-0.5, -1, 0]}>
        W I N !!
        <meshNormalMaterial side={THREE.BackSide} />
      </Text3D>
    </group>
  );
}

export default Endscreen;
