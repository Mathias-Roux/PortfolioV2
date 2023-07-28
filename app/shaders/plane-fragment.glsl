precision highp float;

uniform sampler2D tMap;
uniform float threshold;
uniform float uAlpha;

varying vec2 vUv;

void main() {
    vec4 texture = texture2D(tMap, vUv);
    float alpha = step(vUv.y, threshold);
    gl_FragColor = vec4(texture.rgb, alpha * texture.a * uAlpha);
}