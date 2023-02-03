import GSAP from 'gsap'
import { split } from 'utils/text'
import each from 'lodash/each'

import Page from "../../classes/Page"

import Detection from 'classes/Detection'

export default class About extends Page {
  constructor(){
    super({
      id: 'about',
      element: '.about'
    })  
  }

  async show(){
    super.show()

    Detection.isDesktop() ? this.textAnimation() : null
  }

  textAnimation(){
    this.page = document.querySelector('.about')

    this.links = this.page.querySelectorAll('a')
    this.texts = this.page.querySelectorAll('h1, h2, p')

    each(this.texts, text => {
      split({
        element: text,
        expression: '<br>'
      })
      split({
        element: text,
        expression: '<br>'
      })
    })
    
    this.spans = this.page.querySelectorAll('span span')
  

    this.animationIn = GSAP.timeline()
    this.animationIn.set([this.spans, this.links],{
      y: '100%',
    }) 

    this.animationIn.to([this.spans, this.links],{
      y: '0%',
      ease: 'cubic-bezier(0.77, 0, 0.175, 1)',
      duration: .5
    }, '+=1')
  }

  hide(){
    return super.hide()
  }
}
