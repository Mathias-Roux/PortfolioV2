import anime from 'animejs';
import { split } from 'utils/text'
import each from 'lodash/each'

import Page from "../../classes/Page"

import Detection from 'classes/Detection'

export default class Detail extends Page {
  constructor(){
    super({
      id: 'detail',
      element: '.detail'
    })
  }

  textShow(){
    this.page = document.querySelector('.detail')

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
      translateY: ['110%', '0%'],
      easing: 'easeOutQuint',
      duration: 600,
      delay: anime.stagger(50, {start: 700})
    })
  }

  textHide(){
    anime({
      targets: this.spans,
      translateY: '-110%',
      easing: 'easeOutQuint',
      duration: 600
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
