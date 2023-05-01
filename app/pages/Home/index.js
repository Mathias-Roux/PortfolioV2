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
      easing: 'easeOutQuint',
      duration: 600,
      delay: anime.stagger(50, {start: 700})
    })
  }

  async show(){
    super.show()

    Detection.isDesktop() ? this.textShow() : null
  }
}
