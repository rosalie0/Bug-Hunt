import { useLoader, useThree } from "@react-three/fiber";
import { sRGBEncoding, TextureLoader } from "three";

function BackgroundBerry() {
  const { scene } = useThree();
  const texture = useLoader(TextureLoader, "/berry-bg.jpg");
  texture.encoding = sRGBEncoding; // optional / changes the hues of how pic looks
  scene.background = texture;
  return null;
}

export default BackgroundBerry;
