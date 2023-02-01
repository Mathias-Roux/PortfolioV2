import GSAP from 'gsap'

import Page from "../../classes/Page"

export default class Home extends Page {
  constructor(){
    super({
      id: 'home',
      element: '.home',
      elements: {
        wrapper: '.home__wrapper'
      }
    })
  }

  async show(){
    super.show()

    this.textAnimation()
  }

  textAnimation(){
    this.page = document.querySelector('.home')

    this.texts = this.page.querySelectorAll('.item__wrapper')
  

    this.animationIn = GSAP.timeline()
    this.animationIn.set(this.texts,{
      y: '100%',
    }) 

    this.animationIn.to(this.texts,{
      y: '0%',
      ease: 'cubic-bezier(0.77, 0, 0.175, 1)',
      duration: .5
    }, '+=1')
  }

  hide(){
    return super.hide()
  }
}
