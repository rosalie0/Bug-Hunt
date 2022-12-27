import { Typography } from "@mui/material";
import React from "react";
import * as SVGLoaders from "svg-loaders-react";

function Loading() {
  const loadingContainerStyles = {
    height: "70vh",
    width: "90vw",
    display: "flex",
    flexDirection: "column",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  };
  const loadingCardStyles = {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    padding: 10,
  };
  return (
    <div className="loadingContainer" style={loadingContainerStyles}>
      <div className="loadingCard" style={loadingCardStyles}>
        <SVGLoaders.Puff stroke="tomato" strokeOpacity=".125" />
        <Typography variant="subtitle" color={"tomato"}>
          loading...
        </Typography>
      </div>
    </div>
  );
}

export default Loading;
