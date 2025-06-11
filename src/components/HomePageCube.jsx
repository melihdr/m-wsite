import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import halftoneVertexShader from "../shaders/halftone/vertex.glsl";
import halftoneFragmentShader from "../shaders/halftone/fragment.glsl";
import { useThree } from "@react-three/fiber";

function HomePageCube() {
  const { camera } = useThree();

  camera.position.set(0, 0, 2);

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: Math.min(window.devicePixelRatio, 2),
  };

  const materialParameters = {};
  materialParameters.color = "#ff794d";
  materialParameters.shadowColor = "#8e19b8";
  materialParameters.lightColor = "#e5ffe0";

  const material = new THREE.ShaderMaterial({
    vertexShader: halftoneVertexShader,
    fragmentShader: halftoneFragmentShader,
    uniforms: {
      uColor: new THREE.Uniform(new THREE.Color(materialParameters.color)),
      uResolution: new THREE.Uniform(
        new THREE.Vector2(
          sizes.width * sizes.pixelRatio,
          sizes.height * sizes.pixelRatio
        )
      ),
      uShadowRepetitions: new THREE.Uniform(100),
      uShadowColor: new THREE.Uniform(
        new THREE.Color(materialParameters.shadowColor)
      ),
      uLightRepetitions: new THREE.Uniform(130),
      uLightColor: new THREE.Uniform(
        new THREE.Color(materialParameters.lightColor)
      ),
    },
  });

  const torusKnot = useRef();

  useFrame((state, delta) => {
    const elapsedTime = state.clock.elapsedTime;
    if (torusKnot.current) {
      torusKnot.current.rotation.x = -elapsedTime * 0.1;
      torusKnot.current.rotation.y = elapsedTime * 0.2;
    }
  });

  window.addEventListener("resize", () => {
    material.uniforms.uResolution.value.set(
      sizes.width * sizes.pixelRatio,
      sizes.height * sizes.pixelRatio
    );
  });

  return (
    <>
      <color args={["#0D1B2A"]} attach="background" />

      <mesh ref={torusKnot}>
        <torusKnotGeometry args={[0.6, 0.25, 128, 32]} />
        <shaderMaterial
          vertexShader={material.vertexShader}
          fragmentShader={material.fragmentShader}
          uniforms={material.uniforms}
        />
      </mesh>
    </>
  );
}

export default HomePageCube;
