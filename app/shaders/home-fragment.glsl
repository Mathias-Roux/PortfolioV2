precision highp float;

uniform float uAlpha;

varying vec4 vPosition;
varying vec2 vUv;

void main() {
  gl_FragColor.a = (1.0 - abs(vPosition.y * 0.5)) * uAlpha;
}
