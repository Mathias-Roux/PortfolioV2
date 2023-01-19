import GSAP from 'gsap'
import Prefix from 'prefix'

import each from 'lodash/each'
import map from 'lodash/map'

import AsyncLoad from 'classes/AsyncLoad';
import Detection from 'classes/Detection'

export default class Page {
  constructor({
    element,
    elements,
    id
  }) {
    this.selector = element
    this.selectorChildren = {
      ...elements,

      preloaders: '[data-src]',
    }

    this.id = id

    this.transformPrefix = Prefix('transform')
  }

  create(){
    this.element = document.querySelector(this.selector)
    this.elements = {}

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 0
    }

    this.y = {
      start: 0,
      end: 0
    }

    each(this.selectorChildren, (entry, key) => {
      if (
        entry instanceof window.HTMLElement ||
        entry instanceof window.NodeList ||
        Array.isArray(entry)
      ) {
        this.elements[key] = entry;
      } else {
        this.elements[key] = document.querySelectorAll(entry)

        if (this.elements[key].length === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      }
    })

    Detection.isDesktop() ? null : this.createPreloader()
  }

  createPreloader() {
    this.preloaders = map(this.elements.preloaders, (element) => {
      return new AsyncLoad({ element });
    });
  }

  show(yValue){
    return new Promise(resolve => {
      this.animationIn = GSAP.timeline();
      this.animationIn.fromTo(this.element,{
        autoAlpha: 0,
        y: `${yValue}`
      },{
        autoAlpha: 1,
        y: 0
      });
      
      this.animationIn.call(_ => {
        this.addEventListeners()

        resolve()
      })
    })
  }

  hide(yValue){
    return new Promise(resolve => {
      this.removeEventListeners()

      this.animationOut = GSAP.timeline()

      this.animationOut.to(this.element, {
        y: `-${yValue}`,
        autoAlpha: 0,
        onComplete: resolve
      })
    })
  }

  onResize(){
    this.scroll.last = this.scroll.target = 0

    if (this.elements.wrapper) {
      this.scroll.limit = this.elements.wrapper.clientHeight - window.innerHeight;
    }
  }

  onTouchDown (e) {
    this.isDown = true;

    this.y.start = e.touches ? e.touches[0].clientY : e.clientY;

    this.scroll.last = this.scroll.current;
  }

  onTouchMove (e) {
    if (!this.isDown) return;

    const y = e.touches ? e.touches[0].clientY : e.clientY;

    this.y.end = y;

    const distance = this.y.start - this.y.end;

    this.scroll.target = this.scroll.last + distance;
  }

  onTouchUp (event) {
    this.isDown = false;
  }

  onWheel({ pixelY }){
    this.scroll.target += pixelY;
  }

  update(){
    this.scroll.target = GSAP.utils.clamp(0, this.scroll.limit, this.scroll.target)

    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, 0.1)

    if (this.scroll.current < 0.01) {
      this.scroll.current = 0;
    }

    if (this.elements.wrapper && Detection.isDesktop()) {
      this.elements.wrapper.style[this.transformPrefix] = `translate3d(0, -${this.scroll.current}px, 0)`;
    }

  }

  addEventListeners(){}

  removeEventListeners(){}
}
