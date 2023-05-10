import { Plane, Transform } from 'ogl'
import map from 'lodash/map'

import Media from './Media'

export default class {
  constructor({ gl, scene, sizes }) {
    this.gl = gl
    this.scene = scene
    this.sizes = sizes

    this.group = new Transform()
    
    this.galleryWrapperElement = document.querySelector('.detail__gallery__wrapper')

    this.scroll = {
      current: 0,
      start: 0,
      target: 0,
      lerp: 0.1
    }

    this.createGeometry()
    this.createMedias()

    this.onResize({
      sizes: this.sizes,
    })

    this.group.setParent(this.scene)

    this.show()
  }

  createGeometry() {
    this.geometry = new Plane(this.gl)
  }

  createMedias() {
    this.mediasElements = document.querySelectorAll('.detail__media')

    this.medias = map(this.mediasElements, (element, index) => {
      return new Media({
        element,
        geometry: this.geometry,
        index,
        gl: this.gl,
        scene: this.group,
        sizes: this.sizes
      })
    })
  }

  show() {
    map(this.medias, media => media.show())
  }

  hide(){
    map(this.medias, media => media.hide())
  }

  onResize(event){
    this.sizes = event.sizes

    this.bounds = this.galleryWrapperElement.getBoundingClientRect()

    this.scroll.last = this.scroll.target = 0

    map(this.medias, media => media.onResize(event, this.scroll))

    this.scroll.limit = this.bounds.height - this.medias[0].element.clientHeight
  }

  onTouchDown(){
    this.scroll.last = this.scroll.current
  }

  onTouchMove({ y }){
    const distance = y.start - y.end

    this.scroll.target = this.scroll.last + distance
  }

  onTouchUp(){}

  onWheel({ pixelY }){
    this.scroll.target += pixelY
  }

  update(){
    this.scroll.target = Math.min(Math.max(this.scroll.target, 0), this.scroll.limit);

    this.scroll.current = this.scroll.current + (this.scroll.target - this.scroll.current) * 0.1

    if (this.scroll.current < 0.01) {
      this.scroll.current = 0
    }

    map(this.medias, media => media.update(this.scroll.current))
  }

  destroy(){
    this.scene.removeChild(this.group)
  }
}
