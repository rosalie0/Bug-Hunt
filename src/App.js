import React from "react";
import "./App.css";
import CanvasContainer from "./components/CanvasContainer";
import PointDisplay from "./components/PointDisplay";

function App() {
  return (
    <div className="App">
      <CanvasContainer />
      <PointDisplay />
    </div>
  );
}

export default App;
