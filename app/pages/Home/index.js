import anime from 'animejs';

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
  
    this.animationIn = anime.timeline()
    this.animationIn({
      targets: this.texts,
      autoAlpha: [0, 1],
      y: ['15%', '0%'],
      ease: 'cubic-bezier(0.77, 0, 0.175, 1)',
      duration: 500,
      delay: anime.stagger(50)
    }, 1000)
  }

  async show(){
    super.show()

    Detection.isDesktop() ? this.textShow() : null
  }
}
