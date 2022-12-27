import React from "react";
import "./App.css";
import CanvasContainer from "./components/CanvasContainer";

function App() {
  const bodyColor = "red";
  const eyeColor = "yellow";
  const wingColor = "pink";

  return (
    <div className="App">
      <CanvasContainer
        bodyColor={bodyColor}
        wingColor={wingColor}
        eyeColor={eyeColor}
      />
    </div>
  );
}

export default App;
