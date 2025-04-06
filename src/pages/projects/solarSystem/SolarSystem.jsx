import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";
import Planet from "./Planet";

function SolarSystem() {
  const [cameraPos, setCameraPos] = useState([20, 20, 20]);

  const cameraRef = useRef();

  const mercuryTexture = useTexture("./images/planets/2k_mercury.jpg");
  const venusTexture = useTexture("./images/planets/2k_venus_surface.jpg");
  const earthTexture = useTexture("./images/planets/2k_earth_daymap.jpg");
  const marsTexture = useTexture("./images/planets/2k_mars.jpg");
  const jupiterTexture = useTexture("./images/planets/2k_jupiter.jpg");
  const saturnTexture = useTexture("./images/planets/2k_saturn.jpg");
  const uranusTexture = useTexture("./images/planets/2k_uranus.jpg");
  const neptuneTexture = useTexture("./images/planets/2k_neptune.jpg");

  return (
    <>
      <axesHelper args={[5]} />
      <PerspectiveCamera ref={cameraRef} makeDefault position={cameraPos} />

      <color args={["black"]} attach="background" />
      <OrbitControls />

      <ambientLight intensity={0.2} />
      <pointLight
        position={[0, 0, 0]}
        intensity={100}
        color="yellow"
        castShadow
      />

      <mesh>
        <sphereGeometry />
        <meshStandardMaterial color={"yellow"} emissive="yellow" />
      </mesh>

      <Planet
        position={[5, 0, 0]}
        orbitRadius={5}
        rotateSpeed={1}
        rotateOffset={3.14}
        texture={mercuryTexture}
      />
      <Planet
        position={[5, 0, 0]}
        orbitRadius={10}
        rotateSpeed={0.5}
        rotateOffset={0}
        texture={venusTexture}
      />
      <Planet
        position={[5, 0, 0]}
        orbitRadius={15}
        rotateSpeed={1}
        rotateOffset={3.14}
        texture={earthTexture}
      />
      <Planet
        position={[5, 0, 0]}
        orbitRadius={20}
        rotateSpeed={0.5}
        rotateOffset={0}
        texture={marsTexture}
      />
      <Planet
        position={[5, 0, 0]}
        orbitRadius={25}
        rotateSpeed={1}
        rotateOffset={3.14}
        texture={jupiterTexture}
      />
      <Planet
        position={[5, 0, 0]}
        orbitRadius={30}
        rotateSpeed={0.5}
        rotateOffset={0}
        texture={saturnTexture}
      />
      <Planet
        position={[5, 0, 0]}
        orbitRadius={35}
        rotateSpeed={1}
        rotateOffset={3.14}
        texture={uranusTexture}
      />
      <Planet
        position={[5, 0, 0]}
        orbitRadius={40}
        rotateSpeed={0.5}
        rotateOffset={0}
        texture={neptuneTexture}
      />
    </>
  );
}

export default SolarSystem;
