import { Plane, Transform } from 'ogl'

import Media from './Media'

export default class {
  constructor({ gl, scene, sizes }) {
    this.gl = gl
    this.scene = scene
    this.sizes = sizes

    this.group = new Transform()

    
    this.createGeometry()
    this.createMedias()

    this.onResize({
      sizes: this.sizes,
    })

    this.group.setParent(this.scene)

    this.show()

    this.event()
  }

  createGeometry() {
    this.geometry = new Plane(this.gl)
  }

  createMedias() {
    this.mediaElement = document.querySelector('.about__media')

    this.media = new Media({
      element: this.mediaElement,
      geometry: this.geometry,
      gl: this.gl,
      scene: this.group,
      sizes: this.sizes
    })
  }

  event(){
    this.mediaElement.addEventListener('pointermove', e => {
      this.media.onPointerMove(e)
    })
  }

  show() {
    this.media.show()
  }

  async hide(){
    await this.media.hide()

    this.destroy()
  }

  onResize(event){
    this.sizes = event.sizes

    this.bounds = this.mediaElement.getBoundingClientRect()

    this.media.onResize(event)
  }

  update(){
    this.media.update()
  }

  destroy(){
    this.scene.removeChild(this.group)
  }
}
