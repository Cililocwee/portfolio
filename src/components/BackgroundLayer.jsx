import React from "react";

export default function BackgroundLayer({ position }) {
  if (position === "top") {
    return <div id="background-layer-top"></div>;
  } else {
    return <div id="background-layer-bottom"></div>;
  }
}
