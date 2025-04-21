import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";
import Planet from "./Planet";
import * as THREE from "three";

function SolarSystem() {
  const [cameraPos, setCameraPos] = useState([45, 45, 45]);
  const sunRef = useRef();
  const saturnRingRef = useRef();

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

  const mercuryRadius = 2430 * 5;
  const venusRadius = 6051 * 4;
  const earthRadius = 6371 * 4;
  const marsRadius = 3389 * 8;
  const jupiterRadius = 69911 * 0.65;
  const saturnRadius = 58232 * 0.65;
  const uranusRadius = 25362;
  const neptuneRadius = 24622;

  const saturnOffset = Math.random() * Math.PI * 2;

  useFrame((state, deltaTime) => {
    sunRef.current.rotation.y += 0.01;

    saturnRingRef.current.position.x =
      Math.cos(
        state.clock.elapsedTime * 9.7 * speedCoefficient + saturnOffset
      ) * 30;
    saturnRingRef.current.position.z =
      Math.sin(
        state.clock.elapsedTime * 9.7 * speedCoefficient + saturnOffset
      ) * 30;
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

      {/* MERCURY */}
      <Planet
        position={[0.39 * positionCoefficient, 0, 0]}
        orbitRadius={5}
        rotateSpeed={48 * speedCoefficient}
        rotateOffset={Math.random() * Math.PI * 2}
        texture={mercuryTexture}
        sphereRadius={mercuryRadius * radiusCoefficient}
      />

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[5, 5 + 0.1, 48]} />
        <meshBasicMaterial color="white" wireframe side={THREE.DoubleSide} />
      </mesh>

      {/* VENUS */}
      <Planet
        position={[0.72 * positionCoefficient, 0, 0]}
        orbitRadius={10}
        rotateSpeed={35 * speedCoefficient}
        rotateOffset={Math.random() * Math.PI * 2}
        texture={venusTexture}
        sphereRadius={venusRadius * radiusCoefficient}
      />

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[10, 10 + 0.1, 48]} />
        <meshBasicMaterial color="white" wireframe side={THREE.DoubleSide} />
      </mesh>

      {/* EARTH */}
      <Planet
        position={[1 * positionCoefficient, 0, 0]}
        orbitRadius={15}
        rotateSpeed={30 * speedCoefficient}
        rotateOffset={Math.random() * Math.PI * 2}
        texture={earthTexture}
        sphereRadius={earthRadius * radiusCoefficient}
      />

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[15, 15 + 0.1, 48]} />
        <meshBasicMaterial color="white" wireframe side={THREE.DoubleSide} />
      </mesh>

      {/* MARS */}
      <Planet
        position={[1.52 * positionCoefficient, 0, 0]}
        orbitRadius={20}
        rotateSpeed={24 * speedCoefficient}
        rotateOffset={Math.random() * Math.PI * 2}
        texture={marsTexture}
        sphereRadius={marsRadius * radiusCoefficient}
      />

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[20, 20 + 0.1, 48]} />
        <meshBasicMaterial color="white" wireframe side={THREE.DoubleSide} />
      </mesh>

      {/* JUPITER */}
      <Planet
        position={[5.2, 0, 0]}
        orbitRadius={25}
        rotateSpeed={13 * speedCoefficient}
        rotateOffset={Math.random() * Math.PI * 2}
        texture={jupiterTexture}
        sphereRadius={jupiterRadius * radiusCoefficient}
      />

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[25, 25 + 0.1, 48]} />
        <meshBasicMaterial color="white" wireframe side={THREE.DoubleSide} />
      </mesh>

      {/* SATURN */}
      <Planet
        position={[9.6 * positionCoefficient, 0, 0]}
        orbitRadius={30}
        rotateSpeed={9.7 * speedCoefficient}
        rotateOffset={saturnOffset}
        texture={saturnTexture}
        sphereRadius={saturnRadius * radiusCoefficient}
      />

      <mesh ref={saturnRingRef} rotation={[-Math.PI / 2.4, 0, 0]}>
        <ringGeometry
          args={[
            saturnRadius * radiusCoefficient + 0.4,
            saturnRadius * radiusCoefficient + 0.4 + 0.3,
          ]}
        />
        <meshBasicMaterial color={"#b5651d"} side={THREE.DoubleSide} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[30, 30 + 0.1, 48]} />
        <meshBasicMaterial color="white" wireframe side={THREE.DoubleSide} />
      </mesh>

      {/* URANUS */}
      <Planet
        position={[19.2 * positionCoefficient, 0, 0]}
        orbitRadius={35}
        rotateSpeed={6.8 * speedCoefficient}
        rotateOffset={Math.random() * Math.PI * 2}
        texture={uranusTexture}
        sphereRadius={uranusRadius * radiusCoefficient}
      />

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[35, 35 + 0.1, 48]} />
        <meshBasicMaterial color="white" wireframe side={THREE.DoubleSide} />
      </mesh>

      {/* NEPTUNE */}
      <Planet
        position={[30 * positionCoefficient, 0, 0]}
        orbitRadius={40}
        rotateSpeed={5.4 * speedCoefficient}
        rotateOffset={Math.random() * Math.PI * 2}
        texture={neptuneTexture}
        sphereRadius={neptuneRadius * radiusCoefficient}
      />

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[40, 40 + 0.1, 48]} />
        <meshBasicMaterial color="white" wireframe side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

export default SolarSystem;
