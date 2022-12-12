import GSAP from 'gsap'
import Prefix from 'prefix'

import each from 'lodash/each'
import map from 'lodash/map'

import AsyncLoad from 'classes/AsyncLoad';

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
      current: 0, //y
      target: 0, //scrollY
      last: 0, //old
      speed: 0
    }

    if (this.elements.home) {
      this.menuHeight = this.element.clientHeight;
      this.itemHeight = this.elements.items[0].clientHeight;
      this.wrapperHeight = this.elements.wrapper.clientHeight;
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

    this.createPreloader()
  }

  createPreloader() {
    this.preloaders = map(this.elements.preloaders, (element) => {
      return new AsyncLoad({ element });
    });
  }

  show(animation){
    return new Promise(resolve => {
      if (animation) {
        this.animationIn = animation;
      } else {
        this.animationIn = GSAP.timeline();
        this.animationIn.fromTo(this.element,{
          autoAlpha: 0
        },{
          autoAlpha: 1
        });
      }

      this.animationIn.call(_ => {
        this.addEventListeners()

        resolve()
      })
    })
  }

  hide(){
    return new Promise(resolve => {
      this.removeEventListeners()

      this.animationOut = GSAP.timeline()

      this.animationOut.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      })
    })
  }

  onWheel({ pixelY }){
    this.scroll.target += pixelY;
  }

  onResize(){
    if (this.elements.home) {
      this.menuHeight = this.element.clientHeight;
      this.itemHeight = this.elements.items[0].clientHeight;
      this.wrapperHeight = this.elements.wrapper.clientHeight;
    }
  }

  update(){
    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, 0.1)

    GSAP.set(this.elements.items, {
      y: i => {
        return i * this.itemHeight + this.scroll.current;
      },
      modifiers: {
        y: y => {
          const s = GSAP.utils.wrap(-this.itemHeight, this.wrapperHeight - this.itemHeight, parseInt(y));
          return `${s}px`;
        } } });
  }

  addEventListeners(){}

  removeEventListeners(){}
}
