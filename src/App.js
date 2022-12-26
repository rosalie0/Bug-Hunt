import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";

import MyModel from "./components/MyModel";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="App">
      <div className="canvasContainer">
        <Canvas camera={{ position: [5, 1, 5] }}>
          <Suspense fallback={<Loading />}>
            <ambientLight />
            <MyModel />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
