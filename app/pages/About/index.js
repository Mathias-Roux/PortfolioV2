import anime from 'animejs';
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

    anime({
      targets: this.spans,
      translateY: ['105%', '0%'],
      ease: 'cubic-bezier(0.77, 0, 0.175, 1)',
      duration: 500,
      delay: anime.stagger(200)
    }, 1000)

    anime({
      targets: this.links,
      opacity: [0, 1],
      ease: 'cubic-bezier(0.77, 0, 0.175, 1)',
      duration: 500
    }, '+=200') 
  }
}
