import { Plane, Transform } from 'ogl';
import map from 'lodash/map';

import Media from './Media';

export default class {
  constructor({ gl, scene, sizes }) {
    this.gl = gl;
    this.sizes = sizes

    this.group = new Transform();

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

  show(){
    map(this.medias, media => media.show())
  }

  hide(){
    map(this.medias, media => media.hide())
  }

  onResize(event){
    map(this.medias, media => media.hide())
  }

  onTouchDown(event){}

  onTouchMove(event){}

  onTouchUp(event){}

  onWheel({ pixelY }){}

  update(scroll){
    map(this.medias, media => media.update(scroll))
  }

  destroy(){
    map(this.medias, media => media.destroy())
  }
}
