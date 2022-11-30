import { Transform } from 'ogl'
import map  from "lodash/map"
import GSAP from 'gsap'

import Media from './Media'

export default class Gallery{
  constructor({ element, geometry, index, gl, scene, sizes }) {
    this.element = element
    this.elementWrapper = element.querySelector('.detail__gallery__wrapper')

    this.geometry = geometry
    this.index= index
    this.gl = gl
    this.scene = scene
    this.sizes = sizes

    this.group = new Transform()

    this.scroll = {
      current: 0,
      target: 0,
      start: 0,
      lerp: 0.1,
      velocity: 0.5
    }

    this.createMedias()

    this.onResize({
      sizes: this.sizes,
    });

    this.group.setParent(this.scene)
  }

  createMedias(){
    this.mediasElements = this.element.querySelectorAll('.detail__media')

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

  onResize(event){
    this.bounds = this.elementWrapper.getBoundingClientRect()

    this.sizes = event.sizes

    this.width = this.bounds.width / window.innerWidth * this.sizes.width

    this.scroll.current = this.scroll.target = 0

    map(this.medias, media => media.onResize(event, this.scroll.current, this.width))
  }

  show(){
    map(this.medias, media => media.show())
  }

  hide(){
    map(this.medias, media => media.hide())
  }

  onTouchDown({ x, y }){}

  onTouchMove({ x, y }){}

  onTouchUp({ x, y }){}


  update(scroll){
    const y = scroll.current / window.innerHeight

    this.group.position.y = y * this.sizes.height
  }


  destroy(){
    this.scene.removeChild(this.group)
  }
}
