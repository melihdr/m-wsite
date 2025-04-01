import { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { GPUComputationRenderer } from "three/addons/misc/GPUComputationRenderer";
import particlesVertexShader from "./shaders/particles/vertex.glsl";
import particlesFragmentShader from "./shaders/particles/fragment.glsl";
import gpgpuParticlesShader from "./shaders/gpgpu/particles.glsl";

function Experience() {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: Math.min(window.devicePixelRatio, 2),
  };

  const { gl, sene, camera } = useThree();

  const particlesRef = useRef();

  const particles = {};

  useEffect(() => {
    particles.geometry = new THREE.SphereGeometry(3);
  }, []);

  const baseGeometry = {};
  baseGeometry.instance = new THREE.SphereGeometry(3);
  baseGeometry.count = baseGeometry.instance.attributes.position.count;

  const gpgpu = {};
  gpgpu.size = Math.ceil(Math.sqrt(baseGeometry.count));
  gpgpu.computation = new GPUComputationRenderer(gpgpu.size, gpgpu.size, gl);

  const baseParticlesTexture = gpgpu.computation.createTexture();

  for (let i = 0; i < baseGeometry.count; i++) {
    const i3 = i * 3;
    const i4 = i * 4;

    baseParticlesTexture.image.data[i4 + 0] =
      baseGeometry.instance.attributes.position.array[i3 + 0];
    baseParticlesTexture.image.data[i4 + 1] =
      baseGeometry.instance.attributes.position.array[i3 + 1];
    baseParticlesTexture.image.data[i4 + 2] =
      baseGeometry.instance.attributes.position.array[i3 + 2];
    baseParticlesTexture.image.data[i4 + 3] = 0;
  }
  console.log(baseParticlesTexture.image.data);

  gpgpu.particlesVariable = gpgpu.computation.addVariable(
    "uParticles",
    gpgpuParticlesShader,
    baseParticlesTexture
  );
  gpgpu.computation.setVariableDependencies(gpgpu.particlesVariable, [
    gpgpu.particlesVariable,
  ]);

  gpgpu.computation.init();

  useFrame(() => {
    gpgpu.computation.compute();
  });

  return (
    <>
      <color args={["#1e140a"]} attach="background" />

      <OrbitControls />
      <points>
        <bufferGeometry />
        <shaderMaterial
          attach="material"
          vertexShader={particlesVertexShader}
          fragmentShader={particlesFragmentShader}
          uniforms={{
            uSize: { value: 0.1 },
            uResolution: {
              value: new THREE.Vector2(
                sizes.width * sizes.pixelRatio,
                sizes.height * sizes.pixelRatio
              ),
            },
          }}
        />
      </points>

      <mesh position-x={3}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial
          map={
            gpgpu.computation.getCurrentRenderTarget(gpgpu.particlesVariable)
              .texture
          }
        />
      </mesh>
    </>
  );
}

function App() {
  return (
    <Canvas>
      <Experience />
    </Canvas>
  );
}

export default App;
