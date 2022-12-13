import { Plane, Program } from 'ogl';


import vertex from 'shaders/home-vertex.glsl';
import fragment from 'shaders/home-fragment.glsl';

export default class {
  constructor({ gl, scene, sizes }) {
    this.gl = gl;
    this.scene = scene;
    this.sizes = sizes

    this.createGeometry();
    this.createProgram()
  }

  createGeometry() {
    this.geometry = new Plane(this.gl);
  }

  createProgram() {
    this.program = new Program(this.gl, {
      fragment,
      vertex
    });
  }


  // Animations
  show() {}

  hide() {}

  // Events

  onResize(e) {}

  onTouchDown({ x, y }) {}

  onTouchMove({ x, y }) {}

  onTouchUp({ x, y }) {}

  onWheel({ pixelX, pixelY }) {}

  // Update

  update() {}

  // Destroy
  destroy() { }
}
