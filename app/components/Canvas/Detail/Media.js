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

    if (this.mesh.id === 0) {
      this.firstMeshPositionY = this.mesh.position.y
    }
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
  onResize(sizes, scroll) {
    this.extra = {
      x: 0,
      y: 0,
    };

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

  updateY(y = 0) {
    this.y = (this.bounds.top + y) / window.innerHeight;
    this.base = -((-this.sizes.height / 2) + (this.mesh.scale.y / 2) + (this.y * this.sizes.height) + this.extra.y)

    this.positionY = GSAP.utils.clamp(
      this.base,
      this.firstMeshPositionY,
      this.positionY
    )

    this.mesh.position.y = this.positionY
  }

  update(scroll) {
    this.updateY(scroll);
  }
}
