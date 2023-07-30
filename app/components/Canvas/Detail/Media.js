import { Mesh, Program } from 'ogl'
import anime from 'animejs';

import fragment from '../../../shaders/plane-fragment.glsl'
import vertex from '../../../shaders/plane-vertex.glsl'

export default class Media {
  constructor({ element, geometry, gl, index, scene, sizes }) {
    this.element = element
    this.gl = gl
    this.geometry = geometry
    this.scene = scene
    this.index = index
    this.sizes = sizes

    this.extra = {
      // Math.random() * (max - min) + min
      xPos: Math.random() * (0.1 - (-0.1)) + (-0.1),
      yPos: Math.random() * (0.1 - (-0.1)) + (-0.1),
      zPos: Math.random() * (0 - (-0.5)) + (-0.5),
      yPosScroll: Math.random() * (1.1 - 1.07) + 1.07,
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
        threshold: { value: -0.1 },
        tMap: { value: this.texture },
        uAlpha: { value: 1 },
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

    this.mesh.position.z = this.extra.zPos
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
    return new Promise(resolve => {
      anime({
        targets: this.program.uniforms.uAlpha,
        value: 0,
        easing: 'easeOutQuint',
        duration: 700,
        complete: () => {
          resolve()
        }
      })
    })
  }

  // Events
  onResize(sizes, scroll) {
    this.createBounds(sizes)
    this.updateX(scroll && scroll.x)
    this.updateY(scroll && scroll.y)
  }

  onMouseMove({ posX, posY }){
    this.program.uniforms.u_mouseX.value = posX * 0.02
    this.program.uniforms.u_mouseY.value = posY * 0.02
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
    this.mesh.position.x = -(this.sizes.width / 2) + (this.mesh.scale.x / 2) + (this.x  * this.sizes.width) + this.extra.xPos
  }

  updateY(y = 0) {
    this.y = ((this.bounds.top - (y * this.extra.yPosScroll)) / window.innerHeight)
    this.mesh.position.y = (this.sizes.height / 2) - (this.mesh.scale.y / 2) - (this.y * this.sizes.height) + this.extra.yPos
  }

  update(scroll) {
    this.updateScale()
    this.updateX()
    this.updateY(scroll)
  }
}
