import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";
import Planet from "./Planet";

function SolarSystem() {
  const [cameraPos, setCameraPos] = useState([45, 45, 45]);
  const sunRef = useRef();

  let speedCoefficient = 0.01;
  let radiusCoefficient = (1 / 6371) * 0.3;
  let positionCoefficient = 1.5;

  const mercuryTexture = useTexture("./images/planets/2k_mercury.jpg");
  const venusTexture = useTexture("./images/planets/2k_venus_surface.jpg");
  const earthTexture = useTexture("./images/planets/2k_earth_daymap.jpg");
  const marsTexture = useTexture("./images/planets/2k_mars.jpg");
  const jupiterTexture = useTexture("./images/planets/2k_jupiter.jpg");
  const saturnTexture = useTexture("./images/planets/2k_saturn.jpg");
  const uranusTexture = useTexture("./images/planets/2k_uranus.jpg");
  const neptuneTexture = useTexture("./images/planets/2k_neptune.jpg");
  const sunTexture = useTexture("./images/planets/2k_sun.jpg");

  const mercuryRadius = 2430;
  const venusRadius = 6051;
  const earthRadius = 6371;
  const marsRadius = 3389;
  const jupiterRadius = 69911 * 0.65;
  const saturnRadius = 58232 * 0.65;
  const uranusRadius = 25362;
  const neptuneRadius = 24622;

  useFrame((state, deltaTime) => {
    sunRef.current.rotation.y += 0.01;
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={cameraPos} />

      <color args={["black"]} attach="background" />
      <OrbitControls />

      <ambientLight intensity={0.3} />
      <pointLight
        position={[0, 0, 0]}
        intensity={1400}
        distance={100}
        color="orange"
        castShadow
      />

      <mesh ref={sunRef}>
        <sphereGeometry />
        <meshStandardMaterial
          emissive="yellow"
          emissiveMap={sunTexture}
          emissiveIntensity={1.5}
        />
      </mesh>

      <Planet
        position={[0.39 * positionCoefficient, 0, 0]}
        orbitRadius={5}
        rotateSpeed={48 * speedCoefficient}
        rotateOffset={Math.random() * Math.PI * 2}
        texture={mercuryTexture}
        sphereRadius={mercuryRadius * radiusCoefficient}
      />
      <Planet
        position={[0.72 * positionCoefficient, 0, 0]}
        orbitRadius={10}
        rotateSpeed={35 * speedCoefficient}
        rotateOffset={Math.random() * Math.PI * 2}
        texture={venusTexture}
        sphereRadius={venusRadius * radiusCoefficient}
      />
      <Planet
        position={[1 * positionCoefficient, 0, 0]}
        orbitRadius={15}
        rotateSpeed={30 * speedCoefficient}
        rotateOffset={Math.random() * Math.PI * 2}
        texture={earthTexture}
        sphereRadius={earthRadius * radiusCoefficient}
      />
      <Planet
        position={[1.52 * positionCoefficient, 0, 0]}
        orbitRadius={20}
        rotateSpeed={24 * speedCoefficient}
        rotateOffset={Math.random() * Math.PI * 2}
        texture={marsTexture}
        sphereRadius={marsRadius * radiusCoefficient}
      />
      <Planet
        position={[5.2, 0, 0]}
        orbitRadius={25}
        rotateSpeed={13 * speedCoefficient}
        rotateOffset={Math.random() * Math.PI * 2}
        texture={jupiterTexture}
        sphereRadius={jupiterRadius * radiusCoefficient}
      />
      <Planet
        position={[9.6 * positionCoefficient, 0, 0]}
        orbitRadius={30}
        rotateSpeed={9.7 * speedCoefficient}
        rotateOffset={Math.random() * Math.PI * 2}
        texture={saturnTexture}
        sphereRadius={saturnRadius * radiusCoefficient}
      />
      <Planet
        position={[19.2 * positionCoefficient, 0, 0]}
        orbitRadius={35}
        rotateSpeed={6.8 * speedCoefficient}
        rotateOffset={Math.random() * Math.PI * 2}
        texture={uranusTexture}
        sphereRadius={uranusRadius * radiusCoefficient}
      />
      <Planet
        position={[30 * positionCoefficient, 0, 0]}
        orbitRadius={40}
        rotateSpeed={5.4 * speedCoefficient}
        rotateOffset={Math.random() * Math.PI * 2}
        texture={neptuneTexture}
        sphereRadius={neptuneRadius * radiusCoefficient}
      />
    </>
  );
}

export default SolarSystem;
