attribute vec3 position;
attribute vec2 uv;

uniform float u_mouseX;
uniform float u_mouseY;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position + vec3(u_mouseX, u_mouseY, 0.0), 1.0);
}