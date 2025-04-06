import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Planet({
  position,
  orbitRadius,
  rotateSpeed,
  rotateOffset,
  texture,
  sphereRadius = 1,
}) {
  const sphereRef = useRef();

  useFrame((state, deltaTime) => {
    sphereRef.current.position.x =
      Math.cos(rotateOffset + state.clock.elapsedTime * rotateSpeed) *
      orbitRadius;

    sphereRef.current.position.z =
      Math.sin(rotateOffset + state.clock.elapsedTime * rotateSpeed) *
      orbitRadius;

    sphereRef.current.rotation.y += 0.01;
  });

  return (
    <mesh receiveShadow ref={sphereRef} position={position}>
      <sphereGeometry args={[sphereRadius, 16, 16]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Planet;
