import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

function GalaxySkybox() {
  // grab a scene and make it the scene's bg
  const { scene } = useThree();
  // Create a cube texture
  const loader = new CubeTextureLoader();
  // loader.setPath("/backgrounds/custom-cubemap"); // preface all the .load links with this

  // If you want to use the cubemap I took from a demo -
  // const texture = loader.load([
  //   "/backgrounds/demo-cubemap/1.jpg",
  //   "/backgrounds/demo-cubemap/2.jpg",
  //   "/backgrounds/demo-cubemap/3.jpg",
  //   "/backgrounds/demo-cubemap/4.jpg",
  //   "/backgrounds/demo-cubemap/5.jpg",
  //   "/backgrounds/demo-cubemap/6.jpg",
  // ]);

  const texture = loader.load([
    "/backgrounds/custom-cubemap/px.png",
    "/backgrounds/custom-cubemap/nx.png",
    "/backgrounds/custom-cubemap/py.png",
    "/backgrounds/custom-cubemap/ny.png",
    "/backgrounds/custom-cubemap/pz.png",
    "/backgrounds/custom-cubemap/nz.png",
  ]);
  // const [cubeMap] = useLoader(CubeTextureLoader, [
  //   ["px.hdr", "nx.hdr", "py.hdr", "ny.hdr", "pz.hdr", "nz.hdr"],
  // ]);

  scene.background = texture;
  console.log(scene.background);
  return null;
}
export default GalaxySkybox;
