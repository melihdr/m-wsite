import React from "react";
import Liquid from "./Liquid";
import { Canvas } from "@react-three/fiber";

function LiquidRoot() {
  return (
    <div style={{ height: "100vh", width: "100wh", margin: "0" }}>
      <Canvas style={{ height: "100%", width: "100%" }}>
        <Liquid />
      </Canvas>
    </div>
  );
}

export default LiquidRoot;
