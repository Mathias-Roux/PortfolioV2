precision highp float;

uniform sampler2D tMap;
uniform sampler2D tFlow;
// uniform float threshold;

varying vec2 vUv;

void main() {
    // vec4 texture = texture2D(tMap, vUv);
    // float alpha = step(vUv.y, threshold);
    // gl_FragColor = vec4(texture.rgb, alpha * texture.a);

    vec2 textureCenter = vec2(0.5, 0.5);

    vec3 flow = texture2D(tFlow, vUv).rgb;

    vec2 uv = (vUv - textureCenter) + 0.5;
    uv += flow.xy * 0.002;
    vec3 tex = texture2D(tMap, uv).rgb;

    gl_FragColor.rgb = tex;
    gl_FragColor.a = 1.0;
}