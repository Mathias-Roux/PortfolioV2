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
    vec2 uv = (vUv - textureCenter) + 0.5;

    vec3 flow = texture2D(tFlow, vUv).rgb;

    uv += flow.xy * 0.0005;
    vec3 tex = texture2D(tMap, uv).rgb;
    // float gray = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
    // vec3 grayscale = vec3(gray);
    
    gl_FragColor.rgb = tex;
    gl_FragColor.a = 1.0;
}