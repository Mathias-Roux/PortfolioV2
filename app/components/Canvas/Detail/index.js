import { Plane, Transform } from 'ogl';
import map from 'lodash/map';

import Media from './Media';

export default class {
  constructor({ gl, scene, sizes }) {
    this.gl = gl
    this.scene = scene
    this.sizes = sizes

    this.group = new Transform();

    this.mediasElements = document.querySelectorAll('.detail__media')

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
    map(this.medias, media => media.onResize(event))
  }

  onTouchDown(event){}

  onTouchMove(event){}

  onTouchUp(event){}

  onWheel({ pixelY }){}

  update(scroll){
    map(this.medias, media => media.update(scroll))
  }

  destroy(){
    this.scene.removeChild(this.group);
  }
}
