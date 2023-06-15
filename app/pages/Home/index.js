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

    this.mobile = isMobile
  }

  textShow(isPreloaded){
    this.page = document.querySelector('.home')
    this.texts = this.page.querySelectorAll('.item__wrapper')

    const delay = isPreloaded ? 1950 : 0
  
    if(this.mobile){
      anime({
        targets: this.page,
        opacity: ['0', '1'],
        easing: 'easeOutQuint',
        duration: 500
      })
    } else {
      anime({
        targets: this.texts,
        translateY: ['105%', '0%'],
        easing: 'easeOutQuint',
        duration: 700,
        delay: anime.stagger(50, {start: delay})
      })
    }
  }

  textHide(){
    if(this.mobile){
      anime({
        targets: this.page,
        opacity: '0',
        easing: 'easeOutCubic',
        duration: 500,
        complete: () => {
          this.page.remove()
        }
      })
    } else {
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
  }

  show(isPreloaded){
    this.textShow(isPreloaded)
  }

  hide(){
    this.textHide()
  }
}
