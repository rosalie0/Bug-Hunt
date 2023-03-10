/* eslint-disable react/no-unknown-property */
import { useLoader, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import {
  BackSide,
  LinearFilter,
  ShaderLib,
  ShaderMaterial,
  TextureLoader,
  Mesh,
  BoxGeometry,
} from "three";

function SunflowerField() {
  const { scene } = useThree();
  const texture = useLoader(TextureLoader, "/backgrounds/sunflowers_2k.png");

  // Only add this texture to the scene on first load, otherwise it keeps adding.
  useEffect(() => {
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
    const plane = new BoxGeometry(100, 100, 100);
    const bgMesh = new Mesh(plane, material);
    bgMesh.name = "sunflower field";
    scene.add(bgMesh);
  }, []);
}

export default SunflowerField;
