precision highp float;

uniform float uAlpha;
uniform sampler2D tMap;

varying vec2 vUv;

void main() {
  gl_FragColor = texture2D(tMap, vUv);
  gl_FragColor.a = uAlpha;
}
