import React, { useState } from "react";
import "./App.css";
import CanvasContainer from "./components/CanvasContainer";
import PointDisplay from "./components/PointDisplay";

function App() {
  const bodyColor = "red";
  const eyeColor = "yellow";
  const wingColor = "pink";

  const [points, setPoints] = useState(0);

  return (
    <div className="App">
      <CanvasContainer
        bodyColor={bodyColor}
        wingColor={wingColor}
        eyeColor={eyeColor}
        points={points}
        setPoints={setPoints}
      />
      <PointDisplay points={points} />
    </div>
  );
}

export default App;
