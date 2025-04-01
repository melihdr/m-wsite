import { Canvas } from "@react-three/fiber";
import React from "react";
import HomePageCube from "../components/homePageCube";

function Temporary() {
  return (
    <Canvas flat>
      <HomePageCube />
    </Canvas>
  );
}

export default Temporary;
