/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Loading from "./Loading";
import Level1 from "./levels/Level1";
import Level2 from "./levels/Level2";
import { useDispatch, useSelector } from "react-redux";
import { advanceToNextLevel, winGame } from "../redux/gameSlice";
import Endscreen from "./levels/Endscreen";

function CanvasContainer() {
  const dispatch = useDispatch();
  const { level, points, playerWon, pointsNeededPerLevel } = useSelector(
    (state) => state.game
  );
  const canvasContainerStyles = {
    height: "75vh",
    width: "100vw",
  };

  // ***** Watch points to see if we should advance to next level ****** //
  useEffect(() => {
    console.log("inside watching level useEffect");
    // If level 1, check level 1 requirements
    if (level === 1 && points >= pointsNeededPerLevel[level]) {
      console.log("finished level 1!");
      dispatch(advanceToNextLevel()); // update redux to advance to level 2
    }

    // If level 2, check level 2 requirements
    if (level === 2 && points >= pointsNeededPerLevel[level]) {
      console.log("finished level 2 (our final level!");
      dispatch(winGame()); // update redux to view winning game screen
    }
  }, [points]);

  return (
    <div className="canvasContainer" style={canvasContainerStyles}>
      <Suspense fallback={<Loading />}>
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={1} />
          {level === 1 && <Level1 />}
          {level === 2 && <Level2 />}
          {playerWon && <Endscreen />}
        </Canvas>
      </Suspense>
    </div>
  );
}

export default CanvasContainer;
