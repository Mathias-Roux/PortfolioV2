import anime from 'animejs';

import Page from "../../classes/Page"

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
      translateY: ['105%', '0%'],
      easing: 'easeOutQuint',
      duration: 700,
      delay: anime.stagger(50)
    })
  }

  textHide(){
    anime({
      targets: this.texts,
      translateY: '-105%',
      easing: 'easeOutQuint',
      duration: 700,
    })
  }

  async show(){
    super.show()

    this.textShow()
  }

  async hide(){
    super.hide()

    this.textHide()
  }
}
