/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { degreesToRadians, random, randomHsl } from "../../helper";

function Butterfly(props) {
  // ************* RANDOMIZATION ************* //
  // Generate random values for its x and z coordinates (not y)
  const xPosition = random(-10, 10);
  const zPosition = random(-10, 10);
  const position = [xPosition, 0, zPosition];
  // Generate random value to rotate it by
  const yRotation = degreesToRadians(random(-30, 30));
  const zRotation = degreesToRadians(random(-30, 30));
  // Make a random hsl value for the body and  eye color
  const bodyColor = randomHsl();
  const eyeColor = randomHsl();

  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/butterfly.gltf");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]].play();
  }, []);

  return (
    <group
      ref={group}
      {...props}
      position={position}
      rotation={[
        degreesToRadians(180),
        yRotation,
        degreesToRadians(180) + zRotation,
      ]}
    >
      <primitive object={nodes.base} />

      <skinnedMesh
        name="wing_1"
        geometry={nodes.wing_1.geometry}
        material={materials.wing}
        skeleton={nodes.wing_1.skeleton}
      />
      <skinnedMesh
        name="wing001_1"
        geometry={nodes.wing001_1.geometry}
        material={materials.wing}
        skeleton={nodes.wing001_1.skeleton}
      />
      <skinnedMesh
        name="wing_b"
        geometry={nodes.wing_b.geometry}
        material={materials.wing}
        skeleton={nodes.wing_b.skeleton}
      />
      <skinnedMesh
        name="wing_b001"
        geometry={nodes.wing_b001.geometry}
        material={materials.wing}
        skeleton={nodes.wing_b001.skeleton}
      />

      <skinnedMesh
        name="antenna"
        material-color={bodyColor}
        geometry={nodes.antenna.geometry}
        // material={materials["leg.001"]}
        skeleton={nodes.antenna.skeleton}
      />
      <skinnedMesh
        name="antenna001"
        material-color={bodyColor}
        geometry={nodes.antenna001.geometry}
        skeleton={nodes.antenna001.skeleton}
      />
      <skinnedMesh
        name="eye"
        geometry={nodes.eye.geometry}
        material-color={eyeColor}
        // material={materials.eyes}
        skeleton={nodes.eye.skeleton}
      />
      <skinnedMesh
        name="head_1"
        material-color={bodyColor}
        geometry={nodes.head_1.geometry}
        skeleton={nodes.head_1.skeleton}
      />
      <skinnedMesh
        name="leg001"
        material-color={bodyColor}
        geometry={nodes.leg001.geometry}
        skeleton={nodes.leg001.skeleton}
      />
      <skinnedMesh
        name="leg002"
        material-color={bodyColor}
        geometry={nodes.leg002.geometry}
        skeleton={nodes.leg002.skeleton}
      />
      <skinnedMesh
        name="leg003"
        material-color={bodyColor}
        geometry={nodes.leg003.geometry}
        skeleton={nodes.leg003.skeleton}
      />
      <skinnedMesh
        name="leg004"
        material-color={bodyColor}
        geometry={nodes.leg004.geometry}
        skeleton={nodes.leg004.skeleton}
      />
      <skinnedMesh
        name="leg005"
        material-color={bodyColor}
        geometry={nodes.leg005.geometry}
        skeleton={nodes.leg005.skeleton}
      />
      <skinnedMesh
        name="leg006"
        material-color={bodyColor}
        geometry={nodes.leg006.geometry}
        skeleton={nodes.leg006.skeleton}
      />
      <skinnedMesh
        name="probocis"
        material-color={bodyColor}
        geometry={nodes.probocis.geometry}
        skeleton={nodes.probocis.skeleton}
      />
      <skinnedMesh
        name="torso+tail"
        material-color={bodyColor}
        geometry={nodes["torso+tail"].geometry}
        skeleton={nodes["torso+tail"].skeleton}
      />
    </group>
  );
}

export default Butterfly;
