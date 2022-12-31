import { useThree } from "@react-three/fiber";
import { sRGBEncoding, CubeTextureLoader } from "three";

function GalaxySkybox() {
  // grab a scene and make it the scene's bg
  const { scene } = useThree();
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

  console.log(scene.background);
  return null;
}
export default GalaxySkybox;
