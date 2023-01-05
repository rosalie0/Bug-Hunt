import React from "react";
import { useDispatch } from "react-redux";
import { resetGame } from "../../redux/gameSlice";

function PlayAgainButton() {
  const dispatch = useDispatch();

  const buttonContainerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const buttonStyles = {
    width: 200,
    padding: "12px 14px",
    margin: 5,
    background: "tomato",
    color: "white",
    fontSize: 16,
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "rgba(0, 0, 0, 0.1) 1px 2px 4px",
    border: "1px solid #ffcbc2",
    borderRadius: 6,
  };

  const clickHandler = () => {
    dispatch(resetGame());
  };
  return (
    <div style={buttonContainerStyles}>
      <button style={buttonStyles} onClick={clickHandler}>
        Play Again
      </button>
    </div>
  );
}

export default PlayAgainButton;
