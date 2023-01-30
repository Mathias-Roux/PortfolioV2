precision highp float;

uniform float u_contrast;
uniform float uAlpha;
uniform sampler2D tMap;

varying vec2 vUv;

vec3 adjustContrast(vec3 color, float value) {
  return 0.5 + value * (color - 0.5);
}

void main() {
    vec4 texture = texture2D(tMap, vUv);
    vec3 color = texture.rgb;

    color = adjustContrast(color, u_contrast);

    gl_FragColor = vec4(color, texture);
    gl_FragColor.a = uAlpha;
}
