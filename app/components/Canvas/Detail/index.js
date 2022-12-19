import { Plane, Transform } from 'ogl';
import GSAP from 'gsap';

import map from 'lodash/map';

import Media from './Media';

export default class {
  constructor({ gl, scene, sizes }) {
    this.gl = gl;
    this.scene = scene;
    this.sizes = sizes;

    this.group = new Transform();

    this.mediasElements = document.querySelectorAll( '.detail__media' )

    this.scroll = {
      current: 0,
      target: 0,
      lerp: 0.1
    };

    this.createGeometry();
    this.createGallery();

    this.onResize({
      sizes: this.sizes,
    });

    this.group.setParent(this.scene);

    this.show();
  }

  createGeometry() {
    this.geometry = new Plane(this.gl);
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


  /**
   * Animations.
   */
   show() {
    map(this.medias, (media) => media.show());
  }

  hide() {
    map(this.medias, (media) => media.hide());
  }

  /**
   * Events.
   */
  onResize(event) {
    this.sizes = event.sizes;

    this.scroll.last = this.scroll.target = 0;

    map(this.medias, (media) => media.onResize(event, this.scroll, this.medias[0].initialPosition));
  }

  onWheel({ pixelY }) {
    this.scroll.target -= pixelY;
  }

  /**
   * Update.
   */
  update() {
    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp);

    map(this.medias, (media) => {
      media.update(this.scroll.current, this.medias[0].initialPosition);
    })
  }

  /**
   * Destroy.
   */
  destroy() {
    this.scene.removeChild(this.group);
  }
}
