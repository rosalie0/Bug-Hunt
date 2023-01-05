import { useThree } from "@react-three/fiber";
import { sRGBEncoding, CubeTextureLoader } from "three";

function GalaxySkybox() {
  // grab a scene and make it the scene's bg
  const { scene } = useThree();
  console.log(scene);

  // Clear our the scene (Remove our giant cubes that were made from the 360 photo cubes)
  // Clear everything except the latest child - which is the YOU WIN! font
  while (scene.children.length > 1) {
    scene.remove(scene.children[0]);
  }
  // Create a cube texture
  const loader = new CubeTextureLoader();
  loader.setPath("/backgrounds/custom-cubemap/"); // preface all the .load links with this

  // If you want to use the green galaxy ->
  // loader.setPath("/backgrounds/wallpaperden/"); // preface all the .load links with this

  const texture = loader.load([
    "px.png",
    "nx.png",
    "py.png",
    "ny.png",
    "pz.png",
    "nz.png",
  ]);

  scene.background = texture;
  texture.encoding = sRGBEncoding; // optional / changes the hues of how pic looks

  return null;
}
export default GalaxySkybox;
