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
  
    
    anime({
      targets: this.texts,
      opacity: [0, 1],
      translateY: ['15%', '0%'],
      ease: 'cubicBezier(0.33, 1, 0.68, 1)',
      delay: anime.stagger(50)
    }, 1000)
  }

  async show(){
    super.show()

    Detection.isDesktop() ? this.textShow() : null
  }
}
