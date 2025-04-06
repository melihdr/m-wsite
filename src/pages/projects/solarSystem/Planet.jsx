import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Planet({ position, orbitRadius, rotateSpeed, rotateOffset, texture }) {
  const sphereRef = useRef();

  let xPosition;
  let zPosition;

  useFrame((state, deltaTime) => {
    sphereRef.current.position.x =
      Math.cos(rotateOffset + state.clock.elapsedTime * rotateSpeed) *
      orbitRadius;
    sphereRef.current.position.z =
      Math.sin(rotateOffset + state.clock.elapsedTime * rotateSpeed) *
      orbitRadius;
  });

  return (
    <mesh receiveShadow ref={sphereRef} position={position}>
      <sphereGeometry />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Planet;
