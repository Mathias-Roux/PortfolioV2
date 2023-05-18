precision highp float;

uniform sampler2D tMap;
uniform float threshold;

varying vec2 vUv;
varying vec2 vDistortedUv;

void main() {
    vec4 texture = texture2D(tMap, vDistortedUv);
    float alpha = step(vUv.x, threshold);
    gl_FragColor = vec4(texture.rgb, alpha * texture.a);
}