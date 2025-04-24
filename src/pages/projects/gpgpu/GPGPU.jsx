import React, { useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import Particles from "./Particles";

function GPGPU() {
  const { gl } = useThree();

  const { clearColor } = useControls({
    clearColor: {
      value: "#29191f",
      label: "background",
      onChange: (value) => {
        gl.setClearColor(new THREE.Color(value));
      },
    },
  });

  return (
    <>
      <OrbitControls enableDamping />
      <Particles />
    </>
  );
}

export default GPGPU;
