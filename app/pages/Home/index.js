import GSAP from 'gsap'

import Page from "../../classes/Page"

import Detection from 'classes/Detection'


export default class Home extends Page {
  constructor(){
    super({
      id: 'home',
      element: '.home',
      elements: {
        wrapper: '.home__wrapper'
      }
    })

    Detection.isDesktop() ? this.textAnimation() : null
  }

  textAnimation(){
    this.page = document.querySelector('.home')

    this.titles = this.page.querySelectorAll('.item__wrapper__title')

    this.titles.forEach(title => {
      const letters = title.innerHTML.split('')
      title.innerHTML = ""

      letters.forEach(letter => {
        title.innerHTML += `<div>${letter}</div>`
      })
    });
  
    this.titleLetters = this.page.querySelectorAll('.item__wrapper__title div')

    this.animationIn = GSAP.timeline()
    this.animationIn.fromTo(this.titleLetters,{
        y: '10%',
        opacity: 0
      },
      {
        y: '0%',
        opacity: 1,
        stagger: .03
      }, "+=2") 
  }
}

