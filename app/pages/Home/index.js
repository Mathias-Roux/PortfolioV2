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
      duration: 500,
      ease: 'cubic-bezier(0.77, 0, 0.175, 1)',
      delay: anime.stagger(50),
    }, 1000)
  }

  async show(){
    super.show()

    Detection.isDesktop() ? this.textShow() : null
  }
}
