precision highp float;

uniform sampler2D tMap;
uniform sampler2D tFlow;
uniform float threshold;

varying vec2 vUv;

void main() {
    vec2 textureCenter = vec2(0.5, 0.5);
    vec2 uv = (vUv - textureCenter) + 0.5;

    vec3 flow = texture2D(tFlow, vUv).rgb;

    uv += flow.xy * 0.0005;
    vec4 tex = texture2D(tMap, uv);
    float alpha = step(vUv.y, threshold);
    
    gl_FragColor = vec4(tex.rgb, alpha * tex.a);
}