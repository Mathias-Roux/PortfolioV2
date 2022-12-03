import { Plane, Transform } from 'ogl';
import map from 'lodash/map';

import Media from './Media';

export default class {
  constructor({ gl, scene, sizes }) {
    this.gl = gl
    this.scene = scene
    this.sizes = sizes

    this.group = new Transform();

    this.galleryWrapperElement = document.querySelector(".detail__gallery__wrapper")
    this.mediasElements = document.querySelectorAll('.detail__media')

    this.scroll = {
      current: 0,
      start: 0,
      target: 0,
      lerp: 0.1,
      velocity: 1,
    };

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

  show(){
    map(this.medias, media => media.show())
  }

  hide(){
    map(this.medias, media => media.hide())
  }

  onResize(event){
    this.sizes = event.sizes;

    this.bounds = this.galleryWrapperElement.getBoundingClientRect();

    this.scroll.last = this.scroll.target = 0;

    map(this.medias, (media) => media.onResize(event, this.scroll));

    this.scroll.limit = this.bounds.width - this.medias[0].element.clientWidth;
  }

  onTouchDown(event){}

  onTouchMove(event){}

  onTouchUp(event){}

  onWheel({ pixelY }){
    this.scroll.target += pixelY;
  }

  update(scroll){
    map(this.medias, media => media.update(scroll))
  }

  destroy(){
    this.scene.removeChild(this.group);
  }
}
