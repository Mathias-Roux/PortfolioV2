import GSAP from 'gsap'
import each from 'lodash/each'
import { Texture } from 'ogl'

import Component from "../classes/Component";


export default class Preloader extends Component{
  constructor({ canvas = null }){
    super({
      element: '.preloader',
      elements: {
        title: '.preloader__text',
        number: '.preloader__number',
        numberText: '.preloader__number__text'
      }
    })

    this.canvas = canvas

    window.TEXTURES = {}

    const title = document.querySelector('.preloader__text')

    const titleDatas = title.getAttribute('data-text')

    each(titleDatas, letter => {
      title.innerHTML += `<span><span>${letter}</span></span>`
    })

    this.titleLetters = document.querySelectorAll('span span')

    this.length = 0

    this.createLoader()
  }

  createLoader(){
    each(window.ASSETS, image => {
      // const texture = new Texture(this.canvas.gl, {
      //   generateMipMaps: false
      // })

      const media = new window.Image()

      media.crossOrigin = 'anonymous'
      media.src = image
      media.onload = _ => {
        // texture.image = media

        this.onAssetLoaded()
      }

      // window.TEXTURES[image] = texture
    })
  }

  onAssetLoaded(){
    this.length++

    const percent = this.length / window.ASSETS.length

    this.elements.numberText.innerHTML = `${Math.round(percent * 100)}%`

    if (percent === 1) {
      this.onLoaded()
    }
  }

  onLoaded(){
    return new Promise(resolve => {
      this.emit('completed')

      this.animateOut = GSAP.timeline({
        delay: 1
      })

      this.animateOut.to(this.titleLetters, {
        duration: 1.5,
        ease: 'expo.out',
        x: '-100%'
      })

      this.animateOut.to(this.elements.numberText, {
        duration: 1.5,
        ease: 'expo.out',
        y: '150%'
      }, '-=1.5')

      this.animateOut.to(this.element, {
        autoAlpha: 0,
        duration: 1
      }, '-=0.5')

      this.animateOut.call(_ => {
        this.destroy()
      })
    })
  }

  destroy(){
    this.element.parentNode.removeChild(this.element)
  }
}
