import GSAP, { splitColor } from 'gsap'
import each from 'lodash/each'

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

    this.text = about__infos__row__text

    split({
      element: this.text,
      expression: '<br>'
    })
    split({
      element: this.text,
      expression: '<br>'
    })
  

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
