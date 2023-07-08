import { Plane, Transform, Program, Vec2, Flowmap, Triangle } from 'ogl'

import fragment from '../../../shaders/about-fragment.glsl'
import vertex from '../../../shaders/plane-vertex.glsl'

import Media from './Media'

export default class {
  constructor({ gl, scene, sizes }) {
    this.gl = gl
    this.scene = scene
    this.sizes = sizes

    this.group = new Transform()

    this.createFlowmap()
    this.createGeometry()
    this.createProgram()
    this.createMedias()

    this.onResize({
      sizes: this.sizes,
    })

    this.group.setParent(this.scene)

    this.show()

    this.aspect = 1;
    this.mouse = new Vec2(-1);
    this.velocity = new Vec2();


    this.event()
  }

  createGeometry() {
    this.geometries = {
      plane: new Plane(this.gl),
      triangle: new Triangle(this.gl),
    }
  }

  createFlowmap(){
    this.flowmap = new Flowmap(this.gl);
  }

  createMedias() {
    this.mediaElement = document.querySelector('.about__media')

    this.media = new Media({
      element: this.mediaElement,
      geometry: this.geometries.plane,
      gl: this.gl,
      scene: this.group,
      sizes: this.sizes
    })
  }

  createProgram(){
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: {
        tFlow: this.flowmap.uniform
      }
    })
  }

  onPointerMove(e){
    this.lastTime;
    this.lastMouse = new Vec2();

    if (e.changedTouches && e.changedTouches.length) {
      e.x = e.changedTouches[0].pageX;
      e.y = e.changedTouches[0].pageY;
    }
    if (e.x === undefined) {
      e.x = e.pageX;
      e.y = e.pageY;
    }

    // Get mouse value in 0 to 1 range, with y flipped
    this.mouse.set(
      e.x / this.gl.renderer.width,
      1.0 - e.y / this.gl.renderer.height
    );

    // Calculate velocity
    if (!this.lastTime) {
      // First frame
      this.lastTime = performance.now();
      this.lastMouse.set(e.x, e.y);
    }

    const deltaX = e.x - this.lastMouse.x;
    const deltaY = e.y - this.lastMouse.y;

    this.lastMouse.set(e.x, e.y);

    let time = performance.now();

    // Avoid dividing by 0
    let delta = Math.max(14, time - this.lastTime);
    this.lastTime = time;

    this.velocity.x = deltaX / delta;
    this.velocity.y = deltaY / delta;

    // Flag update to prevent hanging velocity values when not moving
    this.velocity.needsUpdate = true;
  }

  // Loop.
  updateMouse(){
    if (!this.velocity.needsUpdate) {
      this.mouse.set(-1);
      this.velocity.set(0);
    }
    this.velocity.needsUpdate = false;

    // Update flowmap inputs
    this.flowmap.aspect = this.aspect;
    this.flowmap.mouse.copy(this.mouse);

    // Ease velocity input, slower when fading out
    this.flowmap.velocity.lerp(this.velocity, this.velocity.len() ? 0.5 : 0.1);

    this.flowmap.update();
  }

  event(){
    window.addEventListener('pointermove', e => {
      this.onPointerMove(e)
    })
  }

  show() {
    this.media.show()
  }

  hide(){
    this.media.hide()
  }

  onResize(event){
    this.sizes = event.sizes

    this.bounds = this.mediaElement.getBoundingClientRect()

    this.aspect = window.innerWidth / window.innerHeight

    this.media.onResize(event)
  }

  update(){
    this.media.update()
    this.updateMouse()
  }

  destroy(){
    this.scene.removeChild(this.group)
  }
}
