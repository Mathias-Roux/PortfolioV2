import Component from 'classes/Component'

export default class Grid extends Component {
  constructor() {
    super({
      element: '.grid',
    })

    this.opacities = [0, 0.15, 0.30]
    this.index = 1
  }


  onChange() {
    if(this.index > 2){
      this.index = 0
    }

    this.element.style.opacity = this.opacities[this.index]
    this.index += 1
  }
}
