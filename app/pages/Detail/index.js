import anime from 'animejs';
import { split } from '../../utils/text'
import each from 'lodash/each'

import Page from "../../classes/Page"

export default class Detail extends Page {
  constructor(isMobile){
    super({
      id: 'detail',
      device: isMobile,
      element: '.detail'
    })

    this.mobile = isMobile
  }

  textShow(isPreloaded){
    this.page = document.querySelector('.detail')

    this.texts = this.page.querySelectorAll('h1, h2, p')

    const delay = isPreloaded ? 1950 : 0

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

    if(this.mobile){
      anime({
        targets: this.page,
        opacity: ['0', '1'],
        easing: 'easeOutQuint',
        duration: 500
      })
    } else{
      anime({
        targets: this.spans,
        translateY: ['110%', '0%'],
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
        targets: this.spans,
        translateY: '-110%',
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
