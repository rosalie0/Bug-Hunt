import { useLoader, useThree } from "@react-three/fiber";
import { sRGBEncoding, TextureLoader } from "three";

function Skybox() {
  const { scene } = useThree();
  const texture = useLoader(TextureLoader, "/berry-bg.jpg");
  texture.encoding = sRGBEncoding;
  scene.background = texture;
  return null;
}

export default Skybox;
