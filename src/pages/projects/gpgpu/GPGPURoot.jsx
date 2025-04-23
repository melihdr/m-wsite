import React from "react";
import { Canvas } from "@react-three/fiber";
import GPGPU from "./GPGPU";
import { Leva } from "leva";

function GPGPURoot() {
  return (
    <>
      <Leva />
      <Canvas
        style={{ position: "fixed", top: 0, left: 0, outline: "none" }}
        camera={{ position: [9.5, 3.6, 9.32] }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <GPGPU />
      </Canvas>
    </>
  );
}

export default GPGPURoot;
