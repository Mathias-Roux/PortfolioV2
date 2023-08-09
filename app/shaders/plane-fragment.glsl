precision highp float;

uniform sampler2D tMap;
uniform float threshold;
uniform float uAlpha;
uniform float wipe;

varying vec2 vUv;

void main() {
    vec4 texture = texture2D(tMap, vec2(vUv.x + wipe, vUv.y));
    float alpha = step(vUv.x, threshold);
    gl_FragColor = vec4(texture.rgb, alpha * texture.a * uAlpha);
}