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

  textShow(){
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
      easing: 'easeOutQuint',
      duration: 700,
      delay: anime.stagger(50)
    })

    anime({
      targets: this.links,
      opacity: [0, 1],
      duration: 700,
      easing: 'linear',
      delay: 1000
    }) 
  }

  textHide(){
    anime({
      targets: this.spans,
      translateY: '-105%',
      easing: 'easeOutQuint',
      duration: 700,
    })

    anime({
      targets: this.links,
      opacity: 0,
      duration: 500,
      easing: 'linear'
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
