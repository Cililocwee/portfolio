import React from "react";
import LavaLamp from "../lavalamp/LavaLamp";

export default function BackgroundLayer({ position }) {
  if (position === "top") {
    return (
      <div id="background-layer-top">
        <LavaLamp />
      </div>
    );
  } else {
    return (
      <div id="background-layer-bottom">
        <LavaLamp />
      </div>
    );
  }
}
