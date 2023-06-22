import anime from 'animejs';

import Component from '../classes/Component'

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
        targets: this.elements.links[1],
        pointerEvents:'none',
        translateY: '-110%',
        easing: 'easeOutQuint',
        duration: 700
      })

      anime.set(this.elements.links[0], {
        translateY: '110%',
        pointerEvents:'auto'
      })
      anime({
        targets: this.elements.links[0],
        easing: 'easeOutQuint',
        translateY: '0%',
        duration: 700
      })
    } else {
      anime({
        targets: this.elements.links[0],
        translateY: '-110%',
        pointerEvents:'none',
        easing: 'easeOutQuint',
        duration: 700
      })

      anime.set(this.elements.links[1], {
        translateY: '110%',
        pointerEvents:'auto'
      })
      anime({
        targets: this.elements.links[1],
        easing: 'easeOutQuint',
        translateY: '0%',
        duration: 700
      })
    }
  }
}
