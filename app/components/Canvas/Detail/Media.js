import GSAP from 'gsap';
import { Mesh, Program } from 'ogl';

import fragment from 'shaders/plane-fragment.glsl';
import vertex from 'shaders/plane-vertex.glsl';

export default class {
  constructor({ element, geometry, gl, index, scene, sizes }) {
    this.element = element;
    this.geometry = geometry;
    this.gl = gl;
    this.index = index;
    this.scene = scene;
    this.sizes = sizes;

    this.extra = {
      x: 0,
      y: 0,
    };

    this.createTexture();
    this.createProgram();
    this.createMesh();
    this.createBounds({
      sizes: this.sizes,
    });
  }

  createTexture() {
    const image = this.element.querySelector( '.detail__media__image' )
    this.texture = window.TEXTURES[image.getAttribute('data-src')]
  }

  createProgram() {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: {
        uAlpha: { value: 0 },
        tMap: { value: this.texture },
      },
    });
  }

  createMesh() {
    this.mesh = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    });

    this.mesh.setParent(this.scene);
  }

  createBounds({ sizes }) {
    this.sizes = sizes;

    this.bounds = this.element.getBoundingClientRect();

    this.updateScale();
    this.updateY();
    this.updateX()
  }

  /**
   * Animations.
   */
  show() {
    GSAP.fromTo(this.program.uniforms.uAlpha, {
        value: 0,
      },
      {
        value: 1,
      }
    );
  }

  hide() {
    GSAP.to(this.program.uniforms.uAlpha, {
      value: 0,
    });
  }

  /**
   * Events.
   */
  onResize(sizes, scroll, max) {
    this.extra = {
      x: 0,
      y: 0,
    };

    this.max = max

    this.createBounds(sizes);
    this.updateX(scroll && scroll.x);
    this.updateY(scroll && scroll.y);
  }

  /**
   * Loop.
   */
  updateScale() {
    this.height = this.bounds.height / window.innerHeight;
    this.width = this.bounds.width / window.innerWidth;

    this.mesh.scale.x = this.sizes.width * this.width;
    this.mesh.scale.y = this.sizes.height * this.height;
  }

  updateX(x = 0) {
    this.x = (this.bounds.left + x) / window.innerWidth;
    this.mesh.position.x = (-this.sizes.width / 2) + (this.mesh.scale.x / 2) + (this.x  * this.sizes.width) + this.extra.x;
  }

  updateY(y = 0, max) {
    this.max = max
    this.y = (this.bounds.top + y) / window.innerHeight;
    this.initialPosition = (this.sizes.height / 2) - (this.mesh.scale.y / 2) - (((this.bounds.top + 0) / window.innerHeight) * this.sizes.height) + this.extra.y

    const clamper = GSAP.utils.clamp(
      this.initialPosition,
      this.max
    )

    this.mesh.position.y = clamper((this.sizes.height / 2) - (this.mesh.scale.y / 2) - (this.y * this.sizes.height) + this.extra.y)
  }

  update(scroll, max) {
    this.updateY(scroll, max);
  }
}


//CLAMP POSITION Y
//  min = position initiale
//  max = position 1ere mesh
