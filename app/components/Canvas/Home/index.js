import { Plane, Transform } from 'ogl';
import map from 'lodash/map';
import GSAP from 'gsap'
import Prefix from 'prefix'

import Media from './Media';

export default class {
  constructor({ gl, scene, sizes }) {
    this.id = 'collections';

    this.gl = gl;
    this.scene = scene
    this.sizes = sizes

    this.group = new Transform()

    this.transformPrefix = Prefix('transform')

    this.homeWrapper = document.querySelector('.home__wrapper')
    this.galleryWrapperElement = document.querySelector('.home__gallery__wrapper')

    this.mediasElements = document.querySelectorAll('.home__gallery__card__media')


    this.scroll = {
      current: 0,
      start: 0,
      target: 0,
      lerp: 0.1
    }

    this.createGeometry();
    this.createGallery();

    this.onResize({
      sizes: this.sizes,
    });

    this.group.setParent(this.scene)

    this.show()
  }


  createGeometry() {
    this.geometry = new Plane(this.gl)
  }

  createGallery() {
    this.medias = map(this.mediasElements, (element, index) => {
      return new Media({
        element,
        geometry: this.geometry,
        index,
        gl: this.gl,
        scene: this.group,
        sizes: this.sizes
      });
    });
  }

  show() {
    map(this.medias, (media) => media.show());
  }

  hide(){
    map(this.medias, media => media.hide())
  }

  onResize(event){
    this.sizes = event.sizes

    this.bounds = this.galleryWrapperElement.getBoundingClientRect()

    this.scroll.last = this.scroll.target = 0

    map(this.medias, media => media.onResize(event, this.scroll))

    this.scroll.limit = this.homeWrapper.clientHeight
  }

  onTouchDown({ x }){}

  onTouchMove({ x }){}

  onTouchUp({ x }){}

  onWheel({ pixelY }){
    this.scroll.target += pixelY;
  }

  onChange(index) {}

  update(){
    this.scroll.target = GSAP.utils.clamp(0, this.scroll.limit, this.scroll.target)

    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp)

    if(this.scroll.current < 0.01){
      this.scroll.current = 0
    }

    this.galleryWrapperElement.style[this.transformPrefix] = `translateY(-${this.scroll.current}px)`

    this.scroll.last = this.scroll.current

    console.log(this.scroll.current);

    map(this.medias, media => {
      media.update(this.scroll.current)
    })
  }

  destroy(){
    this.scene.removeChild(this.group)
  }
}
