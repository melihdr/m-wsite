import React from "react";
import CoffeSmoke from "./CoffeSmoke";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function CoffeSmokeRoot() {
  return (
    <>
      <Canvas
        style={{ position: "fixed", top: 0, left: 0, outline: "none" }}
        dpr={Math.min(window.devicePixelRatio, 2)}
        camera={{ position: [3, 10, 3] }}
      >
        <OrbitControls />
        <CoffeSmoke />
      </Canvas>
    </>
  );
}

export default CoffeSmokeRoot;
