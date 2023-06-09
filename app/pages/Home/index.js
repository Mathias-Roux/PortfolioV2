import anime from 'animejs';

import Page from "../../classes/Page"

export default class Home extends Page {
  constructor(isMobile){
    super({
      id: 'home',
      device: isMobile,
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
      translateY: '-97%',
      easing: 'easeOutCubic',
      duration: 500,
      complete: () => {
        this.page.remove()
      }
    })
  }

  show(){
    this.textShow()
  }

  hide(){
    this.textHide()
  }
}
