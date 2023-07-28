import anime from 'animejs'
import each from 'lodash/each'
import { Texture } from 'ogl'

import Component from "../classes/Component"


export default class Preloader extends Component{
  constructor({ canvas = null }){
    super({
      element: '.preloader',
      elements: {
        background: ".preloader__background",
        numberText: '.preloader__number__text'
      }
    })

    this.canvas = canvas

    window.TEXTURES = {}

    this.length = 0

    this.createLoader()
  }

  createLoader(){
    this.canvas ?

      each(window.ASSETS, image => {
        const texture = new Texture(this.canvas.gl, {
          generateMipMaps: false
        })

        const media = new window.Image()

        media.crossOrigin = 'anonymous'
        media.src = image
        media.onload = _ => {
          texture.image = media

          this.onAssetLoaded()
        }

        window.TEXTURES[image] = texture
      })

      :

      each(window.ASSETS, image => {
        const media = new window.Image()

        media.crossOrigin = 'anonymous'
        media.src = image
        media.onload = _ => {
          this.onAssetLoaded()
        }
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
      
      this.animationOut = anime.timeline({
        begin: () => {
          this.emit('completed')
        },
        complete: () => {
          this.destroy()
        }
      })
    
      this.animationOut.add({
        targets: this.element,
        opacity: '0',
        easing: 'easeOutQuint',
        duration: 600
      }, 1000)
    })
  }

  destroy(){
    this.element.parentNode.removeChild(this.element)
  }
}
