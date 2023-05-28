import { Mesh, Program, Vec2, Flowmap} from 'ogl'
import anime from 'animejs';

import fragment from 'shaders/about-fragment.glsl'
import vertex from 'shaders/plane-vertex.glsl'

export default class Media {
  constructor({ element, geometry, gl, index, scene, sizes }) {
    this.element = element
    this.gl = gl
    this.geometry = geometry
    this.scene = scene
    this.index = index
    this.sizes = sizes

    this.extra = {
      x: 0,
      y: 0,
    }

    this.aspect = 1;
    this.mouse = new Vec2(-1);
    this.velocity = new Vec2();

    this.createFlowmap()
    this.createTexture()
    this.createProgram()
    this.createMesh()
    this.createBounds({
      sizes: this.sizes,
    })
  }

  createFlowmap(){
    this.flowmap = new Flowmap(this.gl);
  }

  createTexture() {
    const image = this.element.querySelector('.about__media__image')
    this.texture = window.TEXTURES[image.getAttribute('data-src')]
  }

  createProgram() {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: {
        threshold: { value: -0.1 },
        tMap: { value: this.texture },
        tFlow: this.flowmap.uniform
      }
    })
  }

  createMesh() {
    this.mesh = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    })
    this.mesh.setParent(this.scene)
  }

  createBounds({ sizes }) {
    this.sizes = sizes
    this.bounds = this.element.getBoundingClientRect()
    this.updateScale()
    this.updateX()
    this.updateY()
  }

  // Animations
  show() {  
    anime({
      targets: this.program.uniforms.threshold,
      value: 1,
      duration: 1100,
      easing: 'easeOutQuint'
    })
  }

  hide() {
    anime({
      targets: this.program.uniforms.threshold,
      value: -0.1,
      easing: 'easeOutQuint',
      duration: 800
    })
  }

  // Events
  onResize(sizes) {
    this.extra = {
      x: 0,
      y: 0,
    }
    this.aspect = window.innerWidth / window.innerHeight
    this.createBounds(sizes)
    this.updateX()
    this.updateY()
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
    this.mouse.set(e.x / window.innerWidth, 1.0 - e.y / window.innerHeight);

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

  updateScale() {
    this.height = this.bounds.height / window.innerHeight
    this.width = this.bounds.width / window.innerWidth

    this.mesh.scale.x = this.sizes.width * this.width
    this.mesh.scale.y = this.sizes.height * this.height
  }

  updateX(x = 0) {
    this.x = (this.bounds.left - x) / window.innerWidth
    this.mesh.position.x = -(this.sizes.width / 2) + (this.mesh.scale.x / 2) + (this.x  * this.sizes.width) + this.extra.x
  }

  updateY(y = 0) {
    this.y = (this.bounds.top - y) / window.innerHeight
    this.mesh.position.y = (this.sizes.height / 2) - (this.mesh.scale.y / 2) - (this.y  * this.sizes.height) + this.extra.y
  }

  update() {
    this.updateScale()
    this.updateX()
    this.updateY()
    this.updateMouse()
  }
}
