import GSAP from 'gsap'

import Page from "../../classes/Page"

export default class About extends Page {
  constructor(){
    super({
      id: 'about',
      element: '.about'
    })

   
  }

  async show(){
    super.show()

    this.textAnimation()
  }

  textAnimation(){
    this.page = document.querySelector('.about')

    this.texts = [...this.page.querySelectorAll('h1, h2, p')]

    this.animationIn = GSAP.timeline()
    this.animationIn.set(this.texts,{
      y: '100%'
    }) 

    this.animationIn.to(this.texts,{
      y: '0%'
    }, '+=1')
  }

  hide(){
    return super.hide()
  }
}
