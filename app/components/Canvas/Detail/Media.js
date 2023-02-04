import { Mesh, Program } from 'ogl'
import GSAP from 'gsap'


import fragment from 'shaders/plane-fragment.glsl'
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

    this.createTexture()
    this.createProgram()
    this.createMesh()
    this.createBounds({
      sizes: this.sizes,
    })
  }

  createTexture() {
    const image = this.element.querySelector('.detail__media__image')
    this.texture = window.TEXTURES[image.getAttribute('data-src')]
  }

  createProgram() {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: {
        uAlpha: { value: 0 },
        tMap: { value: this.texture },
				u_saturation: { value: null },
        u_mouseX :{ value: 0 },
        u_mouseY :{ value: 0 }
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
    GSAP.fromTo(this.program.uniforms.uAlpha, {
      value: 0,
    }, {
      value: 1
    })
  }

  hide() {
    GSAP.to(this.program.uniforms.uAlpha, {
      value: 0
    })
  }

  // Events
  onResize(sizes, scroll) {
    this.extra = {
      x: 0,
      y: 0,
    }
    this.createBounds(sizes)
    this.updateX(scroll && scroll.x)
    this.updateY(scroll && scroll.y)
  }

  onMouseMove({ posX, posY }){
    this.program.uniforms.u_mouseX.value = posX * 0.1
    this.program.uniforms.u_mouseY.value = posY * 0.1
  }

  // Loop.
  updateScale() {
    this.height = this.bounds.height / window.innerHeight
    this.width = this.bounds.width / window.innerWidth

    this.mesh.scale.x = this.sizes.width * this.width
    this.mesh.scale.y = this.sizes.height * this.height

  }

  updateX(x = 0) {
    this.x = (this.bounds.left - x) / window.innerWidth
    this.mesh.position.x = -(this.sizes.width / 2) + (this.mesh.scale.x / 2) + (this.x  * this.sizes.width) + this.extra.x
    // this.mesh.position.x += Math.cos((this.mesh.position.y / this.sizes.height) * Math.PI * 0.1) * 10 - 10
  }

  updateY(y = 0) {
    this.y = (this.bounds.top + y) / window.innerHeight
    this.mesh.position.y = (this.sizes.height / 2) - (this.mesh.scale.y / 2) - (this.y  * this.sizes.height) + this.extra.y

    //This improve smooth gallery scroll (idk why)
    this.mesh.scale.z += .1
  }

  updateColor(x){
    x *= -0.05

    this.program.uniforms.u_saturation.value = x 
  }

  update(scroll, distance) {
    this.updateScale()
    this.updateX()
    this.updateY(scroll)
    this.updateColor(distance)
  }

}
