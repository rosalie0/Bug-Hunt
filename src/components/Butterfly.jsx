/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.0.9 butterfly.gltf
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

function Butterfly(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/butterfly.gltf");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    console.log(names);
    actions[names[0]].reset().fadeIn(0.5).play();
  });
  console.log(actions);
  return (
    <group ref={group} {...props} dispose={null} onClick={() => actions.play()}>
      <group name="Scene">
        <group name="Circle" />
        <group name="plane_bas" position={[0, -0.13, 0]} />
        <group name="Armature">
          <primitive object={nodes.base} />
          <skinnedMesh
            name="antenna"
            geometry={nodes.antenna.geometry}
            material={materials["leg.001"]}
            skeleton={nodes.antenna.skeleton}
          />
          <skinnedMesh
            name="antenna001"
            geometry={nodes.antenna001.geometry}
            material={materials["leg.001"]}
            skeleton={nodes.antenna001.skeleton}
          />
          <skinnedMesh
            name="eye"
            geometry={nodes.eye.geometry}
            material={materials.eyes}
            skeleton={nodes.eye.skeleton}
          />
          <skinnedMesh
            name="head_1"
            geometry={nodes.head_1.geometry}
            material={materials["leg.001"]}
            skeleton={nodes.head_1.skeleton}
          />
          <skinnedMesh
            name="leg001"
            geometry={nodes.leg001.geometry}
            material={materials["leg.001"]}
            skeleton={nodes.leg001.skeleton}
          />
          <skinnedMesh
            name="leg002"
            geometry={nodes.leg002.geometry}
            material={materials["leg.001"]}
            skeleton={nodes.leg002.skeleton}
          />
          <skinnedMesh
            name="leg003"
            geometry={nodes.leg003.geometry}
            material={materials["leg.001"]}
            skeleton={nodes.leg003.skeleton}
          />
          <skinnedMesh
            name="leg004"
            geometry={nodes.leg004.geometry}
            material={materials["leg.001"]}
            skeleton={nodes.leg004.skeleton}
          />
          <skinnedMesh
            name="leg005"
            geometry={nodes.leg005.geometry}
            material={materials["leg.001"]}
            skeleton={nodes.leg005.skeleton}
          />
          <skinnedMesh
            name="leg006"
            geometry={nodes.leg006.geometry}
            material={materials["leg.001"]}
            skeleton={nodes.leg006.skeleton}
          />
          <skinnedMesh
            name="probocis"
            geometry={nodes.probocis.geometry}
            material={materials["leg.001"]}
            skeleton={nodes.probocis.skeleton}
          />
          <skinnedMesh
            name="torso+tail"
            geometry={nodes["torso+tail"].geometry}
            material={materials.torso}
            skeleton={nodes["torso+tail"].skeleton}
          />
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
        </group>
      </group>
    </group>
  );
}

export default Butterfly;