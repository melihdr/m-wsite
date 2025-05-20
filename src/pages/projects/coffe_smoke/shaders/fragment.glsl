varying vec2 vUv;
uniform sampler2D uPerlinTexture;
uniform float uTime;

void main() {

  // scale and animate
  vec2 smoke_uv = vUv;
  smoke_uv.x *= 0.5;
  smoke_uv.y *= 0.3;
  smoke_uv.y += uTime * 0.03;

  
  // smoke
  float smoke = texture(uPerlinTexture, smoke_uv).r;

  // remap
  smoke = smoothstep(0.4, 1.0, smoke);

  // edges
  smoke *= smoothstep(0.0, 0.1, vUv.x);
  smoke *= smoothstep(1.0, 0.9, vUv.x);
  smoke *= smoothstep(0.0, 0.1, vUv.y);
  smoke *= smoothstep(1.0, 0.4, vUv.y);

  // final color
  gl_FragColor = vec4(1.0, 1.0, 1.0, smoke);


  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}