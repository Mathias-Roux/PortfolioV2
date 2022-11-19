import { Plane, Transform } from 'ogl';
import map from 'lodash/map';

import Media from './Media';

export default class {
  constructor({ gl, scene, sizes }) {
    this.gl = gl;
    this.sizes = sizes

    this.group = new Transform();

    this.galleryWrapper = document.querySelector('.home__gallery__wrapper')
    this.medias = document.querySelectorAll('.home__gallery__card__media')

    this.scroll = {
      current: 0,
      start: 0,
      target: 0,
      lerp: 0.1,
      velocity: 1
    }

    this.createGeometry();
    this.createMedias();

    this.onResize({
      sizes: this.sizes,
    });

    this.group.setParent(scene);

    this.show()
  }


  createGeometry() {
    this.geometry = new Plane(this.gl);
  }

  createMedias() {
    this.mediasElements = map(this.medias, (element, index) => {
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

  show(){
    map(this.mediasElements, media => media.show())
  }

  hide(){
    map(this.mediasElements, media => media.hide())
  }

  onResize(event){
    this.sizes = event.sizes

    this.bounds = this.galleryWrapper.getBoundingClientRect()

    this.scroll.last = this.scroll.target = 0

    map(this.mediasElements, media => media.onResize(event, this.scroll))

    this.scroll.limit = this.bounds.width - this.mediasElements[0].element.clientWidth
  }

  onTouchDown(event){
  }

  onTouchMove(event){
  }

  onTouchUp(event){
  }

  onWheel({ pixelY }){
  }

  update(scroll){
    map(this.mediasElements, media => media.update(scroll))
  }

  destroy(){
    map(this.mediasElements, media => media.destroy())
  }
}
