precision highp float;

uniform float uAlpha;
uniform sampler2D tMap;

varying vec2 vUv;

void main() {
  gl_FragColor.rgb = texture2D(tMap, vUv).rgb;
  gl_FragColor.a = uAlpha;
}
