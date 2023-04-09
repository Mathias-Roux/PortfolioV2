import GSAP from 'gsap'

import Page from "../../classes/Page"

import Detection from 'classes/Detection'

export default class Home extends Page {
  constructor(){
    super({
      id: 'home',
      element: '.home',
      elements: {
        wrapper: '.home__list'
      }
    })
  }

  async show(){
    super.show()

    Detection.isDesktop() ? this.textAnimation() : null
  }

  textAnimation(){
    this.page = document.querySelector('.home')

    this.texts = this.page.querySelectorAll('.item__wrapper')
  

    this.animationIn = GSAP.timeline()
    this.animationIn.fromTo(this.texts,{
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
      ease: 'cubic-bezier(0.77, 0, 0.175, 1)',
      duration: .5
    }, '+=1')
  }
}
