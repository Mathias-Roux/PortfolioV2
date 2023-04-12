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

  textShow(){
    this.page = document.querySelector('.home')
    this.texts = this.page.querySelectorAll('.item__wrapper')
  
    this.animationIn = GSAP.timeline()
    this.animationIn.fromTo(this.texts,{
      autoAlpha: 0,
      y: '15%'
    }, {
      autoAlpha: 1,
      y: '0%',
      ease: 'cubic-bezier(0.77, 0, 0.175, 1)',
      duration: .5,
      stagger: .05
    }, '+=1')
  }

  textHide(){
    this.page = document.querySelector('.home')
    this.texts = this.page.querySelectorAll('.item__wrapper')
  
    this.animationIn = GSAP.timeline()
    this.animationIn.fromTo(this.texts,{
      autoAlpha: 0,
      y: '15%'
    }, {
      autoAlpha: 1,
      y: '0%',
      ease: 'cubic-bezier(0.77, 0, 0.175, 1)',
      duration: .5,
      stagger: .05
    }, '+=1')
  }

  async show(){
    super.show()

    Detection.isDesktop() ? this.textShow() : null
  }

  async hide(){
    super.hide()

    Detection.isDesktop() ? this.textHide() : null
  }

}
