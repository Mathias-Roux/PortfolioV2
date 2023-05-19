attribute vec3 position;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform float time;
uniform float amplitude;
uniform float frequency;
uniform float waveSpeed;
uniform float waveHeight;
uniform float distortion;

varying vec2 vUv;
varying vec2 vDistortedUv;

void main() {
    vUv = uv;

    vec3 displacedPosition = position;

    float waveX = position.x + time * waveSpeed * frequency;
    float waveY = position.y + time * waveSpeed * frequency;

    displacedPosition.z += sin(waveX + waveY) * amplitude * waveHeight;
    
    vDistortedUv = vec2(
        vUv.x + sin(waveX + waveY) * amplitude * 0.0,
        vUv.y + cos(waveX + waveY) * amplitude * 0.0
    );

    gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
}