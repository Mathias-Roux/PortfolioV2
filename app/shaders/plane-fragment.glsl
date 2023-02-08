precision highp float;

uniform float u_saturation;
uniform float uAlpha;
uniform sampler2D tMap;

varying vec2 vUv;

vec3 adjustSaturation(vec3 color, float value) {
  const vec3 luminosityFactor = vec3(0.2126, 0.7152, 0.0722);
  vec3 grayscale = vec3(dot(color, luminosityFactor));

  return mix(grayscale, color, 1.0 + value);
}

void main() {
    vec4 texture = texture2D(tMap, vUv);
    vec3 color = texture.rgb;

    color = adjustSaturation(color, u_saturation);

    gl_FragColor = vec4(color, texture);
    gl_FragColor.a = uAlpha;
}
