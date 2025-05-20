import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import coffe_smoke_vertex_shader from "./shaders/vertex.glsl";
import coffe_smoke_fragment_shader from "./shaders/fragment.glsl";
import { useLoader } from "@react-three/fiber";
import perlin_image from "./perlin.png";

function CoffeSmoke() {
  const { scene } = useThree();

  useEffect(() => {
    // change background
    scene.background = new THREE.Color("black");
  }, [scene]);

  /**
   * smoke
   */

  // geometry
  const smoke_geometry = new THREE.PlaneGeometry(1, 1, 16, 64);
  smoke_geometry.translate(0, 0.5, 0);
  smoke_geometry.scale(1.5, 6, 1.5);

  // perlin texture
  const perlin_texture = useLoader(THREE.TextureLoader, perlin_image);
  perlin_texture.wrapS = THREE.RepeatWrapping; // horizontally repeating
  perlin_texture.wrapT = THREE.RepeatWrapping; // vertically repeating

  // material
  const smoke_material = new THREE.ShaderMaterial({
    toneMapped: false,
    // wireframe: true,
    vertexShader: coffe_smoke_vertex_shader,
    fragmentShader: coffe_smoke_fragment_shader,
    side: THREE.DoubleSide,
    uniforms: {
      uTime: new THREE.Uniform(0),
      uPerlinTexture: new THREE.Uniform(perlin_texture),
    },
    transparent: true,
    depthWrite: false,
  });

  // smoke ref
  const smoke_ref = useRef();

  // tick
  useFrame((state, delta) => {
    const elapsedTime = state.clock.elapsedTime;

    // update smoke
    smoke_material.uniforms.uTime.value = elapsedTime;
  });

  return (
    <>
      <mesh
        ref={smoke_ref}
        geometry={smoke_geometry}
        material={smoke_material}
      ></mesh>
    </>
  );
}

export default CoffeSmoke;
