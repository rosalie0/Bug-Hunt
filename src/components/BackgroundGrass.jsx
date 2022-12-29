/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { useLoader, useThree } from "@react-three/fiber";
import {
  BackSide,
  LinearFilter,
  ShaderLib,
  ShaderMaterial,
  sRGBEncoding,
  TextureLoader,
  BoxBufferGeometry,
  Mesh,
} from "three";

function BackgroundGrass() {
  const { scene } = useThree();
  const texture = useLoader(TextureLoader, "/tears_of_steel_bridge_2k.jpg");
  texture.encoding = sRGBEncoding; // optional / changes the hues of how pic looks

  texture.magFilter = LinearFilter;
  texture.minFilter = LinearFilter;

  const shader = ShaderLib.equirect;
  const material = new ShaderMaterial({
    fragmentShader: shader.fragmentShader,
    vertexShader: shader.vertexShader,
    uniforms: shader.uniforms,
    depthWrite: false,
    side: BackSide,
  });
  material.uniforms.tEquirect.value = texture;
  const plane = new BoxBufferGeometry(100, 100, 100);
  const bgMesh = new Mesh(plane, material);
  scene.add(bgMesh);
}

export default BackgroundGrass;
