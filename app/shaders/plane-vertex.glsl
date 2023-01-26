attribute vec4 position;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying highp vec2 vUv;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * position;
  
  vUv = uv;
}
