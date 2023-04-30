import anime from 'animejs';

import Component from 'classes/Component'

export default class Navigation extends Component {
  constructor({ template }) {
    super({
      element: '.navigation',
      elements: {
        items: '.navigation__list__item',
        links: '.navigation__list__link',
      },
    })

    this.onChange(template)
  }

  //this.elements.items[0] = About
  //this.elements.items[1] = Close

  onChange(template) {
    if (template === 'home') {
      anime({
        targets: this.elements.items[1],
        opacity: 0,
        translateY: '-100%',
        duration: 750,
        easing: 'cubic-bezier(0.520, 0.690, 0.340, 1.000)'
      })

      anime.set(this.elements.items[0], {
        translateY: '0%'
      })
      anime({
        targets: this.elements.items[0],
        opacity: 1,
        delay: 750,
        duration: 750
      })
    } else {
      anime({
        targets: this.elements.items[0],
        opacity: 0,
        translateY: '-100%',
        duration: 750,
        easing: 'cubic-bezier(0.520, 0.690, 0.340, 1.000)'
      })

      anime.set(this.elements.items[1], {
        translateY: '0%'
      })
      anime({
        targets: this.elements.items[1],
        opacity: 1,
        delay: 750,
        duration: 750
      })
    }
  }
}
