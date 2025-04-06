import React from "react";
import SolarSystem from "./SolarSystem";
import { Canvas } from "@react-three/fiber";

function SolarSystemRoot() {
  return (
    <div style={{ height: "100vh", width: "100wh", margin: "0" }}>
      <Canvas style={{ height: "100%", width: "100%" }}>
        <SolarSystem />
      </Canvas>
    </div>
  );
}

export default SolarSystemRoot;
