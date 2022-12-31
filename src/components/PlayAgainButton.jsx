import React from "react";

function PlayAgainButton() {
  const clickHandler = () => {
    console.log("play again clicked");
  };
  return (
    <div>
      <button onClick={clickHandler}>Play Again</button>
    </div>
  );
}

export default PlayAgainButton;
