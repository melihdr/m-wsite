import React, { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls, button } from "leva";
import * as THREE from "three";
import vertexShader from "./shaders/particles/vertex.glsl";
import fragmentShader from "./shaders/particles/fragment.glsl";
import { GPUComputationRenderer } from "three/addons/misc/GPUComputationRenderer.js";
import gpgpuParticlesShader from "./shaders/gpgpu/particles.glsl";
import { useGLTF } from "@react-three/drei";

function Particles() {
  const { size, viewport, gl, camera } = useThree();

  const { uSize } = useControls({
    uSize: { value: 0.03, min: 0, max: 1, step: 0.001, label: "size" },
  });

  const { scene } = useGLTF("/models/gpgpu/model.glb");

  // base geometry
  const baseGeometry = {};
  // baseGeometry.instance = new THREE.SphereGeometry(3);
  baseGeometry.instance = scene.children[0].geometry;
  baseGeometry.count = baseGeometry.instance.attributes.position.count;

  // gpgpgu
  const gpgpu = {};
  gpgpu.size = Math.ceil(Math.sqrt(baseGeometry.count));
  gpgpu.computation = new GPUComputationRenderer(gpgpu.size, gpgpu.size, gl);

  // base particles
  const baseParticlesTexture = gpgpu.computation.createTexture();
  // console.log(baseParticlesTexture.image.data); // each set of 4 values are thre r, g, b, a channels of one pixel
  for (let i = 0; i < baseGeometry.count; i++) {
    const i3 = i * 3;
    const i4 = i * 4;

    // position based on geometry
    baseParticlesTexture.image.data[i4 + 0] =
      baseGeometry.instance.attributes.position.array[i3 + 0];
    baseParticlesTexture.image.data[i4 + 1] =
      baseGeometry.instance.attributes.position.array[i3 + 1];
    baseParticlesTexture.image.data[i4 + 2] =
      baseGeometry.instance.attributes.position.array[i3 + 2];
    baseParticlesTexture.image.data[i4 + 3] = Math.random();
  }

  // particles variable
  gpgpu.particlesVariable = gpgpu.computation.addVariable(
    "uParticles",
    gpgpuParticlesShader,
    baseParticlesTexture
  );
  gpgpu.computation.setVariableDependencies(gpgpu.particlesVariable, [
    gpgpu.particlesVariable,
  ]);

  // tweaks
  const { uFlowFieldInfluence, uFlowFieldStrength, uFlowFieldFrequency } =
    useControls({
      uFlowFieldInfluence: {
        value: 0.5,
        min: 0,
        max: 1,
        step: 0.001,
        label: "influence",
      },
      uFlowFieldStrength: {
        value: 2,
        min: 0,
        max: 10,
        step: 0.001,
        label: "strength",
      },
      uFlowFieldFrequency: {
        value: 0.5,
        min: 0,
        max: 1,
        step: 0.001,
        label: "frequency",
      },
    });

  // uniforms
  gpgpu.particlesVariable.material.uniforms.uTime = new THREE.Uniform(0);
  gpgpu.particlesVariable.material.uniforms.uBase = new THREE.Uniform(
    baseParticlesTexture
  );
  gpgpu.particlesVariable.material.uniforms.uDeltaTime = new THREE.Uniform(0);
  gpgpu.particlesVariable.material.uniforms.uFlowFieldInfluence =
    new THREE.Uniform(uFlowFieldInfluence);
  gpgpu.particlesVariable.material.uniforms.uFlowFieldStrength =
    new THREE.Uniform(uFlowFieldStrength);
  gpgpu.particlesVariable.material.uniforms.uFlowFieldFrequency =
    new THREE.Uniform(uFlowFieldFrequency);

  // init
  gpgpu.computation.init();

  // debug
  gpgpu.debug = useRef();

  // geometry
  const particles = {};

  const particlesUvArray = new Float32Array(baseGeometry.count * 2);
  const sizesArray = new Float32Array(baseGeometry.count);

  for (let y = 0; y < gpgpu.size; y++) {
    for (let x = 0; x < gpgpu.size; x++) {
      const i = y * gpgpu.size + x;
      const i2 = i * 2;

      // particles uv
      const uvX = (x + 0.5) / gpgpu.size;
      const uvY = (y + 0.5) / gpgpu.size;

      particlesUvArray[i2 + 0] = uvX;
      particlesUvArray[i2 + 1] = uvY;

      // size
      sizesArray[i] = Math.random();
    }
  }

  particles.geometry = new THREE.BufferGeometry();
  particles.geometry.setDrawRange(0, baseGeometry.count);
  particles.geometry.setAttribute(
    "aParticlesUv",
    new THREE.BufferAttribute(particlesUvArray, 2)
  );
  particles.geometry.setAttribute(
    "aColor",
    baseGeometry.instance.attributes.color
  );
  particles.geometry.setAttribute(
    "aSize",
    new THREE.BufferAttribute(sizesArray, 1)
  );

  particles.material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uSize: { value: uSize },
          uResolution: {
            value: new THREE.Vector2(
              size.width * viewport.dpr,
              size.height * viewport.dpr
            ),
          },
          uParticlesTexture: new THREE.Uniform(),
        },
      }),
    [size, viewport, uSize]
  );

  useFrame(({ size, clock }, deltaTime) => {
    particles.material.uniforms.uResolution.value.set(
      size.width * window.devicePixelRatio,
      size.height * window.devicePixelRatio
    );

    // gpgpu update
    gpgpu.particlesVariable.material.uniforms.uTime.value = clock.elapsedTime;
    gpgpu.particlesVariable.material.uniforms.uDeltaTime.value = deltaTime;
    gpgpu.computation.compute();
    particles.material.uniforms.uParticlesTexture.value =
      gpgpu.computation.getCurrentRenderTarget(gpgpu.particlesVariable).texture;
  });

  return (
    <>
      <mesh ref={gpgpu.debug} position={[3, 0, 0]}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial
          visible={false}
          toneMapped={false}
          map={
            gpgpu.computation.getCurrentRenderTarget(gpgpu.particlesVariable)
              .texture
          }
        />
      </mesh>
      ;
      <points geometry={particles.geometry} material={particles.material} />;
    </>
  );
}

export default Particles;
